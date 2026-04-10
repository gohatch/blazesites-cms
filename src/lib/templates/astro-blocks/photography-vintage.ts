import type { SeedTemplate } from '../seed-templates';

export const photographyVintageTemplate: SeedTemplate = {
  name: 'Story Studio',
  description: 'Vintage-inspired photography studio template with film grain aesthetic, rounded hero, service cards, portfolio grid, pricing tiers, testimonials, and contact form. Warm and artistic.',
  industry_tags: ['Photography', 'Creative', 'Studio'],
  style_tags: ['Vintage', 'Film', 'Artistic'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'photography-vintage',
  template_data: {
    pages: [
      {
        id: 'vintage-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'vintage-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Capture Moments That Last Forever',
              subheading: 'We turn your memories into timeless visuals — from weddings to brands, every story deserves to be beautifully told.',
              ctaText: 'Book a Session',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80',
            },
            settings: {
              backgroundColor: '#F7F4EF',
              textColor: '#2C2C2C',
              padding: '120px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'Behind the Lens',
              text: "Hi, I'm Drashti, a passionate photographer who believes every moment has a story worth capturing. With a keen eye for detail and a love for natural aesthetics, I specialize in creating images that feel real, emotional, and timeless. With a deep appreciation for natural light, subtle details, and genuine emotions, we approach every shoot with intention and artistry.",
              image: 'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?w=800&q=80',
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-services',
            type: 'features',
            order: 2,
            content: {
              heading: 'Our Services',
              subheading: 'What We Offer',
              features: [
                { title: 'Wedding Photography', description: 'Timeless, candid coverage of your entire celebration.', icon: 'camera' },
                { title: 'Portrait Sessions', description: 'Authentic portraits that capture your personality.', icon: 'users' },
                { title: 'Brand Photography', description: 'Visual storytelling that elevates your brand.', icon: 'sparkles' },
                { title: 'Event Coverage', description: 'Every moment, every detail, beautifully documented.', icon: 'star' },
              ],
            },
            settings: {
              backgroundColor: '#F7F4EF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-portfolio',
            type: 'gallery',
            order: 3,
            content: {
              heading: 'Our Portfolio',
              subheading: 'Selected Work',
              images: [
                { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80', alt: 'Editorial', caption: 'Editorial' },
                { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding', caption: 'Wedding' },
                { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Portrait', caption: 'Portrait' },
                { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', alt: 'Commercial', caption: 'Commercial' },
                { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', alt: 'Fashion', caption: 'Fashion' },
                { src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80', alt: 'Lifestyle', caption: 'Lifestyle' },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-stats',
            type: 'stats',
            order: 4,
            content: {
              stats: [
                { value: '350+', label: 'Sessions Shot' },
                { value: '8', label: 'Years Experience' },
                { value: '50+', label: 'Happy Clients' },
                { value: '10', label: 'Awards' },
              ],
            },
            settings: {
              backgroundColor: '#2C2C2C',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'Testimonials',
              testimonials: [
                { quote: 'The photos captured our wedding day perfectly. Every emotion, every detail — it was like reliving the day all over again.', author: 'Mia & Jackson', role: 'Wedding, 2024' },
                { quote: 'Story Studio has an incredible talent for making you feel comfortable and bringing out natural expressions. The results speak for themselves.', author: 'Arjun Patel', role: 'Brand Shoot' },
              ],
            },
            settings: {
              backgroundColor: '#F7F4EF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-pricing',
            type: 'pricing',
            order: 6,
            content: {
              heading: 'Our Packages',
              subheading: 'Investment',
              plans: [
                {
                  name: 'Starter',
                  price: '$450',
                  period: 'per session',
                  description: 'Perfect for portraits and personal sessions.',
                  features: ['1-hour session', '20 edited images', 'Online gallery', 'Print release'],
                  ctaText: 'Book Now',
                  ctaLink: '#contact',
                },
                {
                  name: 'Professional',
                  price: '$1,200',
                  period: 'per session',
                  description: 'Our most popular package for events and brands.',
                  features: ['4-hour coverage', '100+ edited images', 'Creative direction', 'Online gallery + prints', 'Sneak peek in 48hrs'],
                  ctaText: 'Book Now',
                  ctaLink: '#contact',
                  featured: true,
                },
                {
                  name: 'Premium',
                  price: '$2,800',
                  period: 'full day',
                  description: 'Complete coverage for weddings and large events.',
                  features: ['Full-day coverage', '500+ edited images', 'Second photographer', 'Engagement session included', 'Wedding album', 'Same-day previews'],
                  ctaText: 'Book Now',
                  ctaLink: '#contact',
                },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-cta',
            type: 'cta',
            order: 7,
            content: {
              heading: 'Ready to tell your story?',
              subheading: "Let's create something timeless together.",
              ctaText: 'Book a Session',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#2C2C2C',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-contact',
            type: 'contact',
            order: 8,
            content: {
              heading: "Let's Connect",
              text: 'Say Hello',
              email: 'hello@storystudio.co',
              phone: '+1 (555) 328-7741',
            },
            settings: {
              backgroundColor: '#F7F4EF',
              textColor: '#2C2C2C',
              padding: '80px 0',
              accentColor: '#E2DF4E',
            },
          },
          {
            id: 'vintage-footer',
            type: 'footer',
            order: 9,
            content: {
              companyName: 'Story Studio',
              tagline: 'Every click tells a story.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '/work' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@storystudio.co',
              phone: '+1 (555) 328-7741',
            },
            settings: {
              backgroundColor: '#2C2C2C',
              textColor: 'rgba(255,255,255,0.4)',
              padding: '48px 0',
              accentColor: '#E2DF4E',
            },
          },
        ],
      },
    ],
  },
};
