export type UserRole = 'owner' | 'admin' | 'manager' | 'editor' | 'viewer';
export type ProjectStatus = 'draft' | 'in_progress' | 'under_review' | 'live' | 'archived' | 'building';
export type ClientStatus = 'active' | 'inactive' | 'prospect';
export type LeadStage = 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: UserRole;
  subscription_tier: SubscriptionTier;
  org_id: string;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  subscription_tier: SubscriptionTier;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  status: ClientStatus;
  notes?: string;
  org_id: string;
  created_at: string;
  updated_at: string;
}

export interface ClientNote {
  id: string;
  client_id: string;
  user_id: string;
  content: string;
  type: 'note' | 'call' | 'email' | 'meeting';
  created_at: string;
}

export interface BrandProfile {
  businessName: string;
  industry?: IndustryCategory;
  industryConfidence?: number;
  colors: {
    primary: string;
    secondary?: string;
    accent?: string;
    background?: string;
    text?: string;
  };
  logoUrl?: string;
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  images: {
    hero?: string;
    about?: string;
    gallery?: string[];
  };
  content: {
    tagline?: string;
    about?: string;
    services?: string[];
  };
  sourceUrl: string;
}

export interface Project {
  id: string;
  name: string;
  client_id: string;
  template_id?: string;
  status: ProjectStatus;
  domain?: string;
  subdomain?: string;
  custom_domain?: string;
  dns_verified?: boolean;
  built_url?: string;
  published_at?: string;
  brand_profile?: BrandProfile;
  org_id: string;
  created_at: string;
  updated_at: string;
  client?: Client;
}

export type SubscriptionTier = 'starter' | 'growth' | 'pro' | 'agency';

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  price: number;
  site_limit: number;
  stripe_price_id: string;
  features: string[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail_url?: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  status: 'active' | 'archived';
  template_data: TemplateData;
  template_type?: 'block' | 'astro';
  template_dir?: string;
  created_at: string;
  updated_at: string;
}

export interface TemplateData {
  pages: TemplatePage[];
}

export interface TemplatePage {
  id: string;
  name: string;
  slug: string;
  blocks: Block[];
}

export interface Block {
  id: string;
  type: BlockType;
  content: Record<string, unknown>;
  settings: BlockSettings;
  order: number;
}

export type BlockType =
  | 'hero'
  | 'features'
  | 'about'
  | 'testimonials'
  | 'contact'
  | 'cta'
  | 'footer'
  | 'text'
  | 'image'
  | 'gallery'
  | 'pricing'
  | 'faq'
  | 'team'
  | 'stats';

export interface BlockSettings {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  maxWidth?: string;
  customClasses?: string;
  accentColor?: string;
  overlayOpacity?: number;
  borderRadius?: string;
  variant?: string;
  backgroundImage?: string;
}

export interface WebsitePage {
  id: string;
  project_id: string;
  name: string;
  slug: string;
  blocks: Block[];
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  stage: LeadStage;
  value?: number;
  notes?: string;
  org_id: string;
  created_at: string;
  updated_at: string;
}

export interface Media {
  id: string;
  filename: string;
  url: string;
  size: number;
  mime_type: string;
  project_id?: string;
  org_id: string;
  created_at: string;
}

// --- Onboarding + AI Content Types ---

export type IndustryCategory =
  | 'Health & Wellness'
  | 'Fitness & Sports'
  | 'Real Estate'
  | 'Food & Dining'
  | 'Beauty & Salon'
  | 'Dental'
  | 'Construction'
  | 'Legal'
  | 'Education'
  | 'Technology'
  | 'Retail & E-Commerce'
  | 'Automotive'
  | 'Photography'
  | 'Marketing & Agency'
  | 'General Business';

export interface AstroBrandContent {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accent: string;
    bg: string;
    bgDark: string;
    white: string;
    text: string;
    textLight: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  nav: Array<{ label: string; href: string }>;
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cta: string;
    ctaSecondary: string;
    image: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    values: Array<{ icon: string; title: string; desc: string }>;
    image: string;
  };
  stats: Array<{ value: string; suffix: string; label: string }>;
  services: Array<{
    name: string;
    desc: string;
    image: string;
    level?: string;
    duration?: string;
    icon?: string;
  }>;
  benefits: Array<{ icon: string; title: string; desc: string }>;
  pricing: Array<{
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    cta: string;
    highlight: boolean;
    image: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }>;
  cta: {
    heading: string;
    subheading: string;
    primary: string;
    secondary: string;
  };
  contact: {
    heading: string;
    subheading: string;
    image: string;
    hours: Array<{ days: string; time: string }>;
  };
  footer: {
    tagline: string;
    socials: Array<{ name: string; href: string }>;
  };
  seo: {
    homepage: { title: string; description: string };
    keywords: string[];
  };
  sectionOrder?: string[];
}

export interface ManualInput {
  businessName: string;
  description: string;
  industry: IndustryCategory;
  logoUrl?: string;
  colors?: {
    primary?: string;
    secondary?: string;
  };
  phone?: string;
  email?: string;
  address?: string;
}

export interface OnboardingProfile {
  id: string;
  user_id: string;
  org_id: string;
  business_name?: string;
  website_url?: string;
  industry?: string;
  scraped_brand?: BrandProfile;
  ai_content?: AstroBrandContent;
  manual_input?: ManualInput;
  selected_template_id?: string;
  step: number;
  created_at: string;
  updated_at: string;
}
