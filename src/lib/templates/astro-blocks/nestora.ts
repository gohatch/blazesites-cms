import type { SeedTemplate } from '../seed-templates';

export const nestoraTemplate: SeedTemplate = {
  name: 'Nestora',
  description: 'Luxury real estate template with elegant typography, property showcase, services grid, team profiles, and FAQ. Premium and sophisticated.',
  industry_tags: ['Real Estate', 'Luxury Homes', 'Property'],
  style_tags: ['Elegant', 'Luxury', 'Serif Typography'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'nestora',
  template_data: {
    pages: [
      {
        id: 'nestora-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'nestora-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Discover Homes Built on Trust & Elegance',
              subheading: 'Explore our curated collection of premium properties designed for modern living with timeless appeal.',
              ctaText: 'Explore Properties',
              ctaLink: '#properties',
              backgroundImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#2A2A1E',
              textColor: '#F9F7F2',
              padding: '120px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-stats',
            type: 'stats',
            order: 1,
            content: {
              stats: [
                { value: '20+', label: 'Years of Excellence' },
                { value: '500+', label: 'Properties Sold' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Expert Agents' },
              ],
            },
            settings: {
              backgroundColor: '#F9F7F2',
              textColor: '#2A2A1E',
              padding: '64px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'Get to Know Nestora',
              text: 'With over a decade of experience in the real estate industry, Nestora has been transforming dreams into addresses. Our commitment to excellence and client satisfaction has made us a trusted name in luxury real estate. We are a team of passionate experts creating thoughtful, sustainable, and inspiring spaces for discerning clients.',
              image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            },
            settings: {
              backgroundColor: '#FDFCF8',
              textColor: '#2A2A1E',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-services',
            type: 'features',
            order: 3,
            content: {
              heading: 'What Services We Provide',
              subheading: 'From finding your dream home to managing your investments, our comprehensive services cover every aspect of the real estate journey.',
              features: [
                { title: 'Property Buying & Selling', description: 'Expert guidance through every step of buying or selling your property, ensuring the best value and seamless transactions.', icon: 'home' },
                { title: 'Rental Solutions', description: 'Comprehensive rental services connecting property owners with qualified tenants for hassle-free leasing experiences.', icon: 'building' },
                { title: 'Property Management', description: 'Full-service property management handling maintenance, tenant relations, and financial reporting for your investments.', icon: 'settings' },
                { title: 'Real Estate Consulting', description: 'Strategic consulting services to help you make informed decisions about real estate investments and market opportunities.', icon: 'briefcase' },
              ],
            },
            settings: {
              backgroundColor: '#F9F7F2',
              textColor: '#2A2A1E',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'What Our Clients Say',
              testimonials: [
                { quote: 'Nestora made our dream home a reality. Their attention to detail and understanding of our needs was exceptional. The entire process felt effortless.', author: 'Jonathan & Sarah Mitchell', role: 'Homeowners' },
                { quote: 'Working with Nestora was the best decision we made. Their market knowledge and professional approach helped us find the perfect investment property.', author: 'Robert & Elena Vasquez', role: 'Property Investors' },
                { quote: 'From start to finish, the Nestora team provided outstanding service. They truly understand luxury real estate and deliver results beyond expectations.', author: 'Catherine Blake', role: 'Luxury Buyer' },
              ],
            },
            settings: {
              backgroundColor: '#FDFCF8',
              textColor: '#2A2A1E',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-team',
            type: 'team',
            order: 5,
            content: {
              heading: 'Meet Our Experienced Team',
              subheading: 'Dedicated professionals committed to delivering exceptional real estate experiences.',
              members: [
                { name: 'Alexander Reed', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
                { name: 'Sophia Laurent', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
                { name: 'Marcus Chen', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
                { name: 'Isabella Torres', role: 'Property Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#F9F7F2',
              textColor: '#2A2A1E',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-faq',
            type: 'faq',
            order: 6,
            content: {
              heading: 'Frequently Asked Questions',
              subheading: 'Find answers to the most common questions about our services and processes.',
              faqs: [
                { question: 'What areas does Nestora specialize in?', answer: 'Nestora specializes in luxury residential properties, premium commercial spaces, and high-value investment opportunities across major metropolitan areas.' },
                { question: 'How does the property buying process work with Nestora?', answer: 'Our process begins with an in-depth consultation to understand your needs. We then curate a selection of properties, arrange private viewings, and guide you through negotiations and closing.' },
                { question: 'Do you offer property management services for investors?', answer: 'Yes, we offer comprehensive property management including tenant screening, rent collection, maintenance coordination, and financial reporting.' },
                { question: 'What sets Nestora apart from other real estate agencies?', answer: 'Our commitment to personalized service, deep market expertise, and exclusive property access sets us apart. We treat every client relationship as a long-term partnership.' },
                { question: 'Can Nestora help with real estate investment consulting?', answer: 'Absolutely. Our investment team provides market analysis, ROI projections, portfolio diversification strategies, and ongoing advisory services.' },
              ],
            },
            settings: {
              backgroundColor: '#FDFCF8',
              textColor: '#2A2A1E',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-cta',
            type: 'cta',
            order: 7,
            content: {
              heading: 'Start Your Property Journey Today',
              subheading: 'Let our expert team guide you to your perfect property. Schedule a consultation and take the first step toward your dream home.',
              ctaText: 'Schedule Consultation',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#2A2A1E',
              textColor: '#F9F7F2',
              padding: '80px 0',
              accentColor: '#A68B3C',
            },
          },
          {
            id: 'nestora-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: 'Nestora',
              tagline: 'Premium real estate brand creating thoughtful, sustainable, and inspiring spaces for discerning clients since 2014.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Properties', href: '/properties' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@nestora.com',
              phone: '(555) 890-1234',
            },
            settings: {
              backgroundColor: '#1A1A12',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#A68B3C',
            },
          },
        ],
      },
    ],
  },
};
