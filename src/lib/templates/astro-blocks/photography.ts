import type { SeedTemplate } from '../seed-templates';

export const photographyTemplate: SeedTemplate = {
  name: 'Celestial Photographs',
  description: 'Elegant wedding and portrait photography template with warm tones, portfolio gallery, bento grid, testimonials, and contact form. Refined and romantic.',
  industry_tags: ['Photography', 'Wedding', 'Portrait'],
  style_tags: ['Elegant', 'Warm', 'Romantic'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'photography',
  template_data: {
    pages: [
      {
        id: 'photo-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'photo-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Crafting love story through photography',
              subheading: 'Timeless wedding and portrait photography that captures your most precious moments with elegance and artistry.',
              ctaText: 'View Pricing & Availability',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80',
            },
            settings: {
              backgroundColor: '#F5EDE3',
              textColor: '#1A1A1A',
              padding: '120px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-gallery',
            type: 'gallery',
            order: 1,
            content: {
              heading: 'Portfolio',
              subheading: 'Recently Published',
              images: [
                { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', alt: 'A Day at The Orchard', caption: 'Vineyard Wedding — Niagara, Ontario' },
                { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Garden Bliss', caption: 'A Whimsical Wedding at The Greenhouse — Toronto, Ontario' },
                { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Timeless Elegance', caption: 'The Waterhouse — Muskoka, Ontario' },
              ],
            },
            settings: {
              backgroundColor: '#F5EDE3',
              textColor: '#1A1A1A',
              padding: '80px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-featured',
            type: 'gallery',
            order: 2,
            content: {
              heading: 'Featured Wedding',
              subheading: 'Timeless Moments',
              images: [
                { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Featured wedding moment', caption: '' },
                { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Ceremony details', caption: '' },
                { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', alt: 'Reception highlights', caption: '' },
                { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Couple portraits', caption: '' },
                { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80', alt: 'Wedding preparations', caption: '' },
                { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', alt: 'Floral arrangements', caption: '' },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1A1A1A',
              padding: '80px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-about',
            type: 'about',
            order: 3,
            content: {
              heading: 'About Us',
              text: "With a passion for candid wedding photography, we've spent over a decade capturing love stories across the country. Our approach combines artistic vision with an effortless documentary style, ensuring every frame feels authentic and timeless. We believe the best moments happen naturally — our job is simply to be there when they do.",
              image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80',
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#1A1A1A',
              padding: '80px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-stats',
            type: 'stats',
            order: 4,
            content: {
              stats: [
                { value: '500+', label: 'Weddings Captured' },
                { value: '12', label: 'Years Experience' },
                { value: '85+', label: '5-Star Reviews' },
                { value: '15', label: 'Awards Won' },
              ],
            },
            settings: {
              backgroundColor: '#F5EDE3',
              textColor: '#1A1A1A',
              padding: '64px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'Testimonials',
              testimonials: [
                { quote: "From the first consultation to receiving our gallery, every step was absolutely magical. The photos captured emotions we didn't even know were happening — pure, honest, and breathtakingly beautiful.", author: 'Jessica & Ben', role: 'Fall Wedding, 2024' },
                { quote: "We've never felt more comfortable in front of a camera. The results are stunning — every image tells a piece of our story that we'll treasure forever.", author: 'Sarah & Marcus', role: 'Summer Wedding, 2024' },
                { quote: "The team went above and beyond. They captured moments we didn't even realize were happening, and the final gallery brought us to tears. Absolutely worth every penny.", author: 'Emily & David', role: 'Spring Wedding, 2023' },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1A1A1A',
              padding: '80px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-contact',
            type: 'contact',
            order: 6,
            content: {
              heading: 'Get in Touch',
              text: "Let's chat about your special day.",
              email: 'hello@celestialphotographs.com',
              phone: '+1 (555) 742-8890',
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1A1A1A',
              padding: '80px 0',
              accentColor: '#8B7E5E',
            },
          },
          {
            id: 'photo-footer',
            type: 'footer',
            order: 7,
            content: {
              companyName: 'Celestial Photographs',
              tagline: 'Every frame tells a love story.',
              links: [
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@celestialphotographs.com',
              phone: '+1 (555) 742-8890',
            },
            settings: {
              backgroundColor: '#0D0D0D',
              textColor: 'rgba(255,255,255,0.5)',
              padding: '48px 0',
              accentColor: '#8B7E5E',
            },
          },
        ],
      },
    ],
  },
};
