// ---------------------------------------------------------------------------
// Section registry for the content-first editor
// Maps every editable section of AstroBrandContent to field definitions.
// ---------------------------------------------------------------------------

export type FieldType = 'text' | 'textarea' | 'color' | 'image' | 'font' | 'repeater';

export interface FieldDef {
  path: string;                              // dot-path into AstroBrandContent
  label: string;
  type: FieldType;
  placeholder?: string;
  repeaterFields?: FieldDef[];               // nested fields when type === 'repeater'
  defaultItem?: () => Record<string, unknown>; // factory for new repeater items
}

export interface SectionDef {
  id: string;
  label: string;
  icon: string;   // lucide icon name
  group: 'brand' | 'sections' | 'seo';
  fields: FieldDef[];
}

// ---------------------------------------------------------------------------
// All 16 sections
// ---------------------------------------------------------------------------

export const contentSections: SectionDef[] = [
  // ---- Brand group ----
  {
    id: 'brand',
    label: 'Brand',
    icon: 'Building2',
    group: 'brand',
    fields: [
      { path: 'name', label: 'Business Name', type: 'text', placeholder: 'Acme Corp' },
      { path: 'tagline', label: 'Tagline', type: 'text', placeholder: 'Your catchy tagline' },
      { path: 'description', label: 'Description', type: 'textarea', placeholder: 'Brief description of your business' },
      { path: 'phone', label: 'Phone', type: 'text', placeholder: '(555) 123-4567' },
      { path: 'email', label: 'Email', type: 'text', placeholder: 'hello@example.com' },
      { path: 'address', label: 'Address', type: 'text', placeholder: '123 Main St, City, ST 12345' },
    ],
  },
  {
    id: 'colors',
    label: 'Colors',
    icon: 'Palette',
    group: 'brand',
    fields: [
      { path: 'colors.primary', label: 'Primary', type: 'color' },
      { path: 'colors.primaryDark', label: 'Primary Dark', type: 'color' },
      { path: 'colors.primaryLight', label: 'Primary Light', type: 'color' },
      { path: 'colors.accent', label: 'Accent', type: 'color' },
      { path: 'colors.bg', label: 'Background', type: 'color' },
      { path: 'colors.bgDark', label: 'Background Dark', type: 'color' },
      { path: 'colors.white', label: 'White', type: 'color' },
      { path: 'colors.text', label: 'Text', type: 'color' },
      { path: 'colors.textLight', label: 'Text Light', type: 'color' },
      { path: 'colors.border', label: 'Border', type: 'color' },
    ],
  },
  {
    id: 'fonts',
    label: 'Fonts',
    icon: 'Type',
    group: 'brand',
    fields: [
      { path: 'fonts.heading', label: 'Heading Font', type: 'font', placeholder: 'Inter' },
      { path: 'fonts.body', label: 'Body Font', type: 'font', placeholder: 'Inter' },
    ],
  },

  // ---- Sections group ----
  {
    id: 'navigation',
    label: 'Navigation',
    icon: 'Navigation',
    group: 'sections',
    fields: [
      {
        path: 'nav',
        label: 'Nav Links',
        type: 'repeater',
        repeaterFields: [
          { path: 'label', label: 'Label', type: 'text', placeholder: 'About' },
          { path: 'href', label: 'Link', type: 'text', placeholder: '#about' },
        ],
        defaultItem: () => ({ label: '', href: '' }),
      },
    ],
  },
  {
    id: 'hero',
    label: 'Hero',
    icon: 'Layout',
    group: 'sections',
    fields: [
      { path: 'hero.eyebrow', label: 'Eyebrow', type: 'text', placeholder: 'Welcome to' },
      { path: 'hero.heading', label: 'Heading', type: 'text', placeholder: 'Your main headline' },
      { path: 'hero.subheading', label: 'Subheading', type: 'textarea', placeholder: 'Supporting text' },
      { path: 'hero.cta', label: 'CTA Button', type: 'text', placeholder: 'Get Started' },
      { path: 'hero.ctaSecondary', label: 'Secondary CTA', type: 'text', placeholder: 'Learn More' },
      { path: 'hero.image', label: 'Hero Image', type: 'image' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    icon: 'BookOpen',
    group: 'sections',
    fields: [
      { path: 'about.eyebrow', label: 'Eyebrow', type: 'text', placeholder: 'About Us' },
      { path: 'about.heading', label: 'Heading', type: 'text', placeholder: 'Our Story' },
      { path: 'about.body', label: 'Body', type: 'textarea', placeholder: 'Tell your story...' },
      {
        path: 'about.values',
        label: 'Values',
        type: 'repeater',
        repeaterFields: [
          { path: 'icon', label: 'Icon', type: 'text', placeholder: 'Heart' },
          { path: 'title', label: 'Title', type: 'text', placeholder: 'Quality' },
          { path: 'desc', label: 'Description', type: 'textarea', placeholder: 'Why this matters' },
        ],
        defaultItem: () => ({ icon: '', title: '', desc: '' }),
      },
      { path: 'about.image', label: 'About Image', type: 'image' },
    ],
  },
  {
    id: 'stats',
    label: 'Stats',
    icon: 'BarChart3',
    group: 'sections',
    fields: [
      {
        path: 'stats',
        label: 'Stats',
        type: 'repeater',
        repeaterFields: [
          { path: 'value', label: 'Value', type: 'text', placeholder: '100' },
          { path: 'suffix', label: 'Suffix', type: 'text', placeholder: '+' },
          { path: 'label', label: 'Label', type: 'text', placeholder: 'Happy Clients' },
        ],
        defaultItem: () => ({ value: '', suffix: '', label: '' }),
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'Briefcase',
    group: 'sections',
    fields: [
      {
        path: 'services',
        label: 'Services',
        type: 'repeater',
        repeaterFields: [
          { path: 'name', label: 'Name', type: 'text', placeholder: 'Service name' },
          { path: 'desc', label: 'Description', type: 'textarea', placeholder: 'What this service includes' },
          { path: 'image', label: 'Image', type: 'image' },
        ],
        defaultItem: () => ({ name: '', desc: '', image: '' }),
      },
    ],
  },
  {
    id: 'benefits',
    label: 'Benefits',
    icon: 'Award',
    group: 'sections',
    fields: [
      {
        path: 'benefits',
        label: 'Benefits',
        type: 'repeater',
        repeaterFields: [
          { path: 'icon', label: 'Icon', type: 'text', placeholder: 'Star' },
          { path: 'title', label: 'Title', type: 'text', placeholder: 'Benefit title' },
          { path: 'desc', label: 'Description', type: 'textarea', placeholder: 'Why this matters' },
        ],
        defaultItem: () => ({ icon: '', title: '', desc: '' }),
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: 'CreditCard',
    group: 'sections',
    fields: [
      {
        path: 'pricing',
        label: 'Pricing Plans',
        type: 'repeater',
        repeaterFields: [
          { path: 'name', label: 'Plan Name', type: 'text', placeholder: 'Basic' },
          { path: 'price', label: 'Price', type: 'text', placeholder: '$29' },
          { path: 'period', label: 'Period', type: 'text', placeholder: '/month' },
          { path: 'desc', label: 'Description', type: 'text', placeholder: 'For individuals' },
          { path: 'features', label: 'Features', type: 'textarea', placeholder: 'One feature per line' },
          { path: 'cta', label: 'CTA', type: 'text', placeholder: 'Get Started' },
          { path: 'highlight', label: 'Highlighted', type: 'text', placeholder: 'true / false' },
        ],
        defaultItem: () => ({ name: '', price: '', period: '', desc: '', features: [], cta: '', highlight: false, image: '' }),
      },
    ],
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    icon: 'MessageSquare',
    group: 'sections',
    fields: [
      {
        path: 'testimonials',
        label: 'Testimonials',
        type: 'repeater',
        repeaterFields: [
          { path: 'name', label: 'Name', type: 'text', placeholder: 'Jane Doe' },
          { path: 'role', label: 'Role', type: 'text', placeholder: 'CEO at Company' },
          { path: 'quote', label: 'Quote', type: 'textarea', placeholder: 'What they said...' },
          { path: 'avatar', label: 'Avatar', type: 'image' },
        ],
        defaultItem: () => ({ name: '', role: '', quote: '', avatar: '' }),
      },
    ],
  },
  {
    id: 'cta',
    label: 'Call to Action',
    icon: 'Megaphone',
    group: 'sections',
    fields: [
      { path: 'cta.heading', label: 'Heading', type: 'text', placeholder: 'Ready to get started?' },
      { path: 'cta.subheading', label: 'Subheading', type: 'textarea', placeholder: 'Take the next step' },
      { path: 'cta.primary', label: 'Primary CTA', type: 'text', placeholder: 'Get Started' },
      { path: 'cta.secondary', label: 'Secondary CTA', type: 'text', placeholder: 'Learn More' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'Mail',
    group: 'sections',
    fields: [
      { path: 'contact.heading', label: 'Heading', type: 'text', placeholder: 'Get in Touch' },
      { path: 'contact.subheading', label: 'Subheading', type: 'textarea', placeholder: 'We\'d love to hear from you' },
      { path: 'contact.image', label: 'Contact Image', type: 'image' },
      {
        path: 'contact.hours',
        label: 'Business Hours',
        type: 'repeater',
        repeaterFields: [
          { path: 'days', label: 'Days', type: 'text', placeholder: 'Mon - Fri' },
          { path: 'time', label: 'Time', type: 'text', placeholder: '9:00 AM - 5:00 PM' },
        ],
        defaultItem: () => ({ days: '', time: '' }),
      },
    ],
  },
  {
    id: 'footer',
    label: 'Footer',
    icon: 'Columns3',
    group: 'sections',
    fields: [
      { path: 'footer.tagline', label: 'Tagline', type: 'text', placeholder: 'Built with care' },
      {
        path: 'footer.socials',
        label: 'Social Links',
        type: 'repeater',
        repeaterFields: [
          { path: 'name', label: 'Platform', type: 'text', placeholder: 'Twitter' },
          { path: 'href', label: 'URL', type: 'text', placeholder: 'https://twitter.com/...' },
        ],
        defaultItem: () => ({ name: '', href: '' }),
      },
    ],
  },

  // ---- SEO group ----
  {
    id: 'seo',
    label: 'SEO',
    icon: 'Search',
    group: 'seo',
    fields: [
      { path: 'seo.homepage.title', label: 'Page Title', type: 'text', placeholder: 'My Business | Tagline' },
      { path: 'seo.homepage.description', label: 'Meta Description', type: 'textarea', placeholder: 'A compelling description for search engines' },
      { path: 'seo.keywords', label: 'Keywords', type: 'textarea', placeholder: 'keyword1, keyword2, keyword3' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

export function getSectionById(id: string): SectionDef | undefined {
  return contentSections.find((s) => s.id === id);
}

export function getSectionsByGroup(group: SectionDef['group']): SectionDef[] {
  return contentSections.filter((s) => s.group === group);
}
