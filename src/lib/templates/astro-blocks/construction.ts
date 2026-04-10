import type { SeedTemplate } from '../seed-templates';

export const constructionTemplate: SeedTemplate = {
  name: 'Summit Construction',
  description: 'Bold construction template with parallax hero, service cards, stats counters, and testimonial grid. Professional and trust-focused.',
  industry_tags: ['Construction', 'Building', 'Contractor'],
  style_tags: ['Professional', 'Bold', 'Dark Hero'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'construction',
  template_data: {
    pages: [
      {
        id: 'construction-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'construction-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Building excellence for over 35 years',
              subheading: 'Commercial and residential construction you can trust. From ground-breaking to grand opening, we deliver projects on time and on budget.',
              ctaText: 'Get a Free Quote',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-services',
            type: 'features',
            order: 1,
            content: {
              heading: 'Our Services',
              subheading: 'Comprehensive construction solutions from concept to completion',
              features: [
                { title: 'Residential Construction', description: 'Custom homes built to your exact specifications. From modern minimalist to traditional craftsmanship.', icon: 'home' },
                { title: 'Commercial Projects', description: 'Office buildings, retail spaces, and industrial facilities delivered on schedule and within budget.', icon: 'building' },
                { title: 'Renovations & Remodels', description: 'Transform your existing space with expert renovation services that maximize value and functionality.', icon: 'settings' },
                { title: 'Project Management', description: 'End-to-end oversight ensuring quality, timeline adherence, and transparent communication.', icon: 'clipboard' },
              ],
            },
            settings: {
              backgroundColor: '#F8FAFC',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-stats',
            type: 'stats',
            order: 2,
            content: {
              stats: [
                { value: '500+', label: 'Projects Completed' },
                { value: '35', label: 'Years Experience' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Active Team Members' },
              ],
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-about',
            type: 'about',
            order: 3,
            content: {
              heading: 'Three Decades of Building Trust',
              text: 'Founded in 1989, Summit Construction has grown from a small family operation into one of the region\'s most respected construction firms. We combine old-school craftsmanship with modern building technology to deliver projects that stand the test of time. Every project starts with listening — understanding your vision, your constraints, and your timeline. Then we execute with precision.',
              image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'What Our Clients Say',
              testimonials: [
                { quote: 'Summit delivered our office build three weeks ahead of schedule. Their attention to detail and communication throughout the project was exceptional.', author: 'Sarah Mitchell', role: 'CEO, TechFlow Inc.' },
                { quote: "We've used Summit for three projects now. They're our go-to for any construction work — reliable, professional, and the quality speaks for itself.", author: 'James Rodriguez', role: 'Director, Meridian Properties' },
                { quote: 'Our home renovation exceeded every expectation. The team was respectful, clean, and incredibly skilled. Can\'t recommend them enough.', author: 'Lisa & Tom Chen', role: 'Homeowners, Austin TX' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-cta',
            type: 'cta',
            order: 5,
            content: {
              heading: 'Ready to Build Something Great?',
              subheading: 'Get a free consultation and detailed estimate for your project. No obligation, no pressure.',
              ctaText: 'Get a Free Quote',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#D97706',
            },
          },
          {
            id: 'construction-footer',
            type: 'footer',
            order: 6,
            content: {
              companyName: 'Summit Construction',
              tagline: 'Commercial and residential construction you can trust. From ground-breaking to grand opening, we deliver projects on time and on budget.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@summitconstruction.com',
              phone: '(555) 234-5678',
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#D97706',
            },
          },
        ],
      },
    ],
  },
};
