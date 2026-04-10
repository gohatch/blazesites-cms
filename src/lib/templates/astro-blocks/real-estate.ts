import type { SeedTemplate } from '../seed-templates';

export const realEstateTemplate: SeedTemplate = {
  name: 'Realest',
  description: 'Clean real estate template with property listings, agent profiles, FAQ section, and newsletter signup. Professional and trust-focused.',
  industry_tags: ['Real Estate', 'Property', 'Agency'],
  style_tags: ['Professional', 'Clean', 'Modern'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'real-estate',
  template_data: {
    pages: [
      {
        id: 'real-estate-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'real-estate-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Your Real Estate Journey Starts Here',
              subheading: 'Discover exceptional properties and expert guidance to help you find the perfect place to call home.',
              ctaText: 'Explore Properties',
              ctaLink: '#properties',
              backgroundImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#0F1D2E',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-stats',
            type: 'stats',
            order: 1,
            content: {
              stats: [
                { value: '1200+', label: 'Properties Sold' },
                { value: '250+', label: 'Happy Clients' },
                { value: '90%', label: 'Client Retention' },
                { value: '15+', label: 'Years Experience' },
              ],
            },
            settings: {
              backgroundColor: '#0F1D2E',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'Helping People Find Their Dream Homes',
              text: 'With over 15 years in the real estate industry, Realest has established itself as a trusted agency committed to delivering exceptional service. We combine market expertise with personalized attention to ensure every client finds their perfect property. Our dedicated team of professionals works tirelessly to ensure seamless transactions, whether you\'re buying your first home, selling a property, or building an investment portfolio.',
              image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-services',
            type: 'features',
            order: 3,
            content: {
              heading: 'Buy, Rent & Sell',
              subheading: 'Whether you\'re looking to buy your dream home, find the perfect rental, or sell your property at the best price, we\'ve got you covered.',
              features: [
                { title: 'Rent a Home', description: 'Find the perfect rental property that fits your lifestyle and budget with our extensive listing database.', icon: 'home' },
                { title: 'Buy a Home', description: 'Expert guidance through every step of the home buying process, from search to closing day.', icon: 'building' },
                { title: 'Sell a Property', description: 'Maximize your property\'s value with our marketing expertise and extensive network of qualified buyers.', icon: 'briefcase' },
              ],
            },
            settings: {
              backgroundColor: '#F8FAFC',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'Hear From Our Clients',
              testimonials: [
                { quote: 'Realest made finding our dream home an absolute breeze. Their team was professional, responsive, and truly understood what we were looking for.', author: 'Michael & Jessica Torres', role: 'Homebuyers' },
                { quote: 'The investment advice from the Realest team helped us build a property portfolio that consistently delivers strong returns. Highly recommended.', author: 'David Okafor', role: 'Property Investor' },
                { quote: 'From the first viewing to handing over the keys, the entire experience was seamless. Realest truly cares about their clients.', author: 'Sarah Chen', role: 'First-time Buyer' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-team',
            type: 'team',
            order: 5,
            content: {
              heading: 'Meet Our Team',
              subheading: 'Meet the dedicated professionals who make your real estate dreams a reality.',
              members: [
                { name: 'James Mitchell', role: 'Senior Agent', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
                { name: 'Sarah Chen', role: 'Property Consultant', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
                { name: 'David Okafor', role: 'Investment Advisor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
                { name: 'Emily Rodriguez', role: 'Rentals Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#F8FAFC',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-faq',
            type: 'faq',
            order: 6,
            content: {
              heading: 'Frequently Asked Questions',
              subheading: 'Find answers to the most common questions about our real estate services.',
              faqs: [
                { question: 'How do I start my property search?', answer: 'Simply browse our property listings or contact one of our agents to discuss your requirements. We\'ll match you with properties that fit your budget and preferences.' },
                { question: 'What are the costs involved in buying a home?', answer: 'Beyond the purchase price, buyers should budget for closing costs (typically 2-5% of the purchase price), home inspection fees, appraisal costs, and potential moving expenses.' },
                { question: 'Do you help with mortgage pre-approval?', answer: 'While we don\'t directly provide mortgages, we work closely with trusted lending partners who offer competitive rates. We\'ll connect you with the right lender for your situation.' },
                { question: 'How long does it take to sell a property?', answer: 'The timeline varies based on market conditions, pricing, and location. On average, our listings sell within 30-60 days. Our marketing strategies and extensive network help expedite the process.' },
                { question: 'What property management services do you offer?', answer: 'Our property management covers tenant screening, rent collection, maintenance coordination, financial reporting, and legal compliance. We handle everything so you don\'t have to.' },
                { question: 'Can you help with real estate investment strategy?', answer: 'Absolutely. Our consulting team provides market analysis, investment property identification, ROI projections, and portfolio diversification strategies.' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-cta',
            type: 'cta',
            order: 7,
            content: {
              heading: 'Explore All Properties',
              subheading: 'Subscribe to receive the latest property listings, market insights, and exclusive deals directly in your inbox.',
              ctaText: 'Subscribe Now',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0F1D2E',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#3B82F6',
            },
          },
          {
            id: 'real-estate-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: 'Realest',
              tagline: 'Trusted real estate agency helping people find their dream homes with personalized service and expert market knowledge.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Properties', href: '/properties' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@realest.com',
              phone: '(555) 123-4567',
            },
            settings: {
              backgroundColor: '#0F1D2E',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#3B82F6',
            },
          },
        ],
      },
    ],
  },
};
