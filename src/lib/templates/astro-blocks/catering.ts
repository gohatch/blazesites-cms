import type { SeedTemplate } from '../seed-templates';

export const cateringTemplate: SeedTemplate = {
  name: 'Feastar Catering',
  description: 'Premium catering template with warm earth tones, olive-green accents, core values, offerings showcase, gallery, and client testimonials. Refined and appetizing.',
  industry_tags: ['Catering', 'Events', 'Food Service'],
  style_tags: ['Warm', 'Earthy', 'Olive Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'catering',
  template_data: {
    pages: [
      {
        id: 'catering-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'catering-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'DISCOVER CULINARY EXCELLENCE',
              subheading: 'Premium catering services for weddings, corporate events, and private celebrations. Feastar Catering brings gourmet flavors and flawless service to every occasion.',
              ctaText: 'Get Started',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#2A2A1A',
              padding: '120px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-stats',
            type: 'stats',
            order: 1,
            content: {
              stats: [
                { value: '500+', label: 'Events Catered' },
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Expert Chefs' },
                { value: '98%', label: 'Client Satisfaction' },
              ],
            },
            settings: {
              backgroundColor: '#2A2A1A',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-values',
            type: 'features',
            order: 2,
            content: {
              heading: 'Our Core Values',
              subheading: 'What We Stand For',
              features: [
                { title: 'Excellence', description: 'Every dish is crafted to perfection with meticulous attention to detail and presentation.', icon: 'star' },
                { title: 'Innovation', description: 'We push culinary boundaries with creative flavors, techniques, and modern presentation styles.', icon: 'zap' },
                { title: 'Quality', description: 'Only the finest seasonal ingredients sourced from trusted local farms and artisan producers.', icon: 'shield' },
                { title: 'Sustainability', description: 'Committed to eco-friendly practices, zero-waste kitchens, and responsible sourcing.', icon: 'heart' },
              ],
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#2A2A1A',
              padding: '80px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-offerings',
            type: 'features',
            order: 3,
            content: {
              heading: 'Our Offerings',
              subheading: 'What We Offer',
              features: [
                { title: 'Buffet Catering', description: 'Elegant buffet spreads for large gatherings with a wide selection of cuisines and dietary options.', icon: 'users' },
                { title: 'Meal Boxes', description: 'Individual gourmet meal boxes perfect for corporate events, meetings, and intimate gatherings.', icon: 'briefcase' },
                { title: 'Snack Boxes', description: 'Curated snack selections for conferences, workshops, and casual events.', icon: 'star' },
                { title: 'Food Stalls', description: 'Live cooking stations and food stalls that bring an interactive dining experience to your event.', icon: 'zap' },
              ],
            },
            settings: {
              backgroundColor: '#F5F0E8',
              textColor: '#2A2A1A',
              padding: '80px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-about',
            type: 'about',
            order: 4,
            content: {
              heading: 'Your Culinary Journey Starts Here',
              text: 'With over 10 years of excellence, Feastar Catering has been transforming events into extraordinary culinary experiences. Our team of expert chefs and event specialists are passionate about creating memorable moments through exceptional food and impeccable service.',
              image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#2A2A1A',
              padding: '80px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-gallery',
            type: 'gallery',
            order: 5,
            content: {
              heading: 'Visual Gallery',
              subheading: 'Our Portfolio',
              images: [
                { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', alt: 'Catering buffet spread' },
                { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80', alt: 'Gourmet plated dish' },
                { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Chef preparing food' },
                { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Elegant table setting' },
              ],
            },
            settings: {
              backgroundColor: '#2A2A1A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-testimonials',
            type: 'testimonials',
            order: 6,
            content: {
              heading: 'Hear From Our Clients',
              testimonials: [
                { quote: 'Feastar transformed our wedding reception into an unforgettable culinary experience. Every guest raved about the food for weeks afterward. Truly exceptional service from start to finish.', author: 'Sarah Mitchell', role: 'Bride, Summer Wedding 2024' },
                { quote: 'We hired Feastar for our annual corporate gala and they exceeded every expectation. The presentation was stunning, the flavors were incredible, and the team was so professional.', author: 'James Rodriguez', role: 'CEO, Vertex Technologies' },
                { quote: 'From the tasting session to the final event, Feastar was a dream to work with. Their attention to detail and passion for food shines through in everything they do.', author: 'Emily Nakamura', role: 'Event Planner, Luxe Events' },
              ],
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#2A2A1A',
              padding: '80px 0',
              accentColor: '#5C6B1F',
            },
          },
          {
            id: 'catering-cta',
            type: 'cta',
            order: 7,
            content: {
              heading: 'Ready to Elevate Your Culinary Journey?',
              subheading: 'Get started today and let us create something extraordinary for your next event.',
              ctaText: 'Get Started Today',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#2A2A1A',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#E85D26',
            },
          },
          {
            id: 'catering-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: 'Feastar Catering',
              tagline: 'Premium catering services for weddings, corporate events, and private celebrations.',
              links: [
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#offerings' },
                { label: 'Blog', href: '#gallery' },
              ],
              email: 'hello@feastar.com',
              phone: '(555) 890-1234',
            },
            settings: {
              backgroundColor: '#2A2A1A',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#5C6B1F',
            },
          },
        ],
      },
    ],
  },
};
