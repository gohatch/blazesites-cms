import type { TemplateData } from '@/types';

export const batch3Templates: Array<{
  name: string;
  description: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  template_data: TemplateData;
}> = [
  // ============================================================================
  // CONSTRUCTION & TRADES - Template A: Precision Builders
  // ============================================================================
  {
    name: 'Precision Builders',
    description: 'Industrial-modern construction company template with concrete aesthetic and safety-focused design',
    industry_tags: ['construction', 'contracting', 'trades', 'commercial'],
    style_tags: ['industrial', 'modern', 'professional', 'rugged'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'precision-builders-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Precision Craftsmanship. Proven Results.',
                subheading: 'Leading commercial construction services across the Pacific Northwest since 1998',
                ctaText: 'View Our Projects',
                ctaLink: '/projects',
                backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                overlayOpacity: 0.4,
                padding: 'py-32'
              }
            },
            {
              id: 'stats-home',
              type: 'stats',
              order: 1,
              content: {
                stats: [
                  { value: '280+', label: 'Projects Completed' },
                  { value: '15M+', label: 'SqFt Built' },
                  { value: '98%', label: 'On-Time Delivery' },
                  { value: '25+', label: 'Years Experience' }
                ]
              },
              settings: {
                backgroundColor: '#374151',
                textColor: '#F9FAFB',
                padding: 'py-16'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 2,
              content: {
                heading: 'Why Partner With Precision Builders',
                subheading: 'Industry-leading expertise and commitment to excellence',
                features: [
                  {
                    title: 'Safety First',
                    description: 'Zero-incident culture with OSHA certification and rigorous safety protocols',
                    icon: 'shield'
                  },
                  {
                    title: 'Advanced Technology',
                    description: 'BIM modeling, real-time project tracking, and drone site monitoring',
                    icon: 'laptop'
                  },
                  {
                    title: 'Sustainable Building',
                    description: 'LEED certification expertise and eco-conscious construction practices',
                    icon: 'chart'
                  },
                  {
                    title: 'Expert Team',
                    description: 'Licensed engineers, architects, and master craftspeople on every project',
                    icon: 'briefcase'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Build Your Next Project?',
                subheading: 'Partner with Precision Builders for construction excellence',
                ctaText: 'Schedule Consultation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#EA580C',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Precision Builders Inc.',
                tagline: 'Building Tomorrow, Today',
                links: [
                  { label: 'About Us', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'info@precisionbuilders.com',
                phone: '(206) 555-0142'
              },
              settings: {
                backgroundColor: '#0F172A',
                textColor: '#F9FAFB',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'precision-builders-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Story',
                subheading: 'Founded in 1998, Precision Builders has grown to become the Pacific Northwest\'s most trusted commercial construction partner',
                ctaText: 'Explore Our Work',
                ctaLink: '/projects',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                overlayOpacity: 0.35,
                padding: 'py-24'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 1,
              content: {
                heading: 'Building With Integrity',
                text: 'Our mission is to deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of safety and craftsmanship. With a team of 120+ dedicated professionals, we\'ve successfully managed projects ranging from $2M to $180M. Every project reflects our commitment to precision, transparency, and innovation.',
                image: 'https://images.unsplash.com/photo-1634670303139-898bb387f280?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'team-about',
              type: 'team',
              order: 2,
              content: {
                heading: 'Leadership Team',
                members: [
                  {
                    name: 'Michael Torres',
                    role: 'Founder & CEO',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Sarah Chen',
                    role: 'VP of Operations',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'James Mitchell',
                    role: 'Chief Safety Officer',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Precision Builders Inc.',
                tagline: 'Building Tomorrow, Today',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'info@precisionbuilders.com',
                phone: '(206) 555-0142'
              },
              settings: {
                backgroundColor: '#0F172A',
                textColor: '#F9FAFB',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'precision-builders-services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'hero-services',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Comprehensive construction solutions for every project scale',
                ctaText: 'Get a Quote',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                overlayOpacity: 0.4,
                padding: 'py-24'
              }
            },
            {
              id: 'features-services',
              type: 'features',
              order: 1,
              content: {
                heading: 'Core Service Lines',
                subheading: 'From pre-construction planning to final handover',
                features: [
                  {
                    title: 'General Contracting',
                    description: 'Full-service construction management from ground up to final inspection',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Design-Build',
                    description: 'Integrated design and construction for streamlined project delivery',
                    icon: 'code'
                  },
                  {
                    title: 'Renovation & Remodeling',
                    description: 'Transform existing spaces while minimizing disruption',
                    icon: 'monitor'
                  },
                  {
                    title: 'Commercial Fit-Out',
                    description: 'Tenant improvement and interior buildout expertise',
                    icon: 'layout'
                  },
                  {
                    title: 'Project Management',
                    description: 'Expert oversight ensuring on-time, on-budget delivery',
                    icon: 'chart'
                  },
                  {
                    title: 'Sustainable Construction',
                    description: 'LEED and green building certification specialists',
                    icon: 'sun'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-services',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Let\'s Discuss Your Project',
                subheading: 'Contact our team for a comprehensive consultation',
                ctaText: 'Schedule Today',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#EA580C',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-services',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Precision Builders Inc.',
                tagline: 'Building Tomorrow, Today',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'info@precisionbuilders.com',
                phone: '(206) 555-0142'
              },
              settings: {
                backgroundColor: '#0F172A',
                textColor: '#F9FAFB',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'precision-builders-projects',
          name: 'Projects',
          slug: '/projects',
          blocks: [
            {
              id: 'hero-projects',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Featured Projects',
                subheading: 'Showcasing excellence in construction across diverse sectors',
                ctaText: 'Contact Us',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1541912278-2a87f2342a20?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                overlayOpacity: 0.35,
                padding: 'py-24'
              }
            },
            {
              id: 'gallery-projects',
              type: 'gallery',
              order: 2,
              content: {
                heading: 'Our Work',
                images: [
                  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop', alt: 'Tech Campus Project' },
                  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', alt: 'Medical Center' },
                  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop', alt: 'Downtown Office Tower' },
                  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', alt: 'Retail Complex' },
                  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop', alt: 'Industrial Facility' },
                  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', alt: 'Educational Campus' }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-projects',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Build Your Success Story?',
                subheading: 'Join the 280+ clients who trust Precision Builders',
                ctaText: 'Start Your Project',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#EA580C',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-projects',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Precision Builders Inc.',
                tagline: 'Building Tomorrow, Today',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'info@precisionbuilders.com',
                phone: '(206) 555-0142'
              },
              settings: {
                backgroundColor: '#0F172A',
                textColor: '#F9FAFB',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'precision-builders-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Let\'s discuss your next construction project',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F9FAFB',
                textColor: '#0F172A',
                overlayOpacity: 0.35,
                padding: 'py-20'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Project Inquiry Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Inquiry'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0F172A',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Precision Builders Inc.',
                tagline: 'Building Tomorrow, Today',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Projects', href: '/projects' }
                ],
                email: 'info@precisionbuilders.com',
                phone: '(206) 555-0142'
              },
              settings: {
                backgroundColor: '#0F172A',
                textColor: '#F9FAFB',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  },

  // ============================================================================
  // CONSTRUCTION & TRADES - Template B: Heritage Construction
  // ============================================================================
  {
    name: 'Heritage Construction',
    description: 'Classic craftsmanship template emphasizing timeless building traditions and trustworthiness',
    industry_tags: ['construction', 'contracting', 'trades', 'renovation'],
    style_tags: ['classic', 'traditional', 'elegant', 'trustworthy'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'heritage-construction-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Time-Honored Craftsmanship',
                subheading: 'Building homes and businesses with quality that lasts generations',
                ctaText: 'Learn More',
                ctaLink: '/about',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF8E7',
                textColor: '#3E2723',
                overlayOpacity: 0.3,
                padding: 'py-32'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 1,
              content: {
                heading: 'The Heritage Difference',
                subheading: 'Where traditional values meet modern building standards',
                features: [
                  {
                    title: 'Master Craftsmen',
                    description: 'Fourth-generation builders with deep expertise and dedication to quality',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Premium Materials',
                    description: 'Sourcing the finest natural materials for lasting beauty and durability',
                    icon: 'shield'
                  },
                  {
                    title: 'Custom Design',
                    description: 'Bespoke solutions tailored to your vision and architectural style',
                    icon: 'palette'
                  },
                  {
                    title: 'Lifetime Support',
                    description: 'Comprehensive warranties and ongoing maintenance partnership',
                    icon: 'heart'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3E2723',
                padding: 'py-20',
                borderRadius: 'rounded-lg'
              }
            },
            {
              id: 'testimonials-home',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'Voices of Satisfied Clients',
                testimonials: [
                  {
                    quote: 'Heritage Construction restored our 1920s farmhouse with authentic materials and attention to period detail. The craftsmanship is extraordinary.',
                    author: 'Margaret & David Thompson',
                    role: 'Homeowners, Willamette Valley'
                  },
                  {
                    quote: 'Their commitment to quality and timelines was exceptional. Every detail reflected their pride in the work. Highly recommend.',
                    author: 'Robert Chen',
                    role: 'Real Estate Developer'
                  },
                  {
                    quote: 'Working with Heritage felt like partnering with true artisans. They understood our vision and brought it to life beautifully.',
                    author: 'Lisa Kozlov',
                    role: 'Restaurant Owner'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFF8E7',
                textColor: '#3E2723',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Build Your Legacy',
                subheading: 'Start your project with Heritage Construction today',
                ctaText: 'Get Started',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#2E7D32',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Heritage Construction Co.',
                tagline: 'Building Legacy. One Project at a Time.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@heritageconstruction.com',
                phone: '(503) 555-0187'
              },
              settings: {
                backgroundColor: '#3E2723',
                textColor: '#FFF8E7',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'heritage-construction-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Heritage',
                subheading: 'Four generations of building excellence, starting with our founder James Heritage in 1947',
                ctaText: 'View Our Work',
                ctaLink: '/services',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF8E7',
                textColor: '#3E2723',
                overlayOpacity: 0.25,
                padding: 'py-28'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 1,
              content: {
                heading: 'Building on a Foundation of Trust',
                text: 'Since 1947, Heritage Construction has been synonymous with quality, integrity, and timeless craftsmanship. Started by James Heritage as a single-man carpentry operation, our company has grown to employ over 50 skilled artisans while maintaining the same commitment to excellence that defined our founder\'s work. Every project, whether a modest home renovation or a substantial commercial build, receives the same meticulous attention and pride in execution. We believe that buildings should last generations and that the relationships we build with our clients are just as important as the structures we create.',
                image: 'https://images.unsplash.com/photo-1634468328439-e2c2cba3b3cd?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3E2723',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-about',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Build Something Lasting?',
                subheading: 'Contact us for a consultation about your next project',
                ctaText: 'Get In Touch',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#2E7D32',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Heritage Construction Co.',
                tagline: 'Building Legacy. One Project at a Time.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@heritageconstruction.com',
                phone: '(503) 555-0187'
              },
              settings: {
                backgroundColor: '#3E2723',
                textColor: '#FFF8E7',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'heritage-construction-services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'hero-services',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Expert craftsmanship across all construction disciplines',
                ctaText: 'Start a Project',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF8E7',
                textColor: '#3E2723',
                overlayOpacity: 0.3,
                padding: 'py-24'
              }
            },
            {
              id: 'features-services',
              type: 'features',
              order: 1,
              content: {
                heading: 'Comprehensive Services',
                subheading: 'From concept to completion, we handle it all',
                features: [
                  {
                    title: 'New Construction',
                    description: 'Custom homes and buildings built to your exact specifications',
                    icon: 'code'
                  },
                  {
                    title: 'Home Renovation',
                    description: 'Thoughtful renovations that enhance character and value',
                    icon: 'layout'
                  },
                  {
                    title: 'Restoration Work',
                    description: 'Preserving historic properties with authentic materials and techniques',
                    icon: 'monitor'
                  },
                  {
                    title: 'Specialty Carpentry',
                    description: 'Fine woodwork, cabinetry, and custom architectural details',
                    icon: 'target'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3E2723',
                padding: 'py-20',
                borderRadius: 'rounded-lg'
              }
            },
            {
              id: 'cta-services',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Let\'s Bring Your Vision to Life',
                subheading: 'Schedule a consultation with our master craftsmen',
                ctaText: 'Contact Us',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#2E7D32',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-services',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Heritage Construction Co.',
                tagline: 'Building Legacy. One Project at a Time.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@heritageconstruction.com',
                phone: '(503) 555-0187'
              },
              settings: {
                backgroundColor: '#3E2723',
                textColor: '#FFF8E7',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'heritage-construction-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'We\'d love to discuss your next project',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF8E7',
                textColor: '#3E2723',
                overlayOpacity: 0.25,
                padding: 'py-20'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Project Inquiry',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3E2723',
                padding: 'py-20',
                borderRadius: 'rounded-lg'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Heritage Construction Co.',
                tagline: 'Building Legacy. One Project at a Time.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' }
                ],
                email: 'hello@heritageconstruction.com',
                phone: '(503) 555-0187'
              },
              settings: {
                backgroundColor: '#3E2723',
                textColor: '#FFF8E7',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  },

  // ============================================================================
  // EDUCATION & COURSES - Template A: Academy Pro
  // ============================================================================
  {
    name: 'Academy Pro',
    description: 'Premium cinematic learning platform inspired by Masterclass aesthetics with emerald accents',
    industry_tags: ['education', 'online-learning', 'courses', 'training'],
    style_tags: ['premium', 'cinematic', 'sophisticated', 'modern'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'academy-pro-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Learn From the World\'s Best',
                subheading: 'Exclusive courses taught by industry leaders in design, technology, and creative disciplines',
                ctaText: 'Explore Courses',
                ctaLink: '/courses',
                backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                overlayOpacity: 0.5,
                padding: 'py-40'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 1,
              content: {
                heading: 'Why Academy Pro',
                subheading: 'The gold standard in premium online education',
                features: [
                  {
                    title: 'World-Class Instructors',
                    description: 'Learn directly from award-winning professionals and industry pioneers',
                    icon: 'star'
                  },
                  {
                    title: 'Production Quality',
                    description: 'Cinematically crafted lessons shot in 4K with premium production value',
                    icon: 'camera'
                  },
                  {
                    title: 'Lifetime Access',
                    description: 'Own your education. Watch, rewatch, and download lessons forever',
                    icon: 'zap'
                  },
                  {
                    title: 'Community Learning',
                    description: 'Connect with thousands of ambitious students pursuing excellence',
                    icon: 'megaphone'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20'
              }
            },
            {
              id: 'testimonials-home',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'Student Success Stories',
                testimonials: [
                  {
                    quote: 'Academy Pro transformed my design career. The production quality alone sets it apart, but the teaching is exceptional. Worth every penny.',
                    author: 'Jessica Liu',
                    role: 'Freelance Designer'
                  },
                  {
                    quote: 'I took the Advanced UX Design course and landed my dream role at Google within three months. Academy Pro taught me the industry-standard approach.',
                    author: 'Marcus Johnson',
                    role: 'Senior Product Designer'
                  },
                  {
                    quote: 'The cinematography and storytelling in these lessons is unprecedented. This is how premium education should be delivered.',
                    author: 'Sarah Chen',
                    role: 'Creative Director'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20',
                borderRadius: 'rounded-lg'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Start Your Learning Journey',
                subheading: 'Join thousands of students elevating their skills',
                ctaText: 'Browse All Courses',
                ctaLink: '/courses'
              },
              settings: {
                backgroundColor: '#059669',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Academy Pro',
                tagline: 'Premium Online Education',
                links: [
                  { label: 'Courses', href: '/courses' },
                  { label: 'About', href: '/about' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@academypro.com',
                phone: '(415) 555-0198'
              },
              settings: {
                backgroundColor: '#0F0F0F',
                textColor: '#FFFDF5',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'academy-pro-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Elevate Your Craft',
                subheading: 'Academy Pro is redefining how the world\'s best teach online. Since 2019, we\'ve educated 500,000+ students globally.',
                ctaText: 'Explore Courses',
                ctaLink: '/courses',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                overlayOpacity: 0.4,
                padding: 'py-28'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'We believe that exceptional education shouldn\'t be limited by geography or circumstance. Academy Pro partners with the world\'s most influential professionals to create beautifully produced courses that teach tangible, in-demand skills. Every lesson is crafted with cinematic attention to detail, designed to inspire and educate simultaneously. Our students aren\'t just learning technical skills—they\'re learning how to think like leaders in their fields.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20'
              }
            },
            {
              id: 'stats-about',
              type: 'stats',
              order: 3,
              content: {
                stats: [
                  { value: '500K+', label: 'Active Students' },
                  { value: '150+', label: 'Expert Instructors' },
                  { value: '800+', label: 'Courses Available' },
                  { value: '98%', label: 'Student Satisfaction' }
                ]
              },
              settings: {
                backgroundColor: '#059669',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Academy Pro',
                tagline: 'Premium Online Education',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Courses', href: '/courses' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@academypro.com',
                phone: '(415) 555-0198'
              },
              settings: {
                backgroundColor: '#0F0F0F',
                textColor: '#FFFDF5',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'academy-pro-courses',
          name: 'Courses',
          slug: '/courses',
          blocks: [
            {
              id: 'hero-courses',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Curriculum',
                subheading: 'Carefully curated courses from world-renowned experts',
                ctaText: 'Browse All',
                ctaLink: '#all-courses',
                backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                overlayOpacity: 0.45,
                padding: 'py-24'
              }
            },
            {
              id: 'pricing-courses',
              type: 'pricing',
              order: 1,
              content: {
                heading: 'Flexible Learning Plans',
                plans: [
                  {
                    name: 'Single Course',
                    price: '$89',
                    features: [
                      'Lifetime course access',
                      'HD video quality',
                      'Community discussions',
                      'Certificate of completion'
                    ]
                  },
                  {
                    name: 'Annual Membership',
                    price: '$299',
                    features: [
                      'Unlimited course access',
                      '4K video quality',
                      'Priority support',
                      'Offline downloads',
                      'Certificates of completion'
                    ]
                  },
                  {
                    name: 'Premium Plus',
                    price: '$599',
                    features: [
                      'All Annual features',
                      'Direct instructor access',
                      'Personal guidance sessions',
                      'Advanced projects',
                      'Job placement assistance'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-courses',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Master Your Craft?',
                subheading: 'Start learning from the world\'s best today',
                ctaText: 'Enroll Now',
                ctaLink: '/courses'
              },
              settings: {
                backgroundColor: '#059669',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-courses',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Academy Pro',
                tagline: 'Premium Online Education',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@academypro.com',
                phone: '(415) 555-0198'
              },
              settings: {
                backgroundColor: '#0F0F0F',
                textColor: '#FFFDF5',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'academy-pro-faq',
          name: 'FAQ',
          slug: '/faq',
          blocks: [
            {
              id: 'hero-faq',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Frequently Asked Questions',
                subheading: 'Find answers to common questions about Academy Pro',
                ctaText: 'Contact Support',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                overlayOpacity: 0.4,
                padding: 'py-24'
              }
            },
            {
              id: 'faq-section',
              type: 'faq',
              order: 1,
              content: {
                heading: 'Common Questions',
                items: [
                  {
                    question: 'Do I get lifetime access to courses?',
                    answer: 'Yes, all Academy Pro courses include lifetime access once purchased. You can watch, rewatch, and download lessons whenever you want.'
                  },
                  {
                    question: 'What is the refund policy?',
                    answer: 'We offer a 30-day money-back guarantee on all course purchases. If you\'re not satisfied, we\'ll refund your entire purchase.'
                  },
                  {
                    question: 'Can I download courses for offline viewing?',
                    answer: 'Offline downloads are available with an Annual or Premium Plus membership. Individual course purchases include streaming only.'
                  },
                  {
                    question: 'Are certificates recognized by employers?',
                    answer: 'Academy Pro certificates are recognized by leading companies in design, technology, and creative industries. Share them on LinkedIn and resumes.'
                  },
                  {
                    question: 'How often are new courses added?',
                    answer: 'We release 3-4 new courses monthly with top instructors. Check back regularly for the latest offerings in your field.'
                  },
                  {
                    question: 'Is there student support?',
                    answer: 'All students have access to our community forums. Premium Plus members receive priority email support and direct instructor access.'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-faq',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Academy Pro',
                tagline: 'Premium Online Education',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Courses', href: '/courses' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@academypro.com',
                phone: '(415) 555-0198'
              },
              settings: {
                backgroundColor: '#0F0F0F',
                textColor: '#FFFDF5',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'academy-pro-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Have questions? We\'d love to hear from you',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                overlayOpacity: 0.4,
                padding: 'py-20'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Academy Pro',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFDF5',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Academy Pro',
                tagline: 'Premium Online Education',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Courses', href: '/courses' },
                  { label: 'About', href: '/about' },
                  { label: 'FAQ', href: '/faq' }
                ],
                email: 'support@academypro.com',
                phone: '(415) 555-0198'
              },
              settings: {
                backgroundColor: '#0F0F0F',
                textColor: '#FFFDF5',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  },

  // ============================================================================
  // EDUCATION & COURSES - Template B: LearnHub
  // ============================================================================
  {
    name: 'LearnHub',
    description: 'Modern edtech startup template with energetic design and youth-focused accessibility',
    industry_tags: ['education', 'edtech', 'online-learning', 'startups'],
    style_tags: ['modern', 'energetic', 'accessible', 'youth-focused'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'learnhub-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Learn Anything, Go Anywhere',
                subheading: 'Interactive courses in tech, creativity, and business. Join 200,000+ learners today.',
                ctaText: 'Start Free Trial',
                ctaLink: '/courses',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                overlayOpacity: 0.2,
                padding: 'py-32'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 1,
              content: {
                heading: 'Why Learn on LearnHub?',
                subheading: 'The most engaging platform for skill development',
                features: [
                  {
                    title: 'Interactive Learning',
                    description: 'Code live, create projects, get instant feedback from AI tutors',
                    icon: 'code'
                  },
                  {
                    title: 'Learn Your Way',
                    description: '5-minute lessons or deep dives—learn at your own pace',
                    icon: 'laptop'
                  },
                  {
                    title: 'Real Projects',
                    description: 'Build portfolio pieces you\'ll show to employers',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Community',
                    description: 'Learn alongside peers, share wins, get unstuck together',
                    icon: 'megaphone'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'stats-home',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '200K+', label: 'Active Learners' },
                  { value: '500+', label: 'Courses' },
                  { value: '4.9/5', label: 'Avg. Rating' },
                  { value: '85%', label: 'Career Growth' }
                ]
              },
              settings: {
                backgroundColor: '#4F46E5',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Level Up Your Skills?',
                subheading: 'Join thousands of learners pursuing their goals on LearnHub',
                ctaText: 'Start Learning Free',
                ctaLink: '/courses'
              },
              settings: {
                backgroundColor: '#10B981',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'LearnHub',
                tagline: 'Learn. Create. Grow.',
                links: [
                  { label: 'Courses', href: '/courses' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@learnhub.com',
                phone: '(510) 555-0143'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'learnhub-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Education for Everyone',
                subheading: 'We believe learning should be interactive, accessible, and fun. Founded in 2020, LearnHub is rethinking online education.',
                ctaText: 'Explore Courses',
                ctaLink: '/courses',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                overlayOpacity: 0.2,
                padding: 'py-28'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Story',
                text: 'LearnHub started with a simple observation: traditional online courses are passive and boring. We built LearnHub to make learning interactive, social, and actually fun. Today, over 200,000 learners use our platform to gain new skills in technology, design, business, and creative fields. Every course on LearnHub includes hands-on projects, interactive challenges, and a supportive community. We\'re not just teaching—we\'re helping people transform their careers and lives.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'team-about',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet Our Team',
                members: [
                  {
                    name: 'Alex Chen',
                    role: 'Founder & CEO',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Priya Patel',
                    role: 'VP Product',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Jordan Walsh',
                    role: 'Head of Curriculum',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'LearnHub',
                tagline: 'Learn. Create. Grow.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Courses', href: '/courses' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@learnhub.com',
                phone: '(510) 555-0143'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'learnhub-courses',
          name: 'Courses',
          slug: '/courses',
          blocks: [
            {
              id: 'hero-courses',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Browse All Courses',
                subheading: 'Find your next learning adventure',
                ctaText: 'Start Exploring',
                ctaLink: '#all-courses',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                overlayOpacity: 0.15,
                padding: 'py-24'
              }
            },
            {
              id: 'pricing-courses',
              type: 'pricing',
              order: 1,
              content: {
                heading: 'Flexible Plans for Every Learner',
                plans: [
                  {
                    name: 'Starter',
                    price: 'Free',
                    features: [
                      'Access to 50+ courses',
                      'Community access',
                      'Basic quizzes',
                      'Mobile app'
                    ]
                  },
                  {
                    name: 'Pro',
                    price: '$39/mo',
                    features: [
                      'All Starter features',
                      'Unlimited course access',
                      'Interactive projects',
                      'Certificates',
                      'Priority support'
                    ]
                  },
                  {
                    name: 'Team',
                    price: '$199/mo',
                    features: [
                      'All Pro features',
                      'Up to 10 team members',
                      'Admin dashboard',
                      'Progress tracking',
                      'Custom learning paths'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-courses',
              type: 'cta',
              order: 3,
              content: {
                heading: 'What Are You Waiting For?',
                subheading: 'Your next skill is just a click away',
                ctaText: 'Explore All Courses',
                ctaLink: '/courses'
              },
              settings: {
                backgroundColor: '#10B981',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-courses',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'LearnHub',
                tagline: 'Learn. Create. Grow.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@learnhub.com',
                phone: '(510) 555-0143'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'learnhub-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'We\'d love to help you get started',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                overlayOpacity: 0.15,
                padding: 'py-20'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact LearnHub',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'LearnHub',
                tagline: 'Learn. Create. Grow.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Courses', href: '/courses' },
                  { label: 'About', href: '/about' }
                ],
                email: 'hello@learnhub.com',
                phone: '(510) 555-0143'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  },

  // ============================================================================
  // SAAS & TECHNOLOGY - Template A: CloudStack
  // ============================================================================
  {
    name: 'CloudStack',
    description: 'Stripe-inspired gradient aesthetic SaaS template with technical sophistication',
    industry_tags: ['saas', 'technology', 'software', 'developer-tools'],
    style_tags: ['technical', 'gradient', 'sophisticated', 'enterprise'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'cloudstack-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Infrastructure Built for Scale',
                subheading: 'CloudStack powers the world\'s fastest-growing platforms. Deploy with confidence.',
                ctaText: 'Start Building',
                ctaLink: '/features',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                overlayOpacity: 0.6,
                padding: 'py-40',
                accentColor: '#06B6D4'
              }
            },
            {
              id: 'stats-home',
              type: 'stats',
              order: 1,
              content: {
                stats: [
                  { value: '99.99%', label: 'Uptime SLA' },
                  { value: '1.2M+', label: 'Deployments/Day' },
                  { value: '50ms', label: 'Avg Latency' },
                  { value: '10B+', label: 'Requests/Month' }
                ]
              },
              settings: {
                backgroundColor: '#0F1823',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 2,
              content: {
                heading: 'Built for Performance',
                subheading: 'Enterprise-grade infrastructure with developer simplicity',
                features: [
                  {
                    title: 'Global CDN',
                    description: 'Sub-50ms latency to users worldwide with intelligent routing',
                    icon: 'zap'
                  },
                  {
                    title: 'Auto-Scaling',
                    description: 'Handle traffic spikes automatically without configuration',
                    icon: 'chart'
                  },
                  {
                    title: 'API First',
                    description: 'RESTful and GraphQL APIs with comprehensive documentation',
                    icon: 'code'
                  },
                  {
                    title: 'Security',
                    description: 'SOC 2, HIPAA, and GDPR compliance built in from day one',
                    icon: 'shield'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'testimonials-home',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Trusted by Industry Leaders',
                testimonials: [
                  {
                    quote: 'CloudStack let us scale from 0 to 1M requests/day in 3 months. The reliability is unmatched.',
                    author: 'Elena Rodriguez',
                    role: 'CTO, StreamFlow Inc'
                  },
                  {
                    quote: 'We reduced infrastructure costs by 40% while improving performance. Highly recommended.',
                    author: 'David Park',
                    role: 'VP Engineering, DataSync'
                  },
                  {
                    quote: 'The API is so clean, our team was productive within hours. Best infrastructure decision we\'ve made.',
                    author: 'Sophia Zhang',
                    role: 'Engineering Lead, MetaLabs'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0F1823',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Accelerate?',
                subheading: 'Deploy your first application in minutes. No credit card required.',
                ctaText: 'Create Free Account',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#06B6D4',
                textColor: '#0A1628',
                padding: 'py-20',
                accentColor: '#3B82F6'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'CloudStack',
                tagline: 'Infrastructure for the Modern Web',
                links: [
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Docs', href: '#' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@cloudstack.io',
                phone: '(888) 555-0142'
              },
              settings: {
                backgroundColor: '#040D1A',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'cloudstack-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Infrastructure for the Modern Web',
                subheading: 'CloudStack is building the fastest, most reliable cloud infrastructure platform. Founded in 2018 by former Stripe and AWS engineers.',
                ctaText: 'View Our Mission',
                ctaLink: '#mission',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                overlayOpacity: 0.5,
                padding: 'py-28',
                accentColor: '#06B6D4'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'We believe developers shouldn\'t have to choose between simplicity and power. CloudStack was built by engineers who spent years at the biggest tech companies, frustrated by overly complex infrastructure tools. We\'re reimagining cloud infrastructure for a new generation—making it intuitive, fast, and reliable. Today, CloudStack powers applications serving billions of requests monthly, from early-stage startups to Fortune 500 companies.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'stats-about',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '2.5K+', label: 'Companies Using CloudStack' },
                  { value: '6 Years', label: 'in Business' },
                  { value: '$85M', label: 'Series B Funding' },
                  { value: '500+', label: 'Team Members' }
                ]
              },
              settings: {
                backgroundColor: '#06B6D4',
                textColor: '#0A1628',
                padding: 'py-16'
              }
            },
            {
              id: 'cta-about',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Start Building Today',
                subheading: 'Join thousands of companies using CloudStack',
                ctaText: 'Get Started Free',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#3B82F6',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'CloudStack',
                tagline: 'Infrastructure for the Modern Web',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@cloudstack.io',
                phone: '(888) 555-0142'
              },
              settings: {
                backgroundColor: '#040D1A',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'cloudstack-features',
          name: 'Features',
          slug: '/features',
          blocks: [
            {
              id: 'hero-features',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Everything You Need',
                subheading: 'Comprehensive features for scaling from prototype to production',
                ctaText: 'Start Free',
                ctaLink: '/pricing',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                overlayOpacity: 0.5,
                padding: 'py-24',
                accentColor: '#06B6D4'
              }
            },
            {
              id: 'features-list',
              type: 'features',
              order: 1,
              content: {
                heading: 'Core Platform',
                subheading: 'Enterprise infrastructure, developer experience',
                features: [
                  {
                    title: 'Compute',
                    description: 'Containerized workloads with automatic scaling and orchestration',
                    icon: 'laptop'
                  },
                  {
                    title: 'Databases',
                    description: 'Managed PostgreSQL, MySQL, and Redis with automatic backups',
                    icon: 'monitor'
                  },
                  {
                    title: 'Storage',
                    description: 'S3-compatible object storage with unlimited scalability',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Networking',
                    description: 'DDoS protection, WAF, and private networking out of the box',
                    icon: 'zap'
                  },
                  {
                    title: 'Observability',
                    description: 'Real-time logs, metrics, and tracing for all your applications',
                    icon: 'chart'
                  },
                  {
                    title: 'CI/CD',
                    description: 'Built-in deployment pipelines with GitHub/GitLab integration',
                    icon: 'code'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-features',
              type: 'cta',
              order: 3,
              content: {
                heading: 'See CloudStack In Action',
                subheading: 'Explore our interactive demo or create a free account',
                ctaText: 'Start Free Trial',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#06B6D4',
                textColor: '#0A1628',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-features',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'CloudStack',
                tagline: 'Infrastructure for the Modern Web',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@cloudstack.io',
                phone: '(888) 555-0142'
              },
              settings: {
                backgroundColor: '#040D1A',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'cloudstack-pricing',
          name: 'Pricing',
          slug: '/pricing',
          blocks: [
            {
              id: 'hero-pricing',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Simple, Transparent Pricing',
                subheading: 'Pay only for what you use. No hidden fees.',
                ctaText: 'View Plans',
                ctaLink: '#pricing-section',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                overlayOpacity: 0.5,
                padding: 'py-24',
                accentColor: '#06B6D4'
              }
            },
            {
              id: 'pricing-section',
              type: 'pricing',
              order: 1,
              content: {
                heading: 'Choose Your Plan',
                plans: [
                  {
                    name: 'Starter',
                    price: 'Free',
                    features: [
                      '1 project',
                      '1 GB storage',
                      '10K requests/day',
                      'Community support',
                      'Demo databases'
                    ]
                  },
                  {
                    name: 'Professional',
                    price: '$99/mo',
                    features: [
                      'Unlimited projects',
                      '100 GB storage',
                      'Unlimited requests',
                      'Email support',
                      'Production databases',
                      'Custom domains'
                    ]
                  },
                  {
                    name: 'Enterprise',
                    price: 'Custom',
                    features: [
                      'Everything in Professional',
                      'Dedicated support',
                      'Custom infrastructure',
                      'SLA guarantee',
                      'Advanced security',
                      'Compliance assistance'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#0F1823',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-pricing',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Deploy?',
                subheading: 'Start with our free plan. Scale as you grow.',
                ctaText: 'Create Account',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#06B6D4',
                textColor: '#0A1628',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-pricing',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'CloudStack',
                tagline: 'Infrastructure for the Modern Web',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Features', href: '/features' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@cloudstack.io',
                phone: '(888) 555-0142'
              },
              settings: {
                backgroundColor: '#040D1A',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'cloudstack-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Questions? Our team is here to help.',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A1628',
                textColor: '#FFFFFF',
                overlayOpacity: 0.5,
                padding: 'py-20',
                accentColor: '#06B6D4'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact CloudStack',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#0F1823',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'CloudStack',
                tagline: 'Infrastructure for the Modern Web',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'About', href: '/about' }
                ],
                email: 'support@cloudstack.io',
                phone: '(888) 555-0142'
              },
              settings: {
                backgroundColor: '#040D1A',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  },

  // ============================================================================
  // SAAS & TECHNOLOGY - Template B: AppForge
  // ============================================================================
  {
    name: 'AppForge',
    description: 'Light-mode SaaS template with fresh design and startup-friendly appeal',
    industry_tags: ['saas', 'technology', 'startups', 'productivity'],
    style_tags: ['fresh', 'light', 'modern', 'startup'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'appforge-home',
          slug: '/',
          name: 'Home',
          blocks: [
            {
              id: 'hero-home',
              type: 'hero',
              order: 1,
              content: {
                heading: 'Build Faster, Ship Smarter',
                subheading: 'AppForge is the no-code platform for building production-ready applications in days, not months.',
                ctaText: 'Start Free',
                ctaLink: '/pricing',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                overlayOpacity: 0.15,
                padding: 'py-32'
              }
            },
            {
              id: 'features-home',
              type: 'features',
              order: 2,
              content: {
                heading: 'Everything You Need to Build',
                subheading: 'Powerful tools designed for modern app development',
                features: [
                  {
                    title: 'Visual Builder',
                    description: 'Drag-and-drop interface with powerful customization options',
                    icon: 'layout'
                  },
                  {
                    title: 'Smart Workflows',
                    description: 'Automate business logic without a single line of code',
                    icon: 'zap'
                  },
                  {
                    title: 'Integrations',
                    description: 'Connect to 1000+ tools and APIs seamlessly',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Collaboration',
                    description: 'Real-time teamwork with version control built-in',
                    icon: 'megaphone'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'stats-home',
              type: 'stats',
              order: 3,
              content: {
                stats: [
                  { value: '50K+', label: 'Creators Using AppForge' },
                  { value: '500M+', label: 'App Executions/Month' },
                  { value: '4.9/5', label: 'Customer Rating' },
                  { value: '3 Days', label: 'Avg Build Time' }
                ]
              },
              settings: {
                backgroundColor: '#4F46E5',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'testimonials-home',
              type: 'testimonials',
              order: 4,
              content: {
                heading: 'Trusted by Innovative Teams',
                testimonials: [
                  {
                    quote: 'AppForge cut our development time in half. We deployed a complex CRM in 2 weeks instead of 3 months.',
                    author: 'Casey Williams',
                    role: 'Product Manager, TechVenture'
                  },
                  {
                    quote: 'Finally, a no-code platform that doesn\'t feel like a toy. The customization possibilities are endless.',
                    author: 'Amelia Rodriguez',
                    role: 'Founder, DataFlow Solutions'
                  },
                  {
                    quote: 'Our entire team loves AppForge. No more waiting for engineers to build tools. We do it ourselves.',
                    author: 'Marcus Thompson',
                    role: 'Operations Lead, Grow Media'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-home',
              type: 'cta',
              order: 5,
              content: {
                heading: 'Ready to Build Your Next App?',
                subheading: 'Join thousands of creators building apps on AppForge',
                ctaText: 'Get Started Free',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#10B981',
                textColor: '#FFFFFF',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-home',
              type: 'footer',
              order: 6,
              content: {
                companyName: 'AppForge',
                tagline: 'The No-Code Platform for Creators',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@appforge.app',
                phone: '(650) 555-0167'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'appforge-about',
          slug: '/about',
          name: 'About',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 1,
              content: {
                heading: 'Empowering Creators Everywhere',
                subheading: 'AppForge is on a mission to democratize software development. Since 2021, we\'ve helped 50,000+ people build production apps without code.',
                ctaText: 'Explore',
                ctaLink: '/pricing',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                overlayOpacity: 0.1,
                padding: 'py-28'
              }
            },
            {
              id: 'about-section',
              type: 'about',
              order: 2,
              content: {
                heading: 'Our Vision',
                text: 'The traditional software development process is broken. Talented non-technical professionals spend months waiting for engineers while simple tools take weeks to build. AppForge reimagines this reality. We\'ve built a platform that puts creation in the hands of those with the best ideas. Whether you\'re a product manager, designer, or business analyst, AppForge lets you build, test, and deploy production applications at startup speed. No coding knowledge required.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'team-about',
              type: 'team',
              order: 3,
              content: {
                heading: 'Built by Builders',
                members: [
                  {
                    name: 'Sofia Gonzalez',
                    role: 'Co-Founder & CEO',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Raj Patel',
                    role: 'Co-Founder & CTO',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Nina Chen',
                    role: 'VP Product',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'AppForge',
                tagline: 'The No-Code Platform for Creators',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@appforge.app',
                phone: '(650) 555-0167'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'appforge-pricing',
          slug: '/pricing',
          name: 'Pricing',
          blocks: [
            {
              id: 'hero-pricing',
              type: 'hero',
              order: 1,
              content: {
                heading: 'Pricing Built for Growth',
                subheading: 'Start free. Scale as you grow. Pay only for what you use.',
                ctaText: 'Choose Plan',
                ctaLink: '#pricing-plans',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                overlayOpacity: 0.1,
                padding: 'py-24'
              }
            },
            {
              id: 'pricing-plans',
              type: 'pricing',
              order: 2,
              content: {
                heading: 'Flexible Plans for Every Team',
                plans: [
                  {
                    name: 'Creator',
                    price: 'Free',
                    features: [
                      '1 personal workspace',
                      'Up to 5 apps',
                      'Basic integrations',
                      'Community support',
                      '10K app executions/month'
                    ]
                  },
                  {
                    name: 'Team',
                    price: '$99/mo',
                    features: [
                      'Unlimited apps',
                      'Team collaboration',
                      '500+ integrations',
                      'Priority email support',
                      '1M app executions/month',
                      'Custom branding'
                    ]
                  },
                  {
                    name: 'Enterprise',
                    price: 'Custom',
                    features: [
                      'Everything in Team',
                      'Dedicated account manager',
                      'Advanced security',
                      'Custom workflows',
                      'Unlimited executions',
                      'SLA guarantee'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'cta-pricing',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Start Building Today',
                subheading: 'No credit card required. Upgrade anytime.',
                ctaText: 'Sign Up Free',
                ctaLink: '/pricing'
              },
              settings: {
                backgroundColor: '#10B981',
                textColor: '#FFFFFF',
                padding: 'py-16'
              }
            },
            {
              id: 'footer-pricing',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'AppForge',
                tagline: 'The No-Code Platform for Creators',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@appforge.app',
                phone: '(650) 555-0167'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        },
        {
          id: 'appforge-contact',
          slug: '/contact',
          name: 'Contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 1,
              content: {
                heading: 'Let\'s Chat',
                subheading: 'Have questions? Our team is excited to help.',
                ctaText: 'Contact',
                ctaLink: '#contact-form',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FAFAFA',
                textColor: '#1F2937',
                overlayOpacity: 0.1,
                padding: 'py-20'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 2,
              content: {
                heading: 'Get In Touch',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'py-20'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'AppForge',
                tagline: 'The No-Code Platform for Creators',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Pricing', href: '/pricing' }
                ],
                email: 'hello@appforge.app',
                phone: '(650) 555-0167'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'py-12'
              }
            }
          ]
        }
      ]
    }
  }
];
