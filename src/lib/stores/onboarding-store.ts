import { create } from 'zustand';
import type { BrandProfile, AstroBrandContent, ManualInput, IndustryCategory, Template } from '@/types';

export type OnboardingStep = 1 | 2 | 3 | 4 | 5;

interface OnboardingState {
  // Navigation
  step: OnboardingStep;
  setStep: (step: OnboardingStep) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Step 1: Business info
  businessName: string;
  websiteUrl: string;
  industry: IndustryCategory | '';
  location: { city: string; state: string; country: string };
  setBusinessName: (name: string) => void;
  setWebsiteUrl: (url: string) => void;
  setIndustry: (industry: IndustryCategory | '') => void;
  setLocation: (location: { city: string; state: string; country: string }) => void;
  detectLocation: () => Promise<void>;

  // Step 2: Brand scan / manual input
  scrapedBrand: BrandProfile | null;
  manualInput: ManualInput | null;
  isScanning: boolean;
  scanError: string | null;
  setScrapedBrand: (brand: BrandProfile | null) => void;
  setManualInput: (input: ManualInput | null) => void;
  setIsScanning: (scanning: boolean) => void;
  setScanError: (error: string | null) => void;

  // Step 3-4: AI content
  aiContent: AstroBrandContent | null;
  userEdits: Partial<AstroBrandContent>;
  isGenerating: boolean;
  generateError: string | null;
  setAiContent: (content: AstroBrandContent | null) => void;
  setUserEdits: (edits: Partial<AstroBrandContent>) => void;
  setIsGenerating: (generating: boolean) => void;
  setGenerateError: (error: string | null) => void;

  // Step 5: Template selection
  selectedTemplate: Template | null;
  recommendedTemplates: Template[];
  setSelectedTemplate: (template: Template | null) => void;
  setRecommendedTemplates: (templates: Template[]) => void;

  // Actions
  scanWebsite: () => Promise<void>;
  generateContent: () => Promise<void>;
  reset: () => void;
}

const initialState = {
  step: 1 as OnboardingStep,
  businessName: '',
  websiteUrl: '',
  industry: '' as IndustryCategory | '',
  location: { city: '', state: '', country: '' },
  scrapedBrand: null,
  manualInput: null,
  isScanning: false,
  scanError: null,
  aiContent: null,
  userEdits: {},
  isGenerating: false,
  generateError: null,
  selectedTemplate: null,
  recommendedTemplates: [],
};

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  ...initialState,

  setStep: (step) => set({ step }),
  nextStep: () => set((s) => ({ step: Math.min(s.step + 1, 5) as OnboardingStep })),
  prevStep: () => set((s) => ({ step: Math.max(s.step - 1, 1) as OnboardingStep })),

  setBusinessName: (businessName) => set({ businessName }),
  setWebsiteUrl: (websiteUrl) => set({ websiteUrl }),
  setIndustry: (industry) => set({ industry }),
  setLocation: (location) => set({ location }),
  detectLocation: async () => {
    if (!navigator.geolocation) return;
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
      );
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=10`,
        { headers: { 'User-Agent': 'Blazesites/1.0' } }
      );
      const data = await res.json();
      const addr = data.address || {};
      set({
        location: {
          city: addr.city || addr.town || addr.village || '',
          state: addr.state || addr.region || '',
          country: addr.country || '',
        },
      });
    } catch {
      // Silent fail — user can type manually
    }
  },

  setScrapedBrand: (scrapedBrand) => set({ scrapedBrand }),
  setManualInput: (manualInput) => set({ manualInput }),
  setIsScanning: (isScanning) => set({ isScanning }),
  setScanError: (scanError) => set({ scanError }),

  setAiContent: (aiContent) => set({ aiContent }),
  setUserEdits: (userEdits) => set({ userEdits }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setGenerateError: (generateError) => set({ generateError }),

  setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),
  setRecommendedTemplates: (recommendedTemplates) => set({ recommendedTemplates }),

  scanWebsite: async () => {
    const { websiteUrl, businessName } = get();
    if (!websiteUrl) return;

    set({ isScanning: true, scanError: null });
    try {
      const res = await fetch('/api/scrape-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: websiteUrl }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        set({ scanError: json.error || 'Failed to scan website', isScanning: false });
        return;
      }
      const brand = json.data as BrandProfile;
      // Auto-fill industry if detected with high confidence
      set({
        scrapedBrand: brand,
        businessName: brand.businessName || businessName,
        industry: brand.industry || get().industry,
        isScanning: false,
      });
    } catch {
      set({ scanError: 'Network error — please try again', isScanning: false });
    }
  },

  generateContent: async () => {
    const { scrapedBrand, manualInput, industry, location } = get();
    set({ isGenerating: true, generateError: null });
    const locationStr = [location.city, location.state].filter(Boolean).join(', ');
    try {
      const res = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scraped: scrapedBrand || undefined,
          manual: manualInput || undefined,
          industry: industry || undefined,
          location: locationStr || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        set({ generateError: json.error || 'Failed to generate content', isGenerating: false });
        return;
      }
      set({ aiContent: json.data, isGenerating: false });
    } catch {
      set({ generateError: 'Network error — please try again', isGenerating: false });
    }
  },

  reset: () => set(initialState),
}));
