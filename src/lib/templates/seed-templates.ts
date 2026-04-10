import type { TemplateData } from '@/types';
import { batch1Templates } from './seed-templates-batch1';
import { batch2Templates } from './seed-templates-batch2';
import { batch3Templates } from './seed-templates-batch3';
import { batch4Templates } from './seed-templates-batch4';

export const seedTemplates: Array<{
  name: string;
  description: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  template_data: TemplateData;
}> = [
  {
    name: 'Professional Services',
    description: 'Clean, modern template for consulting firms, law practices, and professional services.',
    industry_tags: ['Professional Services', 'Legal', 'Finance'],
    style_tags: ['Corporate', 'Minimal'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Expert Solutions for Your Business',
                subheading: 'We deliver results-driven professional services tailored to your needs.',
                ctaText: 'Get Started',
                ctaLink: '/contact',
                backgroundImage: '',
              },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '96px 0' },
            },
            {
              id: 'features-1',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Services',
                subheading: 'Comprehensive solutions for every challenge',
                features: [
                  { title: 'Strategic Consulting', description: 'Data-driven strategies to grow your business.', icon: 'briefcase' },
                  { title: 'Financial Advisory', description: 'Expert guidance for financial decisions.', icon: 'chart' },
                  { title: 'Legal Compliance', description: 'Stay compliant with changing regulations.', icon: 'shield' },
                ],
              },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
            {
              id: 'about-1',
              type: 'about',
              order: 2,
              content: {
                heading: 'Why Choose Us',
                text: 'With over 20 years of experience, our team brings deep expertise across industries. We believe in building lasting partnerships with our clients.',
                image: '',
              },
              settings: { backgroundColor: '#f8f9fa', textColor: '#1a1a2e', padding: '80px 0' },
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'What Our Clients Say',
                testimonials: [
                  { quote: 'Exceptional service and results beyond expectations.', author: 'Jane Smith', role: 'CEO, TechCorp' },
                  { quote: 'A trusted partner for all our consulting needs.', author: 'John Doe', role: 'CFO, Finance Inc' },
                ],
              },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Get Started?',
                subheading: 'Book a free consultation with our experts today.',
                ctaText: 'Contact Us',
                ctaLink: '/contact',
              },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Your Company',
                tagline: 'Professional services you can trust.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                ],
                email: 'info@yourcompany.com',
                phone: '(555) 123-4567',
              },
              settings: { backgroundColor: '#0d0d1a', textColor: '#cccccc', padding: '48px 0' },
            },
          ],
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Our Firm',
                subheading: 'Learn about our mission, values, and the team behind our success.',
                ctaText: '',
                ctaLink: '',
              },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'about-story',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Story',
                text: 'Founded in 2005, we have grown from a small consultancy to a leading professional services firm. Our commitment to excellence drives everything we do.',
                image: '',
              },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
            {
              id: 'team-1',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet Our Team',
                members: [
                  { name: 'Sarah Johnson', role: 'Managing Partner', image: '' },
                  { name: 'Michael Chen', role: 'Senior Consultant', image: '' },
                  { name: 'Emily Brown', role: 'Financial Advisor', image: '' },
                ],
              },
              settings: { backgroundColor: '#f8f9fa', textColor: '#1a1a2e', padding: '80px 0' },
            },
          ],
        },
        {
          id: 'services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'hero-services',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Tailored solutions for your business challenges.',
                ctaText: '',
                ctaLink: '',
              },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'features-services',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Offer',
                subheading: '',
                features: [
                  { title: 'Business Strategy', description: 'Develop winning strategies for sustainable growth.', icon: 'target' },
                  { title: 'Risk Management', description: 'Identify and mitigate business risks effectively.', icon: 'shield' },
                  { title: 'Digital Transformation', description: 'Modernize your operations with technology.', icon: 'laptop' },
                  { title: 'Market Research', description: 'Deep insights into your market and competition.', icon: 'search' },
                ],
              },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
          ],
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: { heading: 'Contact Us', subheading: 'Get in touch with our team.' },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Send Us a Message',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message',
              },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
          ],
        },
        {
          id: 'blog',
          name: 'Blog',
          slug: '/blog',
          blocks: [
            {
              id: 'hero-blog',
              type: 'hero',
              order: 0,
              content: { heading: 'Our Blog', subheading: 'Insights, tips, and industry news.' },
              settings: { backgroundColor: '#1a1a2e', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'text-blog',
              type: 'text',
              order: 1,
              content: { heading: 'Latest Posts', text: 'Blog posts will appear here.' },
              settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '80px 0' },
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Creative Agency',
    description: 'Bold, visually striking template for design studios, marketing agencies, and creative teams.',
    industry_tags: ['Technology', 'Professional Services'],
    style_tags: ['Bold', 'Creative', 'Dark Mode'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'We Create Digital Experiences',
                subheading: 'Award-winning design studio crafting brands, websites, and digital products.',
                ctaText: 'View Our Work',
                ctaLink: '/portfolio',
              },
              settings: { backgroundColor: '#0f0f0f', textColor: '#ffffff', padding: '120px 0' },
            },
            {
              id: 'features-1',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Do',
                subheading: '',
                features: [
                  { title: 'Brand Identity', description: 'Logos, guidelines, and visual systems.', icon: 'palette' },
                  { title: 'Web Design', description: 'Beautiful, responsive websites that convert.', icon: 'monitor' },
                  { title: 'Digital Marketing', description: 'SEO, social media, and content strategy.', icon: 'megaphone' },
                ],
              },
              settings: { backgroundColor: '#1a1a1a', textColor: '#ffffff', padding: '80px 0' },
            },
            {
              id: 'stats-1',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '150+', label: 'Projects Completed' },
                  { value: '50+', label: 'Happy Clients' },
                  { value: '12', label: 'Team Members' },
                  { value: '8', label: 'Years Experience' },
                ],
              },
              settings: { backgroundColor: '#ff6b35', textColor: '#ffffff', padding: '64px 0' },
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Client Love',
                testimonials: [
                  { quote: 'They transformed our brand completely. Incredible work.', author: 'Alex Rivera', role: 'Founder, StartupX' },
                  { quote: 'The most creative team we have ever worked with.', author: 'Sam Taylor', role: 'CMO, BrandCo' },
                ],
              },
              settings: { backgroundColor: '#0f0f0f', textColor: '#ffffff', padding: '80px 0' },
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Let\'s Build Something Great',
                subheading: 'Ready to take your brand to the next level?',
                ctaText: 'Start a Project',
                ctaLink: '/contact',
              },
              settings: { backgroundColor: '#1a1a1a', textColor: '#ffffff', padding: '80px 0' },
            },
          ],
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            { id: 'hero-about', type: 'hero', order: 0, content: { heading: 'About Us', subheading: 'Passionate creatives on a mission.' }, settings: { backgroundColor: '#0f0f0f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'about-1', type: 'about', order: 1, content: { heading: 'Our Philosophy', text: 'We believe great design solves problems. Every pixel, every word, every interaction is intentional.', image: '' }, settings: { backgroundColor: '#1a1a1a', textColor: '#ffffff', padding: '80px 0' } },
          ],
        },
        {
          id: 'services',
          name: 'Services',
          slug: '/services',
          blocks: [
            { id: 'hero-services', type: 'hero', order: 0, content: { heading: 'Services', subheading: 'Full-service creative solutions.' }, settings: { backgroundColor: '#0f0f0f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'features-2', type: 'features', order: 1, content: { heading: '', subheading: '', features: [{ title: 'UX/UI Design', description: 'User-centered design for web and mobile.', icon: 'layout' }, { title: 'Development', description: 'Custom websites and web applications.', icon: 'code' }, { title: 'Content Creation', description: 'Photography, video, and copywriting.', icon: 'camera' }] }, settings: { backgroundColor: '#1a1a1a', textColor: '#ffffff', padding: '80px 0' } },
          ],
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            { id: 'hero-contact', type: 'hero', order: 0, content: { heading: 'Get in Touch', subheading: 'Tell us about your project.' }, settings: { backgroundColor: '#0f0f0f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'contact-1', type: 'contact', order: 1, content: { heading: 'Drop Us a Line', fields: ['name', 'email', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#1a1a1a', textColor: '#ffffff', padding: '80px 0' } },
          ],
        },
      ],
    },
  },
  {
    name: 'Health & Wellness',
    description: 'Calm, inviting template for clinics, wellness centers, yoga studios, and health practitioners.',
    industry_tags: ['Health & Wellness'],
    style_tags: ['Minimal', 'Corporate'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            { id: 'hero-1', type: 'hero', order: 0, content: { heading: 'Your Wellness Journey Starts Here', subheading: 'Holistic care for mind, body, and spirit.', ctaText: 'Book Now', ctaLink: '/contact' }, settings: { backgroundColor: '#2d6a4f', textColor: '#ffffff', padding: '96px 0' } },
            { id: 'features-1', type: 'features', order: 1, content: { heading: 'Our Services', subheading: 'Tailored treatments for your wellbeing', features: [{ title: 'Massage Therapy', description: 'Relax and rejuvenate with our expert therapists.', icon: 'heart' }, { title: 'Nutrition Counseling', description: 'Personalized meal plans for optimal health.', icon: 'apple' }, { title: 'Yoga Classes', description: 'Group and private sessions for all levels.', icon: 'sun' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1b4332', padding: '80px 0' } },
            { id: 'about-1', type: 'about', order: 2, content: { heading: 'About Our Practice', text: 'We combine traditional healing with modern science to provide comprehensive wellness solutions.', image: '' }, settings: { backgroundColor: '#f0f7f4', textColor: '#1b4332', padding: '80px 0' } },
            { id: 'testimonials-1', type: 'testimonials', order: 3, content: { heading: 'Patient Stories', testimonials: [{ quote: 'This place changed my life. I feel better than I have in years.', author: 'Maria Garcia', role: 'Patient' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1b4332', padding: '80px 0' } },
            { id: 'cta-1', type: 'cta', order: 4, content: { heading: 'Start Your Healing Journey', subheading: 'Book your first appointment today.', ctaText: 'Schedule Appointment', ctaLink: '/contact' }, settings: { backgroundColor: '#2d6a4f', textColor: '#ffffff', padding: '64px 0' } },
          ],
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            { id: 'hero-about', type: 'hero', order: 0, content: { heading: 'About Us', subheading: 'Dedicated to your health and wellness.' }, settings: { backgroundColor: '#2d6a4f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'about-story', type: 'about', order: 1, content: { heading: 'Our Mission', text: 'To make holistic wellness accessible to everyone in our community.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#1b4332', padding: '80px 0' } },
          ],
        },
        {
          id: 'services',
          name: 'Services',
          slug: '/services',
          blocks: [
            { id: 'hero-services', type: 'hero', order: 0, content: { heading: 'Our Services', subheading: 'Comprehensive wellness treatments.' }, settings: { backgroundColor: '#2d6a4f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'pricing-1', type: 'pricing', order: 1, content: { heading: 'Pricing', plans: [{ name: 'Single Session', price: '$80', features: ['60-min treatment', 'Personalized plan'] }, { name: 'Package of 5', price: '$350', features: ['5 sessions', 'Save $50', 'Priority booking'] }] }, settings: { backgroundColor: '#ffffff', textColor: '#1b4332', padding: '80px 0' } },
          ],
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            { id: 'hero-contact', type: 'hero', order: 0, content: { heading: 'Contact Us', subheading: 'We would love to hear from you.' }, settings: { backgroundColor: '#2d6a4f', textColor: '#ffffff', padding: '64px 0' } },
            { id: 'contact-1', type: 'contact', order: 1, content: { heading: 'Book an Appointment', fields: ['name', 'email', 'phone', 'message'], submitText: 'Book Now' }, settings: { backgroundColor: '#ffffff', textColor: '#1b4332', padding: '80px 0' } },
          ],
        },
      ],
    },
  },
  // --- Template 4: Restaurant / Hospitality ---
  {
    name: 'Restaurant & Hospitality',
    description: 'Warm, inviting template for restaurants, cafes, bars, and hospitality venues.',
    industry_tags: ['Hospitality', 'E-Commerce'],
    style_tags: ['Bold', 'Creative'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'r-hero', type: 'hero', order: 0, content: { heading: 'A Culinary Experience Like No Other', subheading: 'Farm-to-table dining in the heart of the city. Reserve your table today.', ctaText: 'View Menu', ctaLink: '/menu' }, settings: { backgroundColor: '#722F37', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'r-features', type: 'features', order: 1, content: { heading: 'Why Dine With Us', subheading: '', features: [{ title: 'Farm-to-Table', description: 'Locally sourced ingredients from trusted farmers.', icon: 'sun' }, { title: 'Award-Winning Chef', description: 'Led by Chef Maria with 15 years of experience.', icon: 'star' }, { title: 'Private Events', description: 'Host your next celebration in our private dining room.', icon: 'heart' }] }, settings: { backgroundColor: '#FDF6EC', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-about', type: 'about', order: 2, content: { heading: 'Our Story', text: 'Established in 2015, we have been bringing the finest seasonal cuisine to our community. Every dish tells a story of passion, tradition, and innovation.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-gallery', type: 'gallery', order: 3, content: { heading: 'From Our Kitchen', images: [] }, settings: { backgroundColor: '#FDF6EC', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-testimonials', type: 'testimonials', order: 4, content: { heading: 'Guest Reviews', testimonials: [{ quote: 'The best dining experience in the city. Every dish was perfection.', author: 'Sarah L.', role: 'Food Critic' }, { quote: 'Incredible atmosphere and even better food. A must-visit.', author: 'Tom & Rachel', role: 'Regular Guests' }] }, settings: { backgroundColor: '#ffffff', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-cta', type: 'cta', order: 5, content: { heading: 'Reserve Your Table', subheading: 'Open Tuesday to Sunday, 5pm - 11pm', ctaText: 'Book Now', ctaLink: '/contact' }, settings: { backgroundColor: '#722F37', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'r-footer', type: 'footer', order: 6, content: { companyName: 'The Grand Table', tagline: 'Fine dining, unforgettable moments.', links: [{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'hello@thegrandtable.com', phone: '(555) 234-5678' }, settings: { backgroundColor: '#2a0f14', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'r-ha', type: 'hero', order: 0, content: { heading: 'About Us', subheading: 'Our passion for great food and hospitality.' }, settings: { backgroundColor: '#722F37', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'r-ab', type: 'about', order: 1, content: { heading: 'A Family Tradition', text: 'What started as a small family kitchen has grown into one of the most beloved restaurants in town. We believe food is about connection — bringing people together around a shared table.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-team', type: 'team', order: 2, content: { heading: 'Meet Our Team', members: [{ name: 'Chef Maria Santos', role: 'Executive Chef', image: '' }, { name: 'James Hartley', role: 'Sommelier', image: '' }, { name: 'Lisa Chen', role: 'Pastry Chef', image: '' }] }, settings: { backgroundColor: '#FDF6EC', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-f2', type: 'footer', order: 3, content: { companyName: 'The Grand Table', tagline: 'Fine dining, unforgettable moments.', links: [{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }], email: 'hello@thegrandtable.com', phone: '(555) 234-5678' }, settings: { backgroundColor: '#2a0f14', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'menu', name: 'Menu', slug: '/menu', blocks: [
          { id: 'r-hm', type: 'hero', order: 0, content: { heading: 'Our Menu', subheading: 'Seasonal dishes crafted with love.' }, settings: { backgroundColor: '#722F37', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'r-pricing', type: 'pricing', order: 1, content: { heading: 'Dinner Menu', plans: [{ name: 'Starters', price: 'From $14', features: ['Heirloom Tomato Bruschetta', 'Pan-Seared Scallops', 'Burrata & Fig Salad'] }, { name: 'Mains', price: 'From $32', features: ['Wagyu Beef Tenderloin', 'Pan-Roasted Salmon', 'Wild Mushroom Risotto', 'Duck Confit'] }, { name: 'Desserts', price: 'From $12', features: ['Chocolate Fondant', 'Crème Brûlée', 'Seasonal Fruit Tart'] }] }, settings: { backgroundColor: '#FDF6EC', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-f3', type: 'footer', order: 2, content: { companyName: 'The Grand Table', tagline: 'Fine dining, unforgettable moments.', links: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }], email: 'hello@thegrandtable.com', phone: '(555) 234-5678' }, settings: { backgroundColor: '#2a0f14', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'r-hc', type: 'hero', order: 0, content: { heading: 'Contact & Reservations', subheading: 'We look forward to hosting you.' }, settings: { backgroundColor: '#722F37', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'r-contact', type: 'contact', order: 1, content: { heading: 'Make a Reservation', fields: ['name', 'email', 'phone', 'message'], submitText: 'Reserve' }, settings: { backgroundColor: '#ffffff', textColor: '#3d1a1a', padding: '80px 0' } },
          { id: 'r-f4', type: 'footer', order: 2, content: { companyName: 'The Grand Table', tagline: 'Fine dining, unforgettable moments.', links: [{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }], email: 'hello@thegrandtable.com', phone: '(555) 234-5678' }, settings: { backgroundColor: '#2a0f14', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 5: Real Estate ---
  {
    name: 'Real Estate',
    description: 'Sophisticated template for real estate agencies, property managers, and realtors.',
    industry_tags: ['Real Estate'],
    style_tags: ['Corporate', 'Minimal'],
    page_count: 5,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 're-hero', type: 'hero', order: 0, content: { heading: 'Find Your Dream Property', subheading: 'Premium real estate services for buyers, sellers, and investors.', ctaText: 'View Listings', ctaLink: '/listings' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '96px 0' } },
          { id: 're-stats', type: 'stats', order: 1, content: { stats: [{ value: '500+', label: 'Properties Sold' }, { value: '$2.1B', label: 'Total Sales Volume' }, { value: '15+', label: 'Years Experience' }, { value: '98%', label: 'Client Satisfaction' }] }, settings: { backgroundColor: '#C8A961', textColor: '#1B2A4A', padding: '64px 0' } },
          { id: 're-features', type: 'features', order: 2, content: { heading: 'Our Services', subheading: 'Full-service real estate solutions', features: [{ title: 'Residential Sales', description: 'Expert guidance through every step of buying or selling your home.', icon: 'target' }, { title: 'Property Management', description: 'Comprehensive management services for investment properties.', icon: 'shield' }, { title: 'Market Analysis', description: 'Data-driven insights to help you make informed decisions.', icon: 'chart' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-about', type: 'about', order: 3, content: { heading: 'Why Choose Us', text: 'With deep local knowledge and a commitment to exceptional service, our team has helped hundreds of families find their perfect home. We treat every transaction as if it were our own.', image: '' }, settings: { backgroundColor: '#f5f5f0', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-test', type: 'testimonials', order: 4, content: { heading: 'Client Success Stories', testimonials: [{ quote: 'They found us our dream home in just two weeks. Incredible service.', author: 'Mark & Julie Thompson', role: 'Home Buyers' }, { quote: 'Professional, responsive, and truly cared about our needs.', author: 'David Nguyen', role: 'Property Investor' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-cta', type: 'cta', order: 5, content: { heading: 'Ready to Make a Move?', subheading: 'Schedule a free consultation with our team.', ctaText: 'Get in Touch', ctaLink: '/contact' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 're-footer', type: 'footer', order: 6, content: { companyName: 'Summit Realty Group', tagline: 'Your trusted partner in real estate.', links: [{ label: 'Home', href: '/' }, { label: 'Listings', href: '/listings' }, { label: 'Services', href: '/services' }, { label: 'Contact', href: '/contact' }], email: 'info@summitrealty.com', phone: '(555) 345-6789' }, settings: { backgroundColor: '#0f1a30', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 're-ha', type: 'hero', order: 0, content: { heading: 'About Summit Realty', subheading: 'A legacy of excellence in real estate.' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 're-ab', type: 'about', order: 1, content: { heading: 'Our Mission', text: 'Founded in 2008, Summit Realty Group has grown to become one of the most respected agencies in the region. We combine market expertise with genuine care for our clients.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-team', type: 'team', order: 2, content: { heading: 'Our Agents', members: [{ name: 'Robert Chen', role: 'Principal Agent', image: '' }, { name: 'Amanda Foster', role: 'Senior Agent', image: '' }, { name: 'Michael Torres', role: 'Commercial Specialist', image: '' }] }, settings: { backgroundColor: '#f5f5f0', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-f2', type: 'footer', order: 3, content: { companyName: 'Summit Realty Group', tagline: 'Your trusted partner in real estate.', links: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }], email: 'info@summitrealty.com', phone: '(555) 345-6789' }, settings: { backgroundColor: '#0f1a30', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'listings', name: 'Listings', slug: '/listings', blocks: [
          { id: 're-hl', type: 'hero', order: 0, content: { heading: 'Featured Listings', subheading: 'Explore our curated selection of properties.' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 're-gallery', type: 'gallery', order: 1, content: { heading: 'Available Properties', images: [] }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-f3', type: 'footer', order: 2, content: { companyName: 'Summit Realty Group', tagline: 'Your trusted partner in real estate.', links: [{ label: 'Home', href: '/' }], email: 'info@summitrealty.com', phone: '(555) 345-6789' }, settings: { backgroundColor: '#0f1a30', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'services', name: 'Services', slug: '/services', blocks: [
          { id: 're-hs', type: 'hero', order: 0, content: { heading: 'Our Services', subheading: 'Comprehensive real estate solutions.' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 're-feat2', type: 'features', order: 1, content: { heading: 'How We Help', subheading: '', features: [{ title: 'Buyer Representation', description: 'We guide you through every step of purchasing your new home.', icon: 'target' }, { title: 'Seller Services', description: 'Strategic marketing to get top dollar for your property.', icon: 'chart' }, { title: 'Investment Advisory', description: 'Expert analysis for commercial and residential investments.', icon: 'briefcase' }, { title: 'Property Valuation', description: 'Accurate market assessments backed by data.', icon: 'search' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-f4', type: 'footer', order: 2, content: { companyName: 'Summit Realty Group', tagline: 'Your trusted partner in real estate.', links: [{ label: 'Home', href: '/' }], email: 'info@summitrealty.com', phone: '(555) 345-6789' }, settings: { backgroundColor: '#0f1a30', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 're-hc', type: 'hero', order: 0, content: { heading: 'Contact Us', subheading: 'Let us help you with your next move.' }, settings: { backgroundColor: '#1B2A4A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 're-contact', type: 'contact', order: 1, content: { heading: 'Get in Touch', fields: ['name', 'email', 'phone', 'message'], submitText: 'Send Message' }, settings: { backgroundColor: '#ffffff', textColor: '#1B2A4A', padding: '80px 0' } },
          { id: 're-f5', type: 'footer', order: 2, content: { companyName: 'Summit Realty Group', tagline: 'Your trusted partner in real estate.', links: [{ label: 'Home', href: '/' }], email: 'info@summitrealty.com', phone: '(555) 345-6789' }, settings: { backgroundColor: '#0f1a30', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 6: E-Commerce / Retail ---
  {
    name: 'E-Commerce & Retail',
    description: 'Modern, conversion-focused template for online stores and retail businesses.',
    industry_tags: ['E-Commerce', 'Retail'],
    style_tags: ['Minimal', 'Bold'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'ec-hero', type: 'hero', order: 0, content: { heading: 'Shop the Collection', subheading: 'Curated products for modern living. Free shipping on orders over $75.', ctaText: 'Shop Now', ctaLink: '/products' }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'ec-features', type: 'features', order: 1, content: { heading: 'Why Shop With Us', subheading: '', features: [{ title: 'Free Shipping', description: 'Complimentary delivery on all orders over $75.', icon: 'zap' }, { title: 'Easy Returns', description: '30-day hassle-free return policy.', icon: 'shield' }, { title: 'Secure Checkout', description: 'SSL-encrypted payments for your peace of mind.', icon: 'shield' }] }, settings: { backgroundColor: '#ffffff', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-stats', type: 'stats', order: 2, content: { stats: [{ value: '10K+', label: 'Happy Customers' }, { value: '500+', label: 'Products' }, { value: '4.9★', label: 'Average Rating' }, { value: '24h', label: 'Fast Delivery' }] }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ec-gallery', type: 'gallery', order: 3, content: { heading: 'Featured Products', images: [] }, settings: { backgroundColor: '#f0fdfa', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-test', type: 'testimonials', order: 4, content: { heading: 'Customer Reviews', testimonials: [{ quote: 'Absolutely love the quality. Will be ordering again!', author: 'Emma W.', role: 'Verified Buyer' }, { quote: 'Fast shipping and beautiful packaging. Highly recommend.', author: 'Jason K.', role: 'Repeat Customer' }] }, settings: { backgroundColor: '#ffffff', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-cta', type: 'cta', order: 5, content: { heading: 'New Arrivals Weekly', subheading: 'Subscribe for 10% off your first order.', ctaText: 'Shop Now', ctaLink: '/products' }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ec-footer', type: 'footer', order: 6, content: { companyName: 'ModernGoods', tagline: 'Curated products for modern living.', links: [{ label: 'Shop', href: '/products' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'hello@moderngoods.com', phone: '(555) 456-7890' }, settings: { backgroundColor: '#042f2e', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'ec-ha', type: 'hero', order: 0, content: { heading: 'Our Story', subheading: 'Built on quality, driven by design.' }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ec-ab', type: 'about', order: 1, content: { heading: 'Who We Are', text: 'ModernGoods was founded with a simple mission: make beautifully designed, high-quality products accessible to everyone. We work directly with artisans and manufacturers to bring you the best.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-f2', type: 'footer', order: 2, content: { companyName: 'ModernGoods', tagline: 'Curated products for modern living.', links: [{ label: 'Home', href: '/' }], email: 'hello@moderngoods.com', phone: '(555) 456-7890' }, settings: { backgroundColor: '#042f2e', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'products', name: 'Products', slug: '/products', blocks: [
          { id: 'ec-hp', type: 'hero', order: 0, content: { heading: 'All Products', subheading: 'Browse our full collection.' }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ec-gal2', type: 'gallery', order: 1, content: { heading: 'Shop the Collection', images: [] }, settings: { backgroundColor: '#ffffff', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-f3', type: 'footer', order: 2, content: { companyName: 'ModernGoods', tagline: 'Curated products for modern living.', links: [{ label: 'Home', href: '/' }], email: 'hello@moderngoods.com', phone: '(555) 456-7890' }, settings: { backgroundColor: '#042f2e', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'ec-hc', type: 'hero', order: 0, content: { heading: 'Contact Us', subheading: 'Questions? We are here to help.' }, settings: { backgroundColor: '#0D9488', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ec-contact', type: 'contact', order: 1, content: { heading: 'Send Us a Message', fields: ['name', 'email', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#ffffff', textColor: '#134e4a', padding: '80px 0' } },
          { id: 'ec-f4', type: 'footer', order: 2, content: { companyName: 'ModernGoods', tagline: 'Curated products for modern living.', links: [{ label: 'Home', href: '/' }], email: 'hello@moderngoods.com', phone: '(555) 456-7890' }, settings: { backgroundColor: '#042f2e', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 7: Construction / Trades (Premium) ---
  {
    name: 'Construction & Trades',
    description: 'Premium, high-converting template for builders, contractors, and trade businesses.',
    industry_tags: ['Construction'],
    style_tags: ['Bold', 'Corporate'],
    page_count: 5,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'co-hero', type: 'hero', order: 0, content: { heading: 'Building Excellence Since 2005', subheading: 'Commercial and residential construction you can trust. Fully licensed, insured, and dedicated to quality craftsmanship.', ctaText: 'Get a Free Quote', ctaLink: '/contact' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '120px 0', accentColor: '#D97706', overlayOpacity: 65, borderRadius: '2xl' } },
          { id: 'co-features', type: 'features', order: 1, content: { heading: 'Our Services', subheading: 'From concept to completion, we deliver exceptional results.', features: [{ title: 'New Builds', description: 'Custom homes and commercial projects built to your exact vision with premium materials.', icon: 'target' }, { title: 'Renovations', description: 'Transform your existing space with expert craftsmanship and modern design.', icon: 'layout' }, { title: 'Project Management', description: 'End-to-end oversight ensuring quality, timelines, and budget adherence.', icon: 'briefcase' }] }, settings: { backgroundColor: '#ffffff', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-stats', type: 'stats', order: 2, content: { stats: [{ value: '200+', label: 'Projects Completed' }, { value: '18+', label: 'Years Experience' }, { value: '50+', label: 'Team Members' }, { value: '100%', label: 'Licensed & Insured' }] }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '80px 0', accentColor: '#D97706' } },
          { id: 'co-gallery', type: 'gallery', order: 3, content: { heading: 'Recent Projects', images: [] }, settings: { backgroundColor: '#F8FAFC', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-test', type: 'testimonials', order: 4, content: { heading: 'What Our Clients Say', testimonials: [{ quote: 'They delivered our office build on time and under budget. The attention to detail was exceptional.', author: 'Chris Palmer', role: 'Business Owner' }, { quote: 'The renovation exceeded our expectations. True professionals who care about quality.', author: 'Amy Rodriguez', role: 'Homeowner' }] }, settings: { backgroundColor: '#ffffff', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-cta', type: 'cta', order: 5, content: { heading: 'Ready to Start Your Project?', subheading: 'Get a free, no-obligation estimate today. Our team is ready to bring your vision to life.', ctaText: 'Request a Free Quote', ctaLink: '/contact' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0', accentColor: '#D97706' } },
          { id: 'co-footer', type: 'footer', order: 6, content: { companyName: 'Ironclad Construction', tagline: 'Quality builds. On time. On budget.', links: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Projects', href: '/projects' }, { label: 'Contact', href: '/contact' }], email: 'info@ironcladconstruction.com', phone: '(555) 567-8901' }, settings: { backgroundColor: '#020617', textColor: '#94a3b8', padding: '64px 0', accentColor: '#D97706' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'co-ha', type: 'hero', order: 0, content: { heading: 'About Ironclad', subheading: 'Built on trust, crafted with care.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0', accentColor: '#D97706', overlayOpacity: 65 } },
          { id: 'co-ab', type: 'about', order: 1, content: { heading: 'Our Legacy', subheading: 'About Us', text: 'Since 2005, Ironclad Construction has been delivering premium building solutions. We are a family-owned company with deep roots in our community and a reputation for integrity, quality, and exceptional client service.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706' } },
          { id: 'co-team', type: 'team', order: 2, content: { heading: 'Leadership Team', members: [{ name: 'Greg Mitchell', role: 'Founder & CEO', image: '' }, { name: 'Karen Wu', role: 'Project Director', image: '' }, { name: 'Steve Brown', role: 'Site Manager', image: '' }] }, settings: { backgroundColor: '#F8FAFC', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-f2', type: 'footer', order: 3, content: { companyName: 'Ironclad Construction', tagline: 'Quality builds. On time. On budget.', links: [{ label: 'Home', href: '/' }], email: 'info@ironcladconstruction.com', phone: '(555) 567-8901' }, settings: { backgroundColor: '#020617', textColor: '#94a3b8', padding: '64px 0', accentColor: '#D97706' } },
        ] },
        { id: 'services', name: 'Services', slug: '/services', blocks: [
          { id: 'co-hs', type: 'hero', order: 0, content: { heading: 'Our Services', subheading: 'Comprehensive construction solutions for every project.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0', accentColor: '#D97706', overlayOpacity: 65 } },
          { id: 'co-feat2', type: 'features', order: 1, content: { heading: 'What We Do', subheading: 'Full-service construction capabilities', features: [{ title: 'Custom Home Builds', description: 'Design and build your dream home from the ground up with premium materials.', icon: 'target' }, { title: 'Commercial Construction', description: 'Offices, retail, and industrial projects of any scale, delivered on time.', icon: 'briefcase' }, { title: 'Renovations & Extensions', description: 'Breathe new life into your existing space with modern design.', icon: 'layout' }, { title: 'Concrete & Foundations', description: 'Solid foundations built to last for every project type.', icon: 'shield' }] }, settings: { backgroundColor: '#ffffff', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-f3', type: 'footer', order: 2, content: { companyName: 'Ironclad Construction', tagline: 'Quality builds. On time. On budget.', links: [{ label: 'Home', href: '/' }], email: 'info@ironcladconstruction.com', phone: '(555) 567-8901' }, settings: { backgroundColor: '#020617', textColor: '#94a3b8', padding: '64px 0', accentColor: '#D97706' } },
        ] },
        { id: 'projects-page', name: 'Projects', slug: '/projects', blocks: [
          { id: 'co-hpr', type: 'hero', order: 0, content: { heading: 'Our Projects', subheading: 'A showcase of our finest work and craftsmanship.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0', accentColor: '#D97706', overlayOpacity: 65 } },
          { id: 'co-gal', type: 'gallery', order: 1, content: { heading: 'Project Gallery', images: [] }, settings: { backgroundColor: '#ffffff', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-f4', type: 'footer', order: 2, content: { companyName: 'Ironclad Construction', tagline: 'Quality builds. On time. On budget.', links: [{ label: 'Home', href: '/' }], email: 'info@ironcladconstruction.com', phone: '(555) 567-8901' }, settings: { backgroundColor: '#020617', textColor: '#94a3b8', padding: '64px 0', accentColor: '#D97706' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'co-hc', type: 'hero', order: 0, content: { heading: 'Get a Free Quote', subheading: 'Tell us about your project and we will get back to you within 24 hours.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0', accentColor: '#D97706', overlayOpacity: 65 } },
          { id: 'co-contact', type: 'contact', order: 1, content: { heading: 'Request a Quote', fields: ['name', 'email', 'phone', 'message'], submitText: 'Submit Request' }, settings: { backgroundColor: '#F8FAFC', textColor: '#0F172A', padding: '96px 0', accentColor: '#D97706', borderRadius: '2xl' } },
          { id: 'co-f5', type: 'footer', order: 2, content: { companyName: 'Ironclad Construction', tagline: 'Quality builds. On time. On budget.', links: [{ label: 'Home', href: '/' }], email: 'info@ironcladconstruction.com', phone: '(555) 567-8901' }, settings: { backgroundColor: '#020617', textColor: '#94a3b8', padding: '64px 0', accentColor: '#D97706' } },
        ] },
      ],
    },
  },
  // --- Template 8: Education / Courses ---
  {
    name: 'Education & Courses',
    description: 'Clean, trustworthy template for schools, training providers, and online course platforms.',
    industry_tags: ['Education'],
    style_tags: ['Corporate', 'Minimal'],
    page_count: 5,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'ed-hero', type: 'hero', order: 0, content: { heading: 'Unlock Your Potential', subheading: 'Expert-led courses designed to advance your career. Enroll today.', ctaText: 'Browse Courses', ctaLink: '/courses' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'ed-features', type: 'features', order: 1, content: { heading: 'Why Learn With Us', subheading: '', features: [{ title: 'Expert Instructors', description: 'Learn from industry professionals with real-world experience.', icon: 'star' }, { title: 'Flexible Schedule', description: 'Study at your own pace with on-demand access.', icon: 'zap' }, { title: 'Certification', description: 'Earn recognized certificates upon completion.', icon: 'shield' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-stats', type: 'stats', order: 2, content: { stats: [{ value: '5,000+', label: 'Students Enrolled' }, { value: '50+', label: 'Courses Available' }, { value: '95%', label: 'Completion Rate' }, { value: '4.8★', label: 'Average Rating' }] }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-test', type: 'testimonials', order: 3, content: { heading: 'Student Success Stories', testimonials: [{ quote: 'This course helped me land my dream job. The instructors are phenomenal.', author: 'Priya Sharma', role: 'UX Designer' }, { quote: 'Flexible, practical, and incredibly well-structured. Highly recommend.', author: 'Jake Morrison', role: 'Software Developer' }] }, settings: { backgroundColor: '#eff6ff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-cta', type: 'cta', order: 4, content: { heading: 'Start Learning Today', subheading: 'First module free — no credit card required.', ctaText: 'Enroll Now', ctaLink: '/courses' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-footer', type: 'footer', order: 5, content: { companyName: 'Elevate Academy', tagline: 'Learn. Grow. Succeed.', links: [{ label: 'Home', href: '/' }, { label: 'Courses', href: '/courses' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }], email: 'hello@elevateacademy.com', phone: '(555) 678-9012' }, settings: { backgroundColor: '#1e3a5f', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'ed-ha', type: 'hero', order: 0, content: { heading: 'About Elevate Academy', subheading: 'Empowering learners worldwide.' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-ab', type: 'about', order: 1, content: { heading: 'Our Mission', text: 'Elevate Academy was founded to make high-quality education accessible. Our courses combine academic rigor with practical application, preparing students for real-world success.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-team', type: 'team', order: 2, content: { heading: 'Our Instructors', members: [{ name: 'Dr. Sarah Kim', role: 'Data Science Lead', image: '' }, { name: 'Marcus Johnson', role: 'Business Strategy', image: '' }, { name: 'Ana Petrova', role: 'Design Thinking', image: '' }] }, settings: { backgroundColor: '#eff6ff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-f2', type: 'footer', order: 3, content: { companyName: 'Elevate Academy', tagline: 'Learn. Grow. Succeed.', links: [{ label: 'Home', href: '/' }], email: 'hello@elevateacademy.com', phone: '(555) 678-9012' }, settings: { backgroundColor: '#1e3a5f', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'courses', name: 'Courses', slug: '/courses', blocks: [
          { id: 'ed-hco', type: 'hero', order: 0, content: { heading: 'Our Courses', subheading: 'Find the right program for your goals.' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-pricing', type: 'pricing', order: 1, content: { heading: 'Course Packages', plans: [{ name: 'Single Course', price: '$199', features: ['Full course access', 'Certificate of completion', 'Community forum'] }, { name: 'Pro Bundle', price: '$499', features: ['5 courses of your choice', 'Priority support', '1-on-1 mentoring session', 'Certificates'] }, { name: 'Unlimited Access', price: '$79/mo', features: ['All courses', 'New courses added monthly', 'Live workshops', 'Career coaching'] }] }, settings: { backgroundColor: '#ffffff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-f3', type: 'footer', order: 2, content: { companyName: 'Elevate Academy', tagline: 'Learn. Grow. Succeed.', links: [{ label: 'Home', href: '/' }], email: 'hello@elevateacademy.com', phone: '(555) 678-9012' }, settings: { backgroundColor: '#1e3a5f', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'faq', name: 'FAQ', slug: '/faq', blocks: [
          { id: 'ed-hf', type: 'hero', order: 0, content: { heading: 'Frequently Asked Questions', subheading: 'Got questions? We have answers.' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-faq', type: 'faq', order: 1, content: { heading: '', items: [{ question: 'How long do I have access to a course?', answer: 'Once enrolled, you have lifetime access to the course materials.' }, { question: 'Are certificates recognized by employers?', answer: 'Yes, our certificates are recognized across the industry and can be shared on LinkedIn.' }, { question: 'Can I get a refund?', answer: 'We offer a 30-day money-back guarantee on all courses.' }, { question: 'Do I need any prerequisites?', answer: 'Most courses are beginner-friendly. Prerequisites are listed on each course page.' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-f4', type: 'footer', order: 2, content: { companyName: 'Elevate Academy', tagline: 'Learn. Grow. Succeed.', links: [{ label: 'Home', href: '/' }], email: 'hello@elevateacademy.com', phone: '(555) 678-9012' }, settings: { backgroundColor: '#1e3a5f', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'ed-hc', type: 'hero', order: 0, content: { heading: 'Contact Us', subheading: 'We are here to help.' }, settings: { backgroundColor: '#2563EB', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ed-contact', type: 'contact', order: 1, content: { heading: 'Get in Touch', fields: ['name', 'email', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#ffffff', textColor: '#1e3a5f', padding: '80px 0' } },
          { id: 'ed-f5', type: 'footer', order: 2, content: { companyName: 'Elevate Academy', tagline: 'Learn. Grow. Succeed.', links: [{ label: 'Home', href: '/' }], email: 'hello@elevateacademy.com', phone: '(555) 678-9012' }, settings: { backgroundColor: '#1e3a5f', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 9: SaaS / Technology ---
  {
    name: 'SaaS & Technology',
    description: 'Sleek, modern template for software companies, startups, and tech products.',
    industry_tags: ['Technology'],
    style_tags: ['Bold', 'Dark Mode'],
    page_count: 5,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'sa-hero', type: 'hero', order: 0, content: { heading: 'Ship Better Software, Faster', subheading: 'The developer platform that accelerates your workflow. From idea to production in minutes.', ctaText: 'Start Free Trial', ctaLink: '/pricing' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'sa-features', type: 'features', order: 1, content: { heading: 'Built for Modern Teams', subheading: '', features: [{ title: 'Lightning Fast', description: 'Sub-millisecond response times with global edge deployment.', icon: 'zap' }, { title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption.', icon: 'shield' }, { title: 'Developer First', description: 'Beautiful APIs, comprehensive SDKs, and great docs.', icon: 'code' }] }, settings: { backgroundColor: '#1e1b4b', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-stats', type: 'stats', order: 2, content: { stats: [{ value: '99.99%', label: 'Uptime SLA' }, { value: '50M+', label: 'API Calls / Day' }, { value: '10K+', label: 'Teams Using It' }, { value: '<50ms', label: 'Avg Latency' }] }, settings: { backgroundColor: '#7C3AED', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-test', type: 'testimonials', order: 3, content: { heading: 'Loved by Developers', testimonials: [{ quote: 'Finally a platform that gets out of my way and lets me build.', author: 'Lin Zhang', role: 'CTO, ScaleUp' }, { quote: 'Cut our deployment time by 80%. The best investment we made.', author: 'Raj Patel', role: 'VP Engineering, DataFlow' }] }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-cta', type: 'cta', order: 4, content: { heading: 'Ready to Get Started?', subheading: 'Free tier available. No credit card required.', ctaText: 'Start Building', ctaLink: '/pricing' }, settings: { backgroundColor: '#7C3AED', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-footer', type: 'footer', order: 5, content: { companyName: 'LaunchPad', tagline: 'The developer platform for modern teams.', links: [{ label: 'Product', href: '/features' }, { label: 'Pricing', href: '/pricing' }, { label: 'Docs', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'hello@launchpad.dev', phone: '' }, settings: { backgroundColor: '#020617', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'sa-ha', type: 'hero', order: 0, content: { heading: 'About LaunchPad', subheading: 'Built by developers, for developers.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-ab', type: 'about', order: 1, content: { heading: 'Our Story', text: 'LaunchPad was born from frustration with slow, bloated developer tools. We set out to build the fastest, most intuitive platform possible — and we have not stopped iterating since.', image: '' }, settings: { backgroundColor: '#1e1b4b', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-team', type: 'team', order: 2, content: { heading: 'The Team', members: [{ name: 'Alex Rivera', role: 'CEO & Co-founder', image: '' }, { name: 'Sophie Chang', role: 'CTO & Co-founder', image: '' }, { name: 'James Osei', role: 'Head of Product', image: '' }] }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-f2', type: 'footer', order: 3, content: { companyName: 'LaunchPad', tagline: 'The developer platform for modern teams.', links: [{ label: 'Home', href: '/' }], email: 'hello@launchpad.dev', phone: '' }, settings: { backgroundColor: '#020617', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'features', name: 'Features', slug: '/features', blocks: [
          { id: 'sa-hfe', type: 'hero', order: 0, content: { heading: 'Features', subheading: 'Everything you need to build and deploy.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-feat2', type: 'features', order: 1, content: { heading: 'Platform Capabilities', subheading: '', features: [{ title: 'CI/CD Pipeline', description: 'Automated build, test, and deploy workflows.', icon: 'zap' }, { title: 'Real-time Analytics', description: 'Monitor performance and usage in real-time.', icon: 'chart' }, { title: 'Team Collaboration', description: 'Built-in code review, comments, and approvals.', icon: 'target' }, { title: 'Global CDN', description: 'Deploy to 30+ edge locations worldwide.', icon: 'monitor' }] }, settings: { backgroundColor: '#1e1b4b', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-f3', type: 'footer', order: 2, content: { companyName: 'LaunchPad', tagline: 'The developer platform for modern teams.', links: [{ label: 'Home', href: '/' }], email: 'hello@launchpad.dev', phone: '' }, settings: { backgroundColor: '#020617', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'pricing', name: 'Pricing', slug: '/pricing', blocks: [
          { id: 'sa-hpr', type: 'hero', order: 0, content: { heading: 'Pricing', subheading: 'Simple pricing. No surprises.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-pricing', type: 'pricing', order: 1, content: { heading: '', plans: [{ name: 'Free', price: '$0', features: ['1 project', '10K API calls/mo', 'Community support'] }, { name: 'Pro', price: '$49/mo', features: ['Unlimited projects', '1M API calls/mo', 'Priority support', 'Custom domains'] }, { name: 'Enterprise', price: 'Custom', features: ['Unlimited everything', 'SLA guarantee', 'Dedicated support', 'SSO & RBAC', 'On-premise option'] }] }, settings: { backgroundColor: '#1e1b4b', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-faq', type: 'faq', order: 2, content: { heading: 'Pricing FAQ', items: [{ question: 'Can I switch plans anytime?', answer: 'Yes, upgrade or downgrade at any time. Changes take effect on your next billing cycle.' }, { question: 'What counts as an API call?', answer: 'Any request to our REST or GraphQL API counts as one call.' }] }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-f4', type: 'footer', order: 3, content: { companyName: 'LaunchPad', tagline: 'The developer platform for modern teams.', links: [{ label: 'Home', href: '/' }], email: 'hello@launchpad.dev', phone: '' }, settings: { backgroundColor: '#020617', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'sa-hc', type: 'hero', order: 0, content: { heading: 'Contact Sales', subheading: 'Talk to our team about your needs.' }, settings: { backgroundColor: '#0F172A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'sa-contact', type: 'contact', order: 1, content: { heading: 'Get in Touch', fields: ['name', 'email', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#1e1b4b', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'sa-f5', type: 'footer', order: 2, content: { companyName: 'LaunchPad', tagline: 'The developer platform for modern teams.', links: [{ label: 'Home', href: '/' }], email: 'hello@launchpad.dev', phone: '' }, settings: { backgroundColor: '#020617', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 10: Fitness / Gym ---
  {
    name: 'Fitness & Gym',
    description: 'High-energy template for gyms, personal trainers, and fitness studios.',
    industry_tags: ['Health & Wellness'],
    style_tags: ['Bold', 'Dark Mode'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'fi-hero', type: 'hero', order: 0, content: { heading: 'Transform Your Body. Transform Your Life.', subheading: 'State-of-the-art facilities and expert coaching to help you reach your goals.', ctaText: 'Join Today', ctaLink: '/programs' }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'fi-features', type: 'features', order: 1, content: { heading: 'What We Offer', subheading: '', features: [{ title: 'Personal Training', description: 'One-on-one coaching tailored to your fitness level and goals.', icon: 'target' }, { title: 'Group Classes', description: 'High-energy classes from HIIT to yoga, led by certified instructors.', icon: 'heart' }, { title: 'Nutrition Coaching', description: 'Custom meal plans and nutritional guidance for optimal results.', icon: 'sun' }] }, settings: { backgroundColor: '#1f1f1f', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-stats', type: 'stats', order: 2, content: { stats: [{ value: '1,200+', label: 'Active Members' }, { value: '30+', label: 'Weekly Classes' }, { value: '15', label: 'Expert Trainers' }, { value: '5★', label: 'Google Rating' }] }, settings: { backgroundColor: '#DC2626', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'fi-test', type: 'testimonials', order: 3, content: { heading: 'Member Transformations', testimonials: [{ quote: 'Down 30kg in 8 months. The trainers here genuinely care about your success.', author: 'Mike Chen', role: 'Member since 2024' }, { quote: 'Best gym I have ever been to. The community is incredible.', author: 'Jessica Alba', role: 'Member since 2023' }] }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-cta', type: 'cta', order: 4, content: { heading: 'Your First Week Is Free', subheading: 'No commitment. No contracts. Just results.', ctaText: 'Claim Free Trial', ctaLink: '/contact' }, settings: { backgroundColor: '#DC2626', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'fi-footer', type: 'footer', order: 5, content: { companyName: 'Forge Fitness', tagline: 'Strength. Community. Results.', links: [{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'info@forgefitness.com', phone: '(555) 789-0123' }, settings: { backgroundColor: '#0a0a0a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'fi-ha', type: 'hero', order: 0, content: { heading: 'About Forge Fitness', subheading: 'More than a gym — a community.' }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'fi-ab', type: 'about', order: 1, content: { heading: 'Our Philosophy', text: 'Forge Fitness was built on the belief that everyone deserves access to world-class training. We combine cutting-edge equipment with passionate coaches to create an environment where results happen.', image: '' }, settings: { backgroundColor: '#1f1f1f', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-team', type: 'team', order: 2, content: { heading: 'Our Trainers', members: [{ name: 'Coach Dan', role: 'Head Trainer', image: '' }, { name: 'Sarah Mills', role: 'Yoga & Pilates', image: '' }, { name: 'Tony Reeves', role: 'Strength & Conditioning', image: '' }] }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-f2', type: 'footer', order: 3, content: { companyName: 'Forge Fitness', tagline: 'Strength. Community. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@forgefitness.com', phone: '(555) 789-0123' }, settings: { backgroundColor: '#0a0a0a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'programs', name: 'Programs', slug: '/programs', blocks: [
          { id: 'fi-hpr', type: 'hero', order: 0, content: { heading: 'Membership Plans', subheading: 'Find the plan that fits your lifestyle.' }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'fi-pricing', type: 'pricing', order: 1, content: { heading: '', plans: [{ name: 'Basic', price: '$39/mo', features: ['Gym floor access', 'Locker room', 'Free WiFi'] }, { name: 'Premium', price: '$69/mo', features: ['All Basic benefits', 'Unlimited group classes', 'Sauna & recovery', '1 PT session/month'] }, { name: 'Elite', price: '$119/mo', features: ['All Premium benefits', 'Weekly PT sessions', 'Nutrition coaching', 'Priority booking'] }] }, settings: { backgroundColor: '#1f1f1f', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-f3', type: 'footer', order: 2, content: { companyName: 'Forge Fitness', tagline: 'Strength. Community. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@forgefitness.com', phone: '(555) 789-0123' }, settings: { backgroundColor: '#0a0a0a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'fi-hc', type: 'hero', order: 0, content: { heading: 'Get Started', subheading: 'Book your free trial session.' }, settings: { backgroundColor: '#111827', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'fi-contact', type: 'contact', order: 1, content: { heading: 'Book a Tour', fields: ['name', 'email', 'phone', 'message'], submitText: 'Book Now' }, settings: { backgroundColor: '#1f1f1f', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'fi-f4', type: 'footer', order: 2, content: { companyName: 'Forge Fitness', tagline: 'Strength. Community. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@forgefitness.com', phone: '(555) 789-0123' }, settings: { backgroundColor: '#0a0a0a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 11: Photography / Portfolio ---
  {
    name: 'Photography & Portfolio',
    description: 'Minimal, image-focused template for photographers, artists, and creative portfolios.',
    industry_tags: ['Professional Services'],
    style_tags: ['Minimal', 'Dark Mode'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'ph-hero', type: 'hero', order: 0, content: { heading: 'Capturing Moments That Matter', subheading: 'Wedding, portrait, and commercial photography.' }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'ph-about', type: 'about', order: 1, content: { heading: 'About My Work', text: 'I believe every photograph tells a story. With over a decade behind the lens, I specialize in creating images that are timeless, authentic, and full of emotion.', image: '' }, settings: { backgroundColor: '#262626', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-gallery', type: 'gallery', order: 2, content: { heading: 'Selected Work', images: [] }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-test', type: 'testimonials', order: 3, content: { heading: 'Kind Words', testimonials: [{ quote: 'She captured our wedding day so beautifully. We will cherish these photos forever.', author: 'Emma & Liam', role: 'Wedding Clients' }, { quote: 'Truly an artist. The portraits exceeded all expectations.', author: 'Natasha Green', role: 'Portrait Session' }] }, settings: { backgroundColor: '#262626', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-cta', type: 'cta', order: 4, content: { heading: 'Let\'s Create Something Beautiful', subheading: 'Available for bookings worldwide.', ctaText: 'Get in Touch', ctaLink: '/contact' }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ph-footer', type: 'footer', order: 5, content: { companyName: 'Isla Reeves Photography', tagline: 'Moments, preserved.', links: [{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'hello@islareeves.com', phone: '' }, settings: { backgroundColor: '#0a0a0a', textColor: '#777777', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'ph-ha', type: 'hero', order: 0, content: { heading: 'About Isla', subheading: 'The person behind the camera.' }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ph-ab', type: 'about', order: 1, content: { heading: 'My Journey', text: 'Photography found me at age 16 when I borrowed my father\'s film camera. Since then, it has been a lifelong pursuit of light, composition, and human connection. Based in Sydney, I travel worldwide for assignments.', image: '' }, settings: { backgroundColor: '#262626', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-f2', type: 'footer', order: 2, content: { companyName: 'Isla Reeves Photography', tagline: 'Moments, preserved.', links: [{ label: 'Home', href: '/' }], email: 'hello@islareeves.com', phone: '' }, settings: { backgroundColor: '#0a0a0a', textColor: '#777777', padding: '48px 0' } },
        ] },
        { id: 'portfolio', name: 'Portfolio', slug: '/portfolio', blocks: [
          { id: 'ph-hp', type: 'hero', order: 0, content: { heading: 'Portfolio', subheading: 'A curated collection of recent work.' }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ph-gal2', type: 'gallery', order: 1, content: { heading: '', images: [] }, settings: { backgroundColor: '#262626', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-f3', type: 'footer', order: 2, content: { companyName: 'Isla Reeves Photography', tagline: 'Moments, preserved.', links: [{ label: 'Home', href: '/' }], email: 'hello@islareeves.com', phone: '' }, settings: { backgroundColor: '#0a0a0a', textColor: '#777777', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'ph-hc', type: 'hero', order: 0, content: { heading: 'Enquire', subheading: 'Tell me about your project.' }, settings: { backgroundColor: '#171717', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'ph-contact', type: 'contact', order: 1, content: { heading: 'Send a Message', fields: ['name', 'email', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#262626', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'ph-f4', type: 'footer', order: 2, content: { companyName: 'Isla Reeves Photography', tagline: 'Moments, preserved.', links: [{ label: 'Home', href: '/' }], email: 'hello@islareeves.com', phone: '' }, settings: { backgroundColor: '#0a0a0a', textColor: '#777777', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 12: Legal / Law Firm ---
  {
    name: 'Legal & Law Firm',
    description: 'Authoritative, trust-building template for law firms and legal practitioners.',
    industry_tags: ['Legal'],
    style_tags: ['Corporate', 'Minimal'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'le-hero', type: 'hero', order: 0, content: { heading: 'Experienced Legal Counsel You Can Trust', subheading: 'Protecting your rights and interests with decades of combined experience.', ctaText: 'Free Consultation', ctaLink: '/contact' }, settings: { backgroundColor: '#1E293B', textColor: '#ffffff', padding: '96px 0' } },
          { id: 'le-features', type: 'features', order: 1, content: { heading: 'Practice Areas', subheading: '', features: [{ title: 'Corporate Law', description: 'Business formation, contracts, mergers, and compliance.', icon: 'briefcase' }, { title: 'Family Law', description: 'Divorce, custody, adoption, and family disputes.', icon: 'heart' }, { title: 'Litigation', description: 'Civil and commercial dispute resolution and court representation.', icon: 'shield' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-about', type: 'about', order: 1, content: { heading: 'Why Choose Our Firm', text: 'With over 40 years of combined experience, our attorneys bring deep expertise and a client-first approach to every case. We fight for your rights with integrity and tenacity.', image: '' }, settings: { backgroundColor: '#f8fafc', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-test', type: 'testimonials', order: 3, content: { heading: 'Client Testimonials', testimonials: [{ quote: 'They handled my case with professionalism and achieved an outstanding outcome.', author: 'Patricia Moore', role: 'Corporate Client' }, { quote: 'Compassionate and effective. I felt supported every step of the way.', author: 'Thomas Rivera', role: 'Family Law Client' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-cta', type: 'cta', order: 4, content: { heading: 'Schedule a Free Consultation', subheading: 'No obligation. Confidential. Available 24/7 for urgent matters.', ctaText: 'Contact Us', ctaLink: '/contact' }, settings: { backgroundColor: '#1E293B', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'le-footer', type: 'footer', order: 5, content: { companyName: 'Clarke & Associates', tagline: 'Justice. Integrity. Results.', links: [{ label: 'Home', href: '/' }, { label: 'Practice Areas', href: '/practice-areas' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'info@clarkelaw.com', phone: '(555) 890-1234' }, settings: { backgroundColor: '#0f172a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'le-ha', type: 'hero', order: 0, content: { heading: 'About Our Firm', subheading: 'A legacy of legal excellence.' }, settings: { backgroundColor: '#1E293B', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'le-ab', type: 'about', order: 1, content: { heading: 'Our History', text: 'Founded in 1998, Clarke & Associates has grown from a solo practice to a respected multi-disciplinary law firm. We have represented thousands of clients and achieved landmark results.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-team', type: 'team', order: 2, content: { heading: 'Our Attorneys', members: [{ name: 'Elizabeth Clarke', role: 'Founding Partner', image: '' }, { name: 'Daniel Okonkwo', role: 'Senior Associate', image: '' }, { name: 'Maria Santos', role: 'Family Law Partner', image: '' }] }, settings: { backgroundColor: '#f8fafc', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-f2', type: 'footer', order: 3, content: { companyName: 'Clarke & Associates', tagline: 'Justice. Integrity. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@clarkelaw.com', phone: '(555) 890-1234' }, settings: { backgroundColor: '#0f172a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'practice-areas', name: 'Practice Areas', slug: '/practice-areas', blocks: [
          { id: 'le-hpa', type: 'hero', order: 0, content: { heading: 'Practice Areas', subheading: 'Comprehensive legal services.' }, settings: { backgroundColor: '#1E293B', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'le-feat2', type: 'features', order: 1, content: { heading: '', subheading: '', features: [{ title: 'Corporate & Commercial', description: 'Business law, contracts, M&A, and regulatory compliance.', icon: 'briefcase' }, { title: 'Family & Domestic', description: 'Divorce, child custody, spousal support, and adoption.', icon: 'heart' }, { title: 'Civil Litigation', description: 'Dispute resolution, trial advocacy, and appeals.', icon: 'shield' }, { title: 'Real Estate', description: 'Property transactions, leasing, and development.', icon: 'target' }] }, settings: { backgroundColor: '#ffffff', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-faq', type: 'faq', order: 2, content: { heading: 'Common Questions', items: [{ question: 'How much does a consultation cost?', answer: 'We offer a free initial consultation for all new clients to assess your case.' }, { question: 'How long does a typical case take?', answer: 'Timelines vary depending on complexity. We provide realistic estimates during your consultation.' }, { question: 'Do you offer payment plans?', answer: 'Yes, we offer flexible payment arrangements to make legal representation accessible.' }] }, settings: { backgroundColor: '#f8fafc', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-f3', type: 'footer', order: 3, content: { companyName: 'Clarke & Associates', tagline: 'Justice. Integrity. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@clarkelaw.com', phone: '(555) 890-1234' }, settings: { backgroundColor: '#0f172a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'le-hc', type: 'hero', order: 0, content: { heading: 'Contact Us', subheading: 'Available 24/7 for urgent legal matters.' }, settings: { backgroundColor: '#1E293B', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'le-contact', type: 'contact', order: 1, content: { heading: 'Request a Consultation', fields: ['name', 'email', 'phone', 'message'], submitText: 'Send' }, settings: { backgroundColor: '#ffffff', textColor: '#1E293B', padding: '80px 0' } },
          { id: 'le-f4', type: 'footer', order: 2, content: { companyName: 'Clarke & Associates', tagline: 'Justice. Integrity. Results.', links: [{ label: 'Home', href: '/' }], email: 'info@clarkelaw.com', phone: '(555) 890-1234' }, settings: { backgroundColor: '#0f172a', textColor: '#cccccc', padding: '48px 0' } },
        ] },
      ],
    },
  },
  // --- Template 13: Beauty / Salon ---
  {
    name: 'Beauty & Salon',
    description: 'Warm, elegant template for beauty salons, spas, and wellness studios with copper tones and cream backgrounds.',
    industry_tags: ['Health & Wellness'],
    style_tags: ['Elegant', 'Warm', 'Minimal'],
    page_count: 4,
    template_data: {
      pages: [
        { id: 'home', name: 'Home', slug: '/', blocks: [
          { id: 'be-hero', type: 'hero', order: 0, content: { heading: 'Refreshing Your Beauty Senses', subheading: 'We provide the finest beauty services for our clients, always striving to achieve trust and complete satisfaction with every visit.', ctaText: 'Get Started', ctaLink: '/contact' }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '96px 0', accentColor: '#C4956A' } },
          { id: 'be-about', type: 'about', order: 1, content: { heading: 'Welcome to Our Salon', subheading: 'About Us', text: 'With over a decade of experience, our salon has become a sanctuary for those seeking exceptional beauty and wellness services. Our skilled professionals combine artistry with the latest techniques to deliver results that exceed expectations. We believe that true beauty starts with confidence, and every treatment is designed to help you feel your absolute best.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-features', type: 'features', order: 2, content: { heading: 'Our Services', subheading: 'What We Offer', features: [{ title: 'Hair Styling', description: 'Expert cuts, colors, balayage, and blowouts tailored to your unique style and face shape.', icon: 'star' }, { title: 'Skincare', description: 'Luxurious facials, chemical peels, and rejuvenating treatments for radiant, glowing skin.', icon: 'heart' }, { title: 'Nail Art', description: 'Manicures, pedicures, gel polish, and intricate nail art by our skilled technicians.', icon: 'palette' }, { title: 'Makeup', description: 'Professional makeup for weddings, events, editorial shoots, and everyday glamour.', icon: 'sun' }, { title: 'Body Treatments', description: 'Relaxing massages, body scrubs, and aromatherapy to rejuvenate body and mind.', icon: 'shield' }, { title: 'Bridal Packages', description: 'Complete bridal beauty packages including trials, day-of styling, and bridal party services.', icon: 'camera' }] }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-stats', type: 'stats', order: 3, content: { stats: [{ value: '12+', label: 'Years Experience' }, { value: '5000+', label: 'Happy Clients' }, { value: '25', label: 'Expert Stylists' }, { value: '50+', label: 'Beauty Awards' }] }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'be-gallery', type: 'gallery', order: 4, content: { heading: 'Our Portfolio', images: [] }, settings: { backgroundColor: '#ffffff', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-team', type: 'team', order: 5, content: { heading: 'Meet Our Experts', members: [{ name: 'Olivia Hart', role: 'Creative Director', image: '' }, { name: 'Zara Khan', role: 'Senior Colourist', image: '' }, { name: 'Mia Jones', role: 'Skincare Specialist', image: '' }] }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-test', type: 'testimonials', order: 6, content: { heading: 'What Our Clients Say', testimonials: [{ quote: 'The best salon experience I have ever had. My hair looks incredible and the atmosphere is so relaxing. I would not go anywhere else!', author: 'Leona Becker', role: 'Regular Client' }, { quote: 'So relaxing and the results are always flawless. The team truly understands what I want every single time.', author: 'Della Carter', role: 'Client since 2021' }, { quote: 'From the moment you walk in, you feel pampered. Their attention to detail is second to none. Absolutely love this place!', author: 'Alberta Kulas', role: 'VIP Member' }] }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-cta', type: 'cta', order: 7, content: { heading: 'Want To Get Updates On Aesthetic & Wellness News?', subheading: 'Subscribe to our newsletter and be the first to know about special offers, new treatments, and beauty tips from our experts.', ctaText: 'Book Appointment', ctaLink: '/contact' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'be-footer', type: 'footer', order: 8, content: { companyName: 'Beauty Salon', tagline: 'Refreshing your beauty senses with premium care and expert artistry.', links: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Services', href: '/services' }, { label: 'Pricing', href: '/services' }, { label: 'Contact', href: '/contact' }], email: 'info@beautysalon.com', phone: '1 501-448-5781' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '48px 0' } },
        ] },
        { id: 'about', name: 'About', slug: '/about', blocks: [
          { id: 'be-ha', type: 'hero', order: 0, content: { heading: 'About Our Salon', subheading: 'Where every client feels special and every visit is an experience.' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'be-ab', type: 'about', order: 1, content: { heading: 'Our Story', subheading: 'Est. 2012', text: 'Beauty Salon was founded with a simple philosophy: everyone deserves to feel beautiful. What started as a small studio has grown into a full-service beauty destination, but our commitment to personalized care has never changed. Our team of talented stylists, aestheticians, and wellness professionals are passionate about helping you look and feel your absolute best. We use only premium products and the latest techniques to deliver results that speak for themselves.', image: '' }, settings: { backgroundColor: '#ffffff', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-team', type: 'team', order: 2, content: { heading: 'Our Expert Team', members: [{ name: 'Olivia Hart', role: 'Creative Director', image: '' }, { name: 'Zara Khan', role: 'Senior Colourist', image: '' }, { name: 'Mia Jones', role: 'Skincare Specialist', image: '' }] }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-stats2', type: 'stats', order: 3, content: { stats: [{ value: '12+', label: 'Years Experience' }, { value: '5000+', label: 'Happy Clients' }, { value: '25', label: 'Expert Stylists' }, { value: '50+', label: 'Beauty Awards' }] }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '64px 0' } },
          { id: 'be-f2', type: 'footer', order: 4, content: { companyName: 'Beauty Salon', tagline: 'Refreshing your beauty senses.', links: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Contact', href: '/contact' }], email: 'info@beautysalon.com', phone: '1 501-448-5781' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '48px 0' } },
        ] },
        { id: 'services', name: 'Services', slug: '/services', blocks: [
          { id: 'be-hs', type: 'hero', order: 0, content: { heading: 'Our Services & Pricing', subheading: 'Luxury treatments at accessible prices for every occasion.' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'be-feat2', type: 'features', order: 1, content: { heading: 'What We Offer', subheading: 'Premium Services', features: [{ title: 'Cut & Style', description: 'Precision cuts and blowouts tailored to your face shape, hair texture, and personal style.', icon: 'star' }, { title: 'Color & Highlights', description: 'From subtle balayage to bold fashion colors, our colourists create stunning transformations.', icon: 'palette' }, { title: 'Facials & Peels', description: 'Customized skincare treatments using premium products for every skin type and concern.', icon: 'heart' }, { title: 'Body Treatments', description: 'Relaxing massages, detox wraps, and aromatherapy sessions to rejuvenate body and mind.', icon: 'shield' }, { title: 'Nail Services', description: 'Classic and gel manicures, spa pedicures, and intricate nail art designs.', icon: 'sun' }, { title: 'Bridal & Events', description: 'Complete beauty packages for weddings, proms, and special occasions with trial sessions.', icon: 'camera' }] }, settings: { backgroundColor: '#ffffff', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-pricing', type: 'pricing', order: 2, content: { heading: 'Our Pricing', plans: [{ name: 'Essential', price: 'From $65', features: ['Wash & Cut', 'Blow Dry', 'Express Facial', 'Classic Manicure'] }, { name: 'Signature', price: 'From $120', features: ['Cut & Colour', 'Deep Conditioning', 'Deluxe Facial', 'Brow Shaping', 'Gel Manicure'] }, { name: 'VIP Experience', price: 'From $250', features: ['Full Colour Service', 'Scalp Treatment', 'Luxury Facial', 'Full Body Massage', 'Manicure & Pedicure'] }] }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-f3', type: 'footer', order: 3, content: { companyName: 'Beauty Salon', tagline: 'Refreshing your beauty senses.', links: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }], email: 'info@beautysalon.com', phone: '1 501-448-5781' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '48px 0' } },
        ] },
        { id: 'contact', name: 'Contact', slug: '/contact', blocks: [
          { id: 'be-hc', type: 'hero', order: 0, content: { heading: 'Book an Appointment', subheading: 'Walk-ins welcome. Appointments recommended for the best experience.' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '80px 0' } },
          { id: 'be-contact', type: 'contact', order: 1, content: { heading: 'Get in Touch', fields: ['name', 'email', 'phone', 'message'], submitText: 'Book Now' }, settings: { backgroundColor: '#ffffff', textColor: '#3D2B1F', padding: '80px 0', accentColor: '#C4956A' } },
          { id: 'be-text', type: 'text', order: 2, content: { heading: 'Visit Us', text: '30 Edington, Smyrna, GA 30082\nFri-Sat: 8AM - 10PM\nEmail: info@beautysalon.com\nPhone: 1 501-448-5781' }, settings: { backgroundColor: '#FDF5F0', textColor: '#3D2B1F', padding: '64px 0', accentColor: '#C4956A' } },
          { id: 'be-f4', type: 'footer', order: 3, content: { companyName: 'Beauty Salon', tagline: 'Refreshing your beauty senses.', links: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Services', href: '/services' }], email: 'info@beautysalon.com', phone: '1 501-448-5781' }, settings: { backgroundColor: '#C4956A', textColor: '#ffffff', padding: '48px 0' } },
        ] },
      ],
    },
  },
  ...batch1Templates,
  ...batch2Templates,
  ...batch3Templates,
  ...batch4Templates,
];
