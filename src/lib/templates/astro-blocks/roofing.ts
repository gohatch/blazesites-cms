import type { SeedTemplate } from '../seed-templates';

export const roofingTemplate: SeedTemplate = {
  name: 'ApexRoofing',
  description: 'Professional roofing template with trust badges, service cards, project gallery, and testimonial grid. Clean and authoritative.',
  industry_tags: ['Roofing', 'Construction', 'Home Services'],
  style_tags: ['Professional', 'Clean', 'Blue Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'roofing',
  template_data: {
    pages: [
      {
        id: 'roofing-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'roofing-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Superior Roofing Solutions',
              subheading: 'Protect your most valuable investment with our premium roofing systems. Weather-resistant, energy-efficient, and backed by industry-leading warranties.',
              ctaText: 'Get a Free Estimate',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '120px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-services',
            type: 'features',
            order: 1,
            content: {
              heading: 'Complete Roofing Solutions',
              subheading: 'From residential repairs to commercial installations, we deliver exceptional roofing services that protect what matters most to you.',
              features: [
                { title: 'Residential Roofing', description: 'Complete roof replacement, repair, and installation for your home.', icon: 'home' },
                { title: 'Commercial Roofing', description: 'Durable and efficient roofing solutions for businesses and industrial properties.', icon: 'building' },
                { title: 'Storm Damage Repair', description: 'Rapid response and repair for roofs damaged by wind, hail, or storms.', icon: 'shield' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'Three Generations of Roofing Excellence',
              text: 'Since 1985, the Johnson family has been protecting homes and businesses across the region with superior roofing craftsmanship. What started as a small family business has grown into the area\'s most trusted roofing contractor. We combine time-tested techniques with cutting-edge materials and technology. Our team of certified professionals doesn\'t just install roofs — we build lasting relationships with our clients through exceptional service and unmatched quality.',
              image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-benefits',
            type: 'features',
            order: 3,
            content: {
              heading: 'Unmatched Benefits for Your Peace of Mind',
              subheading: 'When you choose ApexRoofing, you\'re not just getting a roof — you\'re investing in decades of protection, backed by our family\'s commitment to excellence.',
              features: [
                { title: 'Lifetime Warranty Protection', description: 'Industry-leading warranties on materials and workmanship. Your investment is protected for decades.', icon: 'shield' },
                { title: 'Fast & Reliable Service', description: 'Quick response times for emergency repairs and efficient project completion without compromising quality.', icon: 'zap' },
                { title: 'Quality Guaranteed', description: 'Rigorous quality checks at every stage. We don\'t consider a job complete until you\'re 100% satisfied.', icon: 'star' },
              ],
            },
            settings: {
              backgroundColor: '#F8FAFC',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-gallery',
            type: 'gallery',
            order: 4,
            content: {
              heading: 'Craftsmanship That Speaks for Itself',
              subheading: 'Every project tells a story of quality, dedication, and attention to detail. Explore our recent work and see why homeowners trust ApexRoofing.',
              images: [
                { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', alt: 'Residential roof replacement' },
                { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Commercial roofing project' },
                { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Modern home roofing' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'What Our Clients Say',
              testimonials: [
                { quote: 'ApexRoofing replaced our entire roof in just two days. The crew was professional, clean, and the result is stunning.', author: 'David & Sarah Thompson', role: 'Homeowners, Denver CO' },
                { quote: 'After the hailstorm, they were at our house within hours. Handled the insurance claim and had our roof looking brand new within a week.', author: 'Michael Chen', role: 'Property Manager' },
                { quote: 'Three generations of roofing excellence isn\'t just a tagline — you can see it in every detail of their work.', author: 'Jennifer Walsh', role: 'Real Estate Developer' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0F172A',
              padding: '80px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Schedule your roofing consultation',
              subheading: 'Get a free inspection and detailed estimate for your roof.',
              ctaText: 'Get a Free Estimate',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#2563EB',
            },
          },
          {
            id: 'roofing-footer',
            type: 'footer',
            order: 7,
            content: {
              companyName: 'ApexRoofing',
              tagline: 'Protect your most valuable investment with our premium roofing systems. Weather-resistant, energy-efficient, and backed by industry-leading warranties.',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Materials', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@apexroofing.com',
              phone: '(555) 123-4567',
            },
            settings: {
              backgroundColor: '#0F172A',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#2563EB',
            },
          },
        ],
      },
    ],
  },
};
