import type { Block, BlockType } from '@/types';

export const blockTypeLabels: Record<BlockType, string> = {
  hero: 'Hero Section',
  features: 'Features',
  about: 'About',
  testimonials: 'Testimonials',
  contact: 'Contact Form',
  cta: 'Call to Action',
  footer: 'Footer',
  text: 'Text Block',
  image: 'Image',
  gallery: 'Gallery',
  pricing: 'Pricing',
  faq: 'FAQ',
  team: 'Team',
  stats: 'Stats',
};

export const blockDefaults: Record<BlockType, Omit<Block, 'id' | 'order'>> = {
  hero: {
    type: 'hero',
    content: {
      heading: 'Your Headline Here',
      subheading: 'A compelling subheadline that supports your main message.',
      ctaText: 'Get Started',
      ctaLink: '#',
    },
    settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '96px 0' },
  },
  features: {
    type: 'features',
    content: {
      heading: 'Our Features',
      subheading: 'Everything you need to succeed',
      features: [
        { title: 'Feature 1', description: 'Description of feature one.', icon: 'star' },
        { title: 'Feature 2', description: 'Description of feature two.', icon: 'zap' },
        { title: 'Feature 3', description: 'Description of feature three.', icon: 'shield' },
      ],
    },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
  },
  about: {
    type: 'about',
    content: {
      heading: 'About Us',
      text: 'Tell your story here. Share your mission, values, and what makes you unique.',
      image: '',
    },
    settings: { backgroundColor: '#f8f9fa', textColor: '#1a1a2e', padding: '80px 0' },
  },
  testimonials: {
    type: 'testimonials',
    content: {
      heading: 'What People Say',
      testimonials: [
        { quote: 'An amazing experience from start to finish.', author: 'Happy Client', role: 'CEO' },
      ],
    },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
  },
  contact: {
    type: 'contact',
    content: {
      heading: 'Get in Touch',
      fields: ['name', 'email', 'message'],
      submitText: 'Send Message',
    },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
  },
  cta: {
    type: 'cta',
    content: {
      heading: 'Ready to Get Started?',
      subheading: 'Take the next step today.',
      ctaText: 'Contact Us',
      ctaLink: '#',
    },
    settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
  },
  footer: {
    type: 'footer',
    content: {
      companyName: 'Your Company',
      tagline: 'Your tagline here.',
      links: [],
      email: 'info@example.com',
      phone: '(555) 123-4567',
    },
    settings: { backgroundColor: '#0d0d1a', textColor: '#cccccc', padding: '48px 0' },
  },
  text: {
    type: 'text',
    content: { heading: 'Section Title', text: 'Your content goes here.' },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '64px 0' },
  },
  image: {
    type: 'image',
    content: { src: '', alt: 'Image description', caption: '' },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '40px 0' },
  },
  gallery: {
    type: 'gallery',
    content: { heading: 'Gallery', images: [] },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '64px 0' },
  },
  pricing: {
    type: 'pricing',
    content: {
      heading: 'Pricing',
      plans: [
        { name: 'Basic', price: '$29/mo', features: ['Feature 1', 'Feature 2'] },
        { name: 'Pro', price: '$79/mo', features: ['All Basic features', 'Feature 3', 'Feature 4'] },
      ],
    },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
  },
  faq: {
    type: 'faq',
    content: {
      heading: 'FAQ',
      items: [
        { question: 'What is your return policy?', answer: 'We offer a 30-day return policy.' },
      ],
    },
    settings: { backgroundColor: '#f8f9fa', textColor: '#1a1a2e', padding: '80px 0' },
  },
  team: {
    type: 'team',
    content: {
      heading: 'Our Team',
      members: [
        { name: 'Team Member', role: 'Position', image: '' },
      ],
    },
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
  },
  stats: {
    type: 'stats',
    content: {
      stats: [
        { value: '100+', label: 'Clients' },
        { value: '500+', label: 'Projects' },
        { value: '99%', label: 'Satisfaction' },
      ],
    },
    settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
  },
};

export function createBlock(type: BlockType, order: number): Block {
  return {
    id: crypto.randomUUID(),
    order,
    ...blockDefaults[type],
  };
}
