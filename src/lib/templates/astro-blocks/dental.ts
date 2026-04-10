import type { SeedTemplate } from '../seed-templates';

export const dentalTemplate: SeedTemplate = {
  name: 'GlowDent',
  description: 'Modern dental practice template with warm cream tones, service carousel, stats counters, and patient testimonials. Calm and welcoming.',
  industry_tags: ['Dental', 'Healthcare', 'Medical'],
  style_tags: ['Modern', 'Warm', 'Professional'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'dental',
  template_data: {
    pages: [
      {
        id: 'dental-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'dental-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Your Smile, Our Priority',
              subheading: 'Combining advanced dental technology with personalized care, we help you maintain a healthy, radiant smile in a calm and welcoming environment.',
              ctaText: 'Book Appointment',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=1000&fit=crop&crop=face',
            },
            settings: {
              backgroundColor: '#EDE8E2',
              textColor: '#0B2D8C',
              padding: '120px 0',
              accentColor: '#0B2D8C',
            },
          },
          {
            id: 'dental-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'Focused on Smiles',
              text: 'We\'re a team of passionate dental professionals who combine precision, innovation, and kindness to offer personalized oral care in a calm and trusted environment.',
              image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&h=800&fit=crop',
            },
            settings: {
              backgroundColor: '#F5F0EB',
              textColor: '#0B2D8C',
              padding: '80px 0',
              accentColor: '#0B2D8C',
            },
          },
          {
            id: 'dental-services',
            type: 'features',
            order: 2,
            content: {
              heading: 'Complete Dental Care',
              subheading: 'Tailored treatments for every member of your family',
              features: [
                { title: 'Teeth Whitening', description: 'Brighten your smile safely and effectively with our professional-grade whitening treatments, customized to your comfort and goals.', icon: 'sparkles' },
                { title: 'Dental Recovery', description: 'From implants to full-mouth reconstructions, we restore your teeth\'s function and appearance using the latest dental technologies.', icon: 'heart' },
                { title: 'Braces & Aligners', description: 'We offer modern orthodontic solutions — from clear aligners to traditional braces — carefully planned to enhance your smile.', icon: 'star' },
                { title: 'Digital X-Rays', description: 'Advanced digital imaging for faster, safer, and more accurate diagnostics to guide your personalized treatment plan.', icon: 'zap' },
                { title: 'Pediatric Dentistry', description: 'Gentle, kid-friendly care that builds healthy habits early and makes every visit a positive experience for your child.', icon: 'users' },
                { title: 'Cosmetic Dentistry', description: 'Veneers, bonding, and smile makeovers designed to give you the confident, natural-looking smile you deserve.', icon: 'palette' },
              ],
            },
            settings: {
              backgroundColor: '#EDE8E2',
              textColor: '#0B2D8C',
              padding: '80px 0',
              accentColor: '#0B2D8C',
            },
          },
          {
            id: 'dental-stats',
            type: 'stats',
            order: 3,
            content: {
              stats: [
                { value: '15K+', label: 'Happy Patients' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '20+', label: 'Years Experience' },
                { value: '50+', label: 'Dental Experts' },
              ],
            },
            settings: {
              backgroundColor: '#0B2D8C',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#E8EEFB',
            },
          },
          {
            id: 'dental-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'What Our Patients Say',
              testimonials: [
                { quote: 'GlowDent completely transformed my smile. The team was professional, gentle, and made me feel at ease throughout the entire process.', author: 'Sarah M.', role: 'Whitening Patient' },
                { quote: 'My kids actually look forward to their dental visits now. The pediatric team is incredible with children — patient, fun, and thorough.', author: 'David K.', role: 'Parent' },
                { quote: 'After years of avoiding the dentist, GlowDent changed everything. The technology they use is impressive and the results speak for themselves.', author: 'Maria L.', role: 'Cosmetic Patient' },
              ],
            },
            settings: {
              backgroundColor: '#F5F0EB',
              textColor: '#0B2D8C',
              padding: '80px 0',
              accentColor: '#0B2D8C',
            },
          },
          {
            id: 'dental-cta',
            type: 'cta',
            order: 5,
            content: {
              heading: 'Ready for a Healthier Smile?',
              subheading: 'Schedule your visit today and take the first step toward a brighter, healthier smile.',
              ctaText: 'Book Appointment',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#071E5E',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#E8EEFB',
            },
          },
          {
            id: 'dental-contact',
            type: 'contact',
            order: 6,
            content: {
              heading: 'Book Your Visit',
              fields: ['name', 'email', 'phone', 'service', 'message'],
            },
            settings: {
              backgroundColor: '#EDE8E2',
              textColor: '#0B2D8C',
              padding: '80px 0',
              accentColor: '#0B2D8C',
            },
          },
          {
            id: 'dental-footer',
            type: 'footer',
            order: 7,
            content: {
              companyName: 'GlowDent',
              tagline: 'Combining advanced dental technology with personalized care, we help you maintain a healthy, radiant smile in a calm and welcoming environment.',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@glowdent.com',
              phone: '(555) 456-7890',
            },
            settings: {
              backgroundColor: '#071E5E',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#0B2D8C',
            },
          },
        ],
      },
    ],
  },
};
