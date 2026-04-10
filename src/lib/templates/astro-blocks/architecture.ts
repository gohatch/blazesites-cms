import type { SeedTemplate } from '../seed-templates';

export const architectureTemplate: SeedTemplate = {
  name: 'DNOIN.INC Architecture',
  description: 'Sophisticated architecture firm template with serif typography, project gallery, team roster, case studies, and project categories. Minimal and elegant.',
  industry_tags: ['Architecture', 'Design', 'Interior'],
  style_tags: ['Minimal', 'Elegant', 'Serif'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'architecture',
  template_data: {
    pages: [
      {
        id: 'arch-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'arch-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Building Beyond',
              subheading: 'According to Vitruvius, the architect should strive to fulfill each of these three attributes as well as possible.',
              ctaText: 'Contact us',
              ctaLink: '/contact',
              backgroundImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1a1a1a',
              padding: '120px 0',
              accentColor: '#1a1a1a',
            },
          },
          {
            id: 'arch-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'About Us',
              text: 'The art and science of designing buildings and nonbuilding structures. The style of design and method of construction of buildings and other physical structures.',
              image: '',
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1a1a1a',
            },
          },
          {
            id: 'arch-projects',
            type: 'gallery',
            order: 2,
            content: {
              heading: 'Recent Projects',
              subheading: 'Each project is a collaboration between vision and craft. We bring architectural ambition to life with meticulous attention to every detail.',
              images: [
                { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', alt: 'The Modern Versailles', caption: 'Alexander City, New York' },
                { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Buckingham Palace', caption: 'Lake Havasu City, Washington' },
                { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80', alt: 'Les Palais Bulles', caption: 'North Little Rock, California' },
              ],
            },
            settings: {
              backgroundColor: '#FAFAF7',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1a1a1a',
            },
          },
          {
            id: 'arch-team',
            type: 'team',
            order: 3,
            content: {
              heading: 'Our Architects',
              subheading: '',
              members: [
                { name: 'Max Abramovitz', role: 'Hathor, relief on capitals at Philae Island, southern Egypt.', image: '' },
                { name: 'Cameron Williamson', role: 'Brighton, Brighton and Hove, United Kingdom', image: '' },
                { name: 'Pietro Belluschi', role: 'Cushion capital and early English Gothic foliated capital.', image: '' },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1a1a1a',
            },
          },
          {
            id: 'arch-categories',
            type: 'features',
            order: 4,
            content: {
              heading: 'Project Categories',
              subheading: 'Comprehensive architectural services across multiple disciplines.',
              features: [
                { title: 'Interior Design', description: 'Creating functional and beautiful interior spaces that enhance the way people live and work.', icon: 'home' },
                { title: 'Commercial Architect', description: 'Designing innovative commercial spaces that inspire productivity and drive business success.', icon: 'building' },
                { title: 'Landscape Architect', description: 'Shaping outdoor environments that harmonize with nature and elevate the built landscape.', icon: 'star' },
                { title: 'Civic Project', description: 'Public buildings and spaces that serve communities and stand as landmarks for generations.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#ffffff',
            },
          },
          {
            id: 'arch-case-studies',
            type: 'features',
            order: 5,
            content: {
              heading: 'Recent Case Studies',
              subheading: '',
              features: [
                { title: 'Fulham Town Hall Extension', description: 'Improvement on the floor plan and layout of a loft apartment in Paris to maximise the use of space and additional.', icon: 'building' },
                { title: 'The White Apartment', description: 'Redefining Urban Elegance. Bridging Heritage and Modern Living in an Iconic Residential Landmark.', icon: 'home' },
              ],
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1a1a1a',
            },
          },
          {
            id: 'arch-footer',
            type: 'footer',
            order: 6,
            content: {
              companyName: 'DNOIN.INC',
              tagline: 'The art and science of designing buildings and nonbuilding structures. The style of design and method of construction of buildings and other physical structures.',
              links: [
                { label: 'Projects', href: '/projects' },
                { label: 'About us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'studio@dnoin.com',
              phone: '(212) 555-0198',
            },
            settings: {
              backgroundColor: '#FFFFFF',
              textColor: '#6B6B6B',
              padding: '48px 0',
              accentColor: '#1a1a1a',
            },
          },
        ],
      },
    ],
  },
};
