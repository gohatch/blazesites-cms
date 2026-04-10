import type { SeedTemplate } from '../seed-templates';

export const beautySalonTemplate: SeedTemplate = {
  name: 'Bloom Beauty',
  description: 'Elegant beauty salon template with warm rose-gold tones, service gallery, team showcase, pricing menu, and testimonials. Luxurious and inviting.',
  industry_tags: ['Beauty Salon', 'Spa', 'Hair Salon'],
  style_tags: ['Elegant', 'Warm', 'Rose Gold'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'beauty-salon',
  template_data: {
    pages: [
      {
        id: 'beauty-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'beauty-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Where Beauty Meets Artistry',
              subheading: 'Premium hair, skin, and beauty services crafted to reveal your natural radiance in a luxurious, welcoming environment.',
              ctaText: 'Book Appointment',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=800&fit=crop',
            },
            settings: {
              backgroundColor: '#3D3D3D',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'Crafting Beauty Since 2012',
              text: 'What began as a small studio with a big dream has blossomed into a full-service beauty destination. Our team of talented artists and therapists are united by a single mission: to make you look and feel your absolute best. We believe beauty is personal, and every service we offer is tailored to celebrate your unique style.',
              image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=900&fit=crop',
            },
            settings: {
              backgroundColor: '#FDF9F6',
              textColor: '#3D3D3D',
              padding: '80px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-services',
            type: 'features',
            order: 2,
            content: {
              heading: 'Our Services',
              subheading: 'Indulge in our curated menu of beauty and wellness treatments',
              features: [
                { title: 'Hair Artistry', description: 'From precision cuts to hand-painted balayage, our master colorists and stylists create looks that are uniquely you.', icon: 'scissors' },
                { title: 'Skincare & Facials', description: 'Advanced facials, peels, and treatments using premium products to restore your skin\'s natural glow and vitality.', icon: 'sparkles' },
                { title: 'Nail Studio', description: 'Luxurious manicures, pedicures, and bespoke nail art in a serene space dedicated to detail and relaxation.', icon: 'palette' },
                { title: 'Bridal & Events', description: 'Complete beauty packages for your most memorable moments — from trial to the big day, we\'ve got you covered.', icon: 'heart' },
                { title: 'Massage & Wellness', description: 'Therapeutic and relaxation massages to ease tension and rejuvenate your body from head to toe.', icon: 'heart' },
                { title: 'Makeup', description: 'Editorial and everyday makeup artistry using luxury products for flawless, camera-ready looks.', icon: 'camera' },
              ],
            },
            settings: {
              backgroundColor: '#F9F4F1',
              textColor: '#3D3D3D',
              padding: '80px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-team',
            type: 'team',
            order: 3,
            content: {
              heading: 'Meet the Team',
              members: [
                { name: 'Isabella Moreau', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop' },
                { name: 'Sophia Chen', role: 'Lead Colorist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop' },
                { name: 'Aria Patel', role: 'Skincare Specialist', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop' },
                { name: 'Luna Rivera', role: 'Nail Artist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop' },
              ],
            },
            settings: {
              backgroundColor: '#FDF9F6',
              textColor: '#3D3D3D',
              padding: '80px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-stats',
            type: 'stats',
            order: 4,
            content: {
              stats: [
                { value: '12+', label: 'Years Experience' },
                { value: '30K', label: 'Happy Clients' },
                { value: '45+', label: 'Beauty Awards' },
                { value: '98%', label: 'Satisfaction Rate' },
              ],
            },
            settings: {
              backgroundColor: '#C28566',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#FDF9F6',
            },
          },
          {
            id: 'beauty-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'What Our Clients Say',
              testimonials: [
                { quote: 'Bloom Beauty transformed my hair completely. The balayage was absolutely stunning and the atmosphere is so relaxing. I\'ll never go anywhere else.', author: 'Natalie K.', role: 'Color Client' },
                { quote: 'The facial I had was the best I\'ve ever experienced. My skin was glowing for weeks. The team truly understands skincare on a whole other level.', author: 'Emma S.', role: 'Skincare Client' },
                { quote: 'My bridal package was absolutely perfect. From the trial to the big day, every detail was thought of. I felt like the most beautiful version of myself.', author: 'Jessica T.', role: 'Bridal Client' },
              ],
            },
            settings: {
              backgroundColor: '#F9F4F1',
              textColor: '#3D3D3D',
              padding: '80px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Treat Yourself Today',
              subheading: 'Book your appointment and experience the art of beauty in a space designed for you.',
              ctaText: 'Book Appointment',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#3D3D3D',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-contact',
            type: 'contact',
            order: 7,
            content: {
              heading: 'Book Your Appointment',
              fields: ['name', 'email', 'phone', 'service', 'message'],
            },
            settings: {
              backgroundColor: '#FDF9F6',
              textColor: '#3D3D3D',
              padding: '80px 0',
              accentColor: '#C28566',
            },
          },
          {
            id: 'beauty-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: 'Bloom Beauty',
              tagline: 'Premium hair, skin, and beauty services crafted to reveal your natural radiance in a luxurious, welcoming environment.',
              links: [
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Team', href: '#team' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ],
              email: 'hello@bloombeauty.com',
              phone: '(555) 234-5678',
            },
            settings: {
              backgroundColor: '#3D3D3D',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#C28566',
            },
          },
        ],
      },
    ],
  },
};
