import type { TemplateData } from '@/types';

export const batch1Templates: Array<{
  name: string;
  description: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  template_data: TemplateData;
}> = [
  // ============================================
  // PROFESSIONAL SERVICES: Executive Consulting
  // ============================================
  {
    name: 'Executive Consulting',
    description: 'Luxury minimal professional services template inspired by top-tier consulting firms. Warm, sophisticated palette with gold accents.',
    industry_tags: ['consulting', 'professional services', 'executive'],
    style_tags: ['minimal', 'luxury', 'warm', 'corporate'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'ec-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'ec-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Strategic Guidance for Enterprise Leaders',
                subheading: 'Transform your organization with bespoke consulting solutions crafted for complex challenges.',
                ctaText: 'Schedule Consultation',
                ctaLink: '#contact',
                backgroundImage: 'linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%)',
              },
              settings: {
                backgroundColor: '#FAFAF8',
                textColor: '#2D2D2D',
                padding: '120px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-features-1',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Expertise',
                subheading: 'Decades of experience across industries',
                features: [
                  {
                    title: 'Digital Transformation',
                    description: 'Architect and execute enterprise-scale digital initiatives with measurable impact.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Organizational Strategy',
                    description: 'Realign operations and culture to drive sustainable competitive advantage.',
                    icon: 'chart',
                  },
                  {
                    title: 'Risk & Compliance',
                    description: 'Navigate regulatory complexity while optimizing for growth and efficiency.',
                    icon: 'shield',
                  },
                  {
                    title: 'Market Expansion',
                    description: 'Identify and execute high-potential market opportunities with precision.',
                    icon: 'target',
                  },
                  {
                    title: 'Operational Excellence',
                    description: 'Streamline processes and maximize returns through systematic improvement.',
                    icon: 'zap',
                  },
                  {
                    title: 'C-Suite Advisory',
                    description: 'Partner with leadership to solve strategic challenges and unlock value.',
                    icon: 'briefcase',
                  },
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D2D2D',
                padding: '96px 0',
                accentColor: '#C4A265',
                variant: 'featured',
              },
            },
            {
              id: 'ec-stats',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '150+', label: 'Client Engagements' },
                  { value: '$2.3B', label: 'Value Created' },
                  { value: '25+', label: 'Years of Excellence' },
                  { value: '94%', label: 'Client Retention Rate' },
                ],
              },
              settings: {
                backgroundColor: '#2D2D2D',
                textColor: '#FAFAF8',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-testimonials',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'What Leaders Say',
                testimonials: [
                  {
                    quote: 'Their strategic insights fundamentally reshaped how we approach market expansion. The ROI was immediate and substantial.',
                    author: 'Jennifer Walsh',
                    role: 'Chief Strategy Officer, Fortune 500 Retail',
                  },
                  {
                    quote: 'Working with their team elevated our organization from good to exceptional. Their pragmatic approach to complex problems is unmatched.',
                    author: 'Marcus Chen',
                    role: 'President, Global Technology Services',
                  },
                  {
                    quote: 'They brought both rigor and creativity to our transformation initiative. The results exceeded our expectations by 40%.',
                    author: 'Sofia Bergström',
                    role: 'CEO, Nordic Financial Group',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F3F0',
                textColor: '#2D2D2D',
                padding: '96px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-cta',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Transform Your Organization?',
                subheading: 'Let us partner with you to unlock new levels of performance.',
                ctaText: 'Start Your Journey',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#2D2D2D',
                textColor: '#FAFAF8',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-footer',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Executive Consulting',
                tagline: 'Strategic guidance for enterprise leaders.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Team', href: '#team' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@executiveconsulting.com',
                phone: '+1 (555) 123-4567',
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FAFAF8',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ec-services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'ec-services-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Comprehensive solutions tailored to your most complex challenges',
                ctaText: 'Explore',
                ctaLink: '#details',
                backgroundImage: 'linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%)',
              },
              settings: {
                backgroundColor: '#FAFAF8',
                textColor: '#2D2D2D',
                padding: '100px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-services-detail-1',
              type: 'text',
              order: 1,
              content: {
                heading: 'Digital Transformation Services',
                text: 'We architect and execute enterprise-scale digital initiatives that fundamentally reshape how your organization operates. From legacy modernization to cloud migration, we deliver measurable business impact.',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-services-detail-2',
              type: 'text',
              order: 2,
              content: {
                heading: 'Organizational Strategy',
                text: 'Strategic transformation requires more than a plan—it demands disciplined execution and cultural alignment. We guide you through organizational redesign, capability building, and leadership development to ensure lasting change.',
              },
              settings: {
                backgroundColor: '#F5F3F0',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-services-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Executive Consulting',
                tagline: 'Strategic guidance for enterprise leaders.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@executiveconsulting.com',
                phone: '+1 (555) 123-4567',
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FAFAF8',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ec-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'ec-about-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Executive Consulting',
                subheading: 'Trusted advisors to the world\'s most ambitious leaders',
                ctaText: 'Learn More',
                ctaLink: '#details',
                backgroundImage: 'linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%)',
              },
              settings: {
                backgroundColor: '#FAFAF8',
                textColor: '#2D2D2D',
                padding: '100px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-about-content',
              type: 'about',
              order: 1,
              content: {
                heading: 'Founded on Excellence',
                text: 'Since our founding 25 years ago, we\'ve partnered with leading organizations to solve their most critical challenges. Our approach combines deep industry expertise with a commitment to pragmatic, results-driven solutions.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-about-team',
              type: 'team',
              order: 2,
              content: {
                heading: 'Our Leadership',
                members: [
                  {
                    name: 'Robert Harrison',
                    role: 'Chief Executive Officer',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Eleanor Price',
                    role: 'Chief Strategy Officer',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'David Kumar',
                    role: 'Chief Operating Officer',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F3F0',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-about-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Executive Consulting',
                tagline: 'Strategic guidance for enterprise leaders.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@executiveconsulting.com',
                phone: '+1 (555) 123-4567',
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FAFAF8',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ec-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'ec-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get in Touch',
                subheading: 'Schedule a consultation with our team',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%)',
              },
              settings: {
                backgroundColor: '#FAFAF8',
                textColor: '#2D2D2D',
                padding: '100px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Schedule Your Consultation',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Schedule Consultation',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-contact-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Executive Consulting',
                tagline: 'Strategic guidance for enterprise leaders.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@executiveconsulting.com',
                phone: '+1 (555) 123-4567',
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FAFAF8',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ec-insights',
          name: 'Insights',
          slug: '/insights',
          blocks: [
            {
              id: 'ec-insights-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Strategic Insights',
                subheading: 'Thought leadership and industry perspectives',
                ctaText: 'Explore',
                ctaLink: '#articles',
                backgroundImage: 'linear-gradient(135deg, #FAFAF8 0%, #F5F3F0 100%)',
              },
              settings: {
                backgroundColor: '#FAFAF8',
                textColor: '#2D2D2D',
                padding: '100px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-insights-featured',
              type: 'text',
              order: 1,
              content: {
                heading: 'Featured Insights',
                text: 'Discover our latest research, case studies, and perspectives on the trends shaping enterprise strategy. From digital transformation to market dynamics, our insights are grounded in real-world experience and data-driven analysis.',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D2D2D',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-insights-cta',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Subscribe to Our Research',
                subheading: 'Stay informed on the latest strategic trends.',
                ctaText: 'Subscribe Now',
                ctaLink: '#subscribe',
              },
              settings: {
                backgroundColor: '#2D2D2D',
                textColor: '#FAFAF8',
                padding: '80px 0',
                accentColor: '#C4A265',
              },
            },
            {
              id: 'ec-insights-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Executive Consulting',
                tagline: 'Strategic guidance for enterprise leaders.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@executiveconsulting.com',
                phone: '+1 (555) 123-4567',
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FAFAF8',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },

  // ==========================================
  // PROFESSIONAL SERVICES: Modern Advisors
  // ==========================================
  {
    name: 'Modern Advisors',
    description: 'Ultra-clean Swiss design with pure black and white palette and electric blue accents. Pentagram-inspired minimalism.',
    industry_tags: ['consulting', 'professional services', 'advisory'],
    style_tags: ['swiss', 'minimal', 'modern', 'clean'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'ma-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'ma-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Strategy Without Compromise',
                subheading: 'Precision advisory for the modern enterprise.',
                ctaText: 'Consult',
                ctaLink: '#contact',
                backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #f8f8f8 100%)',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '140px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-features',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Do',
                subheading: 'Four core practices driving measurable outcomes.',
                features: [
                  {
                    title: 'Strategy',
                    description: 'Clear direction for complex markets and transformations.',
                    icon: 'target',
                  },
                  {
                    title: 'Operations',
                    description: 'Efficiency and excellence through systematic optimization.',
                    icon: 'chart',
                  },
                  {
                    title: 'Technology',
                    description: 'Digital capabilities that become competitive advantages.',
                    icon: 'code',
                  },
                  {
                    title: 'Transformation',
                    description: 'Change management that sticks. Culture, process, systems.',
                    icon: 'zap',
                  },
                ],
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
                padding: '100px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-about',
              type: 'about',
              order: 2,
              content: {
                heading: 'Why Modern Advisors',
                text: 'We partner with leaders who refuse compromise. Our approach is rooted in analytical rigor, strategic clarity, and a deep commitment to execution. We don\'t advise from the sidelines—we roll up our sleeves and drive results.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '100px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-cta',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Let\'s Talk Strategy',
                subheading: 'Schedule a conversation with our team.',
                ctaText: 'Get in Touch',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
                padding: '100px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-footer',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Modern Advisors',
                tagline: 'Precision advisory for the modern enterprise.',
                links: [
                  { label: 'Practices', href: '#practices' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                  { label: 'Careers', href: '#careers' },
                ],
                email: 'hello@modernadvisors.com',
                phone: '+1 (555) 234-5678',
              },
              settings: {
                backgroundColor: '#0a0a0a',
                textColor: '#ffffff',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ma-practices',
          name: 'Practices',
          slug: '/practices',
          blocks: [
            {
              id: 'ma-practices-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Practices',
                subheading: 'Four disciplines. One outcome: transformation.',
                ctaText: 'Learn More',
                ctaLink: '#details',
                backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #f8f8f8 100%)',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '120px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-practices-strategy',
              type: 'text',
              order: 1,
              content: {
                heading: 'Strategy Practice',
                text: 'We help leaders define winning strategies in complex, dynamic markets. Through rigorous analysis and strategic clarity, we chart the course for growth, transformation, and competitive advantage.',
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
                padding: '80px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-practices-ops',
              type: 'text',
              order: 2,
              content: {
                heading: 'Operations Practice',
                text: 'Excellence in execution requires more than plans. We redesign operations, optimize processes, and build capabilities that deliver sustained competitive advantage.',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '80px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-practices-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Modern Advisors',
                tagline: 'Precision advisory for the modern enterprise.',
                links: [
                  { label: 'Practices', href: '#practices' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@modernadvisors.com',
                phone: '+1 (555) 234-5678',
              },
              settings: {
                backgroundColor: '#0a0a0a',
                textColor: '#ffffff',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ma-team',
          name: 'Team',
          slug: '/team',
          blocks: [
            {
              id: 'ma-team-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Team',
                subheading: 'Leading practitioners from business, technology, and industry.',
                ctaText: 'Meet Us',
                ctaLink: '#team',
                backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #f8f8f8 100%)',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '120px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-team-members',
              type: 'team',
              order: 1,
              content: {
                heading: 'Leadership',
                members: [
                  {
                    name: 'Thomas Wright',
                    role: 'Founder & CEO',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Victoria Stewart',
                    role: 'Chief Strategy Officer',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Michael Grant',
                    role: 'Chief Operations Officer',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Elena Rodriguez',
                    role: 'Practice Lead, Digital',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
                padding: '100px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-team-cta',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Join Our Team',
                subheading: 'We\'re always looking for exceptional practitioners.',
                ctaText: 'View Careers',
                ctaLink: '#careers',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '80px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-team-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Modern Advisors',
                tagline: 'Precision advisory for the modern enterprise.',
                links: [
                  { label: 'Practices', href: '#practices' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@modernadvisors.com',
                phone: '+1 (555) 234-5678',
              },
              settings: {
                backgroundColor: '#0a0a0a',
                textColor: '#ffffff',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ma-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'ma-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Let\'s Work Together',
                subheading: 'Get in touch to discuss your strategy.',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #f8f8f8 100%)',
              },
              settings: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
                padding: '120px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Send Us a Message',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message',
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
                padding: '100px 0',
                accentColor: '#2563EB',
              },
            },
            {
              id: 'ma-contact-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Modern Advisors',
                tagline: 'Precision advisory for the modern enterprise.',
                links: [
                  { label: 'Practices', href: '#practices' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@modernadvisors.com',
                phone: '+1 (555) 234-5678',
              },
              settings: {
                backgroundColor: '#0a0a0a',
                textColor: '#ffffff',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },

  // ======================================
  // CREATIVE AGENCY: Studio Collective
  // ======================================
  {
    name: 'Studio Collective',
    description: 'Bold, high-energy creative agency template. Deep purple with neon green accent. Award-winning studio aesthetic.',
    industry_tags: ['creative', 'agency', 'design', 'art direction'],
    style_tags: ['bold', 'experimental', 'high-energy', 'luxury'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'sc-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'sc-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Where Bold Ideas Meet Craft',
                subheading: 'Award-winning design and creative direction for brands that refuse to blend in.',
                ctaText: 'View Work',
                ctaLink: '#portfolio',
                backgroundImage: 'linear-gradient(135deg, #1E0A3C 0%, #2D1B5E 100%)',
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '140px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-features',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Disciplines',
                subheading: 'Integrated creative excellence across all mediums',
                features: [
                  {
                    title: 'Brand Strategy',
                    description: 'Define the strategic narrative that powers every design decision and market interaction.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Visual Identity',
                    description: 'Craft distinctive brand systems that command attention and endure over time.',
                    icon: 'palette',
                  },
                  {
                    title: 'Digital Design',
                    description: 'Experience design that balances aesthetics with intuitive, human-centered interaction.',
                    icon: 'monitor',
                  },
                  {
                    title: 'Art Direction',
                    description: 'Visionary creative direction that elevates campaigns and storytelling to art.',
                    icon: 'camera',
                  },
                  {
                    title: 'Motion & Video',
                    description: 'Cinematic motion design that brings brand narratives to life with impact.',
                    icon: 'zap',
                  },
                  {
                    title: 'Environmental Design',
                    description: 'Physical and spatial design that creates memorable brand experiences.',
                    icon: 'layout',
                  },
                ],
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
                variant: 'featured',
              },
            },
            {
              id: 'sc-testimonials',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'What Our Partners Say',
                testimonials: [
                  {
                    quote: 'They didn\'t just design for us—they reimagined our entire brand. The work is fearless and thoughtful.',
                    author: 'Alexandra Kim',
                    role: 'CMO, Innovative Tech Startup',
                  },
                  {
                    quote: 'Every project is a masterclass in creative excellence. They elevate everything they touch.',
                    author: 'James Reeves',
                    role: 'Founder, Luxury Lifestyle Brand',
                  },
                  {
                    quote: 'Studio Collective brings together strategic thinking and artistic vision in a way that\'s truly rare.',
                    author: 'Maria Santos',
                    role: 'Creative Director, Global Fashion House',
                  },
                ],
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-cta',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Let\'s Create Something Extraordinary',
                subheading: 'Bring your boldest vision to life with our team.',
                ctaText: 'Start a Project',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-footer',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Studio Collective',
                tagline: 'Award-winning design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@studiocollective.co',
                phone: '+1 (555) 345-6789',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'sc-portfolio',
          name: 'Portfolio',
          slug: '/portfolio',
          blocks: [
            {
              id: 'sc-portfolio-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Work',
                subheading: 'Bold, strategic design that drives results',
                ctaText: 'Explore',
                ctaLink: '#projects',
                backgroundImage: 'linear-gradient(135deg, #1E0A3C 0%, #2D1B5E 100%)',
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '120px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-portfolio-gallery',
              type: 'gallery',
              order: 1,
              content: {
                heading: 'Featured Projects',
                images: [
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1579012-e4f520f7e2f5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
                ],
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-portfolio-cta',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Ready to Create Together?',
                subheading: 'Let\'s build something bold and unforgettable.',
                ctaText: 'Start a Conversation',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-portfolio-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Studio Collective',
                tagline: 'Award-winning design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@studiocollective.co',
                phone: '+1 (555) 345-6789',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'sc-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'sc-about-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Studio Collective',
                subheading: 'Pioneering bold creative solutions since 2008',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'linear-gradient(135deg, #1E0A3C 0%, #2D1B5E 100%)',
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '120px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-about-content',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Story',
                text: 'Founded by a collective of award-winning designers and creative directors, Studio Collective has spent 16 years pushing the boundaries of what\'s possible in design. We believe in bold ideas, meticulous craft, and the transformative power of great design.',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-about-team',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet the Team',
                members: [
                  {
                    name: 'Isabella Monroe',
                    role: 'Creative Director & Founder',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Adrian Chen',
                    role: 'Chief Design Officer',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Sophia De Leon',
                    role: 'Strategy & Brand Lead',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-about-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Studio Collective',
                tagline: 'Award-winning design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@studiocollective.co',
                phone: '+1 (555) 345-6789',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'sc-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'sc-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Let\'s Connect',
                subheading: 'Ready to bring your vision to life?',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(135deg, #1E0A3C 0%, #2D1B5E 100%)',
              },
              settings: {
                backgroundColor: '#1E0A3C',
                textColor: '#FFFFFF',
                padding: '120px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Start Your Project',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Inquiry',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#39FF14',
              },
            },
            {
              id: 'sc-contact-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Studio Collective',
                tagline: 'Award-winning design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@studiocollective.co',
                phone: '+1 (555) 345-6789',
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },

  // ====================================
  // CREATIVE AGENCY: Design House
  // ====================================
  {
    name: 'Design House',
    description: 'Warm cream palette with terracotta accent. Editorial, sophisticated, print-inspired layout for design-forward agencies.',
    industry_tags: ['creative', 'design', 'agency', 'editorial'],
    style_tags: ['editorial', 'warm', 'sophisticated', 'print-inspired'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'dh-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'dh-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Design That Tells a Story',
                subheading: 'Thoughtful creative direction for brands with a distinctive point of view.',
                ctaText: 'Explore Our Work',
                ctaLink: '#portfolio',
                backgroundImage: 'linear-gradient(135deg, #FBF8F3 0%, #F5F1E8 100%)',
              },
              settings: {
                backgroundColor: '#FBF8F3',
                textColor: '#2D1F1A',
                padding: '140px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-features',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Craft',
                subheading: 'Integrated design services rooted in strategy and storytelling',
                features: [
                  {
                    title: 'Brand Identity',
                    description: 'Comprehensive visual systems that reflect your brand\'s essence and values.',
                    icon: 'palette',
                  },
                  {
                    title: 'Editorial Design',
                    description: 'Publications and content design that captivate and communicate with precision.',
                    icon: 'layout',
                  },
                  {
                    title: 'Web & Digital',
                    description: 'Digital experiences that marry beauty with functionality and purpose.',
                    icon: 'monitor',
                  },
                  {
                    title: 'Packaging Design',
                    description: 'Physical design that transforms products into premium brand expressions.',
                    icon: 'camera',
                  },
                  {
                    title: 'Brand Strategy',
                    description: 'Strategic thinking that informs every design decision and direction.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Creative Direction',
                    description: 'Visionary guidance that elevates campaigns and brand storytelling.',
                    icon: 'zap',
                  },
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
                variant: 'featured',
              },
            },
            {
              id: 'dh-about',
              type: 'about',
              order: 2,
              content: {
                heading: 'The Design House Story',
                text: 'We believe design is a conversation between form and meaning. For over a decade, we\'ve partnered with ambitious brands to create visual identities and experiences that resonate, endure, and inspire. Our approach is rooted in research, refined through craft, and grounded in strategy.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#F5F1E8',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-testimonials',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Client Stories',
                testimonials: [
                  {
                    quote: 'Design House elevated our brand from good to unforgettable. Their attention to detail and strategic thinking is exceptional.',
                    author: 'Rebecca Foster',
                    role: 'Founder, Artisan Coffee Co.',
                  },
                  {
                    quote: 'Working with their team was transformative. They understood our vision and made it better than we could have imagined.',
                    author: 'Lucas Moreno',
                    role: 'Creative Director, Editorial Publishing',
                  },
                  {
                    quote: 'Every project is a masterclass in thoughtful design. They care deeply about the work and it shows.',
                    author: 'Catherine Wu',
                    role: 'Brand Manager, Luxury Goods',
                  },
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-cta',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Tell Your Story?',
                subheading: 'Let\'s create something meaningful together.',
                ctaText: 'Get In Touch',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#2D1F1A',
                textColor: '#FBF8F3',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-footer',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Design House',
                tagline: 'Thoughtful design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@designhouse.studio',
                phone: '+1 (555) 456-7890',
              },
              settings: {
                backgroundColor: '#1A1410',
                textColor: '#FBF8F3',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'dh-portfolio',
          name: 'Portfolio',
          slug: '/portfolio',
          blocks: [
            {
              id: 'dh-portfolio-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Portfolio',
                subheading: 'A selection of projects we\'re proud to share',
                ctaText: 'Browse',
                ctaLink: '#projects',
                backgroundImage: 'linear-gradient(135deg, #FBF8F3 0%, #F5F1E8 100%)',
              },
              settings: {
                backgroundColor: '#FBF8F3',
                textColor: '#2D1F1A',
                padding: '120px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-portfolio-gallery',
              type: 'gallery',
              order: 1,
              content: {
                heading: 'Selected Work',
                images: [
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1579012-e4f520f7e2f5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1579012-e4f520f7e2f5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-portfolio-cta',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Let\'s Create Together',
                subheading: 'Partner with us to craft something remarkable.',
                ctaText: 'Start a Project',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#F5F1E8',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-portfolio-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Design House',
                tagline: 'Thoughtful design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@designhouse.studio',
                phone: '+1 (555) 456-7890',
              },
              settings: {
                backgroundColor: '#1A1410',
                textColor: '#FBF8F3',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'dh-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'dh-about-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Design House',
                subheading: 'Dedicated to craftsmanship and meaningful design',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'linear-gradient(135deg, #FBF8F3 0%, #F5F1E8 100%)',
              },
              settings: {
                backgroundColor: '#FBF8F3',
                textColor: '#2D1F1A',
                padding: '120px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-about-content',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'We create brands and experiences that matter. Through strategic thinking, meticulous craft, and a deep commitment to understanding our clients, we help organizations communicate their unique value and build lasting connections with their audiences.',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-about-team',
              type: 'team',
              order: 2,
              content: {
                heading: 'Our Team',
                members: [
                  {
                    name: 'Christopher Hayes',
                    role: 'Creative Director & Founder',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Amelia Zhang',
                    role: 'Design Director',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Oliver Nolan',
                    role: 'Brand Strategist',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F1E8',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-about-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Design House',
                tagline: 'Thoughtful design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@designhouse.studio',
                phone: '+1 (555) 456-7890',
              },
              settings: {
                backgroundColor: '#1A1410',
                textColor: '#FBF8F3',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'dh-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'dh-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'We\'d love to hear about your project.',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(135deg, #FBF8F3 0%, #F5F1E8 100%)',
              },
              settings: {
                backgroundColor: '#FBF8F3',
                textColor: '#2D1F1A',
                padding: '120px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Let\'s Talk',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D1F1A',
                padding: '100px 0',
                accentColor: '#C2491D',
              },
            },
            {
              id: 'dh-contact-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Design House',
                tagline: 'Thoughtful design and creative direction.',
                links: [
                  { label: 'Work', href: '#portfolio' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@designhouse.studio',
                phone: '+1 (555) 456-7890',
              },
              settings: {
                backgroundColor: '#1A1410',
                textColor: '#FBF8F3',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },

  // ================================
  // HEALTH & WELLNESS: Serenity Clinic
  // ================================
  {
    name: 'Serenity Clinic',
    description: 'Spa-like wellness template with soft sage background, deep teal text, and warm rose accent. Canyon Ranch-inspired serenity.',
    industry_tags: ['wellness', 'health', 'spa', 'medical'],
    style_tags: ['serene', 'spa-like', 'calm', 'natural'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'ser-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'ser-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Holistic Wellness for Mind, Body & Spirit',
                subheading: 'Transform your health through personalized, integrated wellness programs.',
                ctaText: 'Begin Your Journey',
                ctaLink: '#contact',
                backgroundImage: 'linear-gradient(135deg, #E8EDE4 0%, #DFE5DB 100%)',
              },
              settings: {
                backgroundColor: '#E8EDE4',
                textColor: '#1B4D4F',
                padding: '140px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-features',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Services',
                subheading: 'Comprehensive wellness offerings designed for your unique needs',
                features: [
                  {
                    title: 'Holistic Consultations',
                    description: 'Personalized wellness assessments and guidance from experienced practitioners.',
                    icon: 'heart',
                  },
                  {
                    title: 'Therapeutic Massage',
                    description: 'Rejuvenating treatments that restore balance and promote deep relaxation.',
                    icon: 'sun',
                  },
                  {
                    title: 'Yoga & Meditation',
                    description: 'Classes and programs to cultivate mindfulness and inner peace.',
                    icon: 'target',
                  },
                  {
                    title: 'Nutrition Counseling',
                    description: 'Expert guidance to nourish your body and optimize your health.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Wellness Coaching',
                    description: 'Personalized support to achieve your health and wellness goals.',
                    icon: 'chart',
                  },
                  {
                    title: 'Spa Treatments',
                    description: 'Luxurious treatments designed for renewal and restoration.',
                    icon: 'palette',
                  },
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
                variant: 'featured',
              },
            },
            {
              id: 'ser-about',
              type: 'about',
              order: 2,
              content: {
                heading: 'About Serenity Clinic',
                text: 'We believe true wellness comes from addressing the whole person—mind, body, and spirit. At Serenity Clinic, we combine evidence-based modern medicine with time-honored wellness traditions to create transformative healing experiences.',
                image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#DFE5DB',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-testimonials',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Healing Stories',
                testimonials: [
                  {
                    quote: 'Serenity Clinic transformed my relationship with wellness. I feel more balanced and at peace than ever before.',
                    author: 'Margaret Wilson',
                    role: 'Wellness Program Participant',
                  },
                  {
                    quote: 'The team here truly cares about your wellbeing. Their holistic approach made a profound difference in my health journey.',
                    author: 'Daniel Thompson',
                    role: 'Long-time Client',
                  },
                  {
                    quote: 'From the moment I arrived, I felt the sense of calm and healing. This is more than a clinic—it\'s a sanctuary.',
                    author: 'Jessica Kumar',
                    role: 'Spa & Wellness Guest',
                  },
                ],
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-cta',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Start Your Wellness Transformation',
                subheading: 'Schedule a consultation and discover your path to vibrant health.',
                ctaText: 'Schedule Consultation',
                ctaLink: '#contact',
              },
              settings: {
                backgroundColor: '#1B4D4F',
                textColor: '#E8EDE4',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-footer',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Serenity Clinic',
                tagline: 'Holistic wellness for the whole person.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                  { label: 'Appointments', href: '#book' },
                ],
                email: 'hello@serenityclinic.wellness',
                phone: '+1 (555) 567-8901',
              },
              settings: {
                backgroundColor: '#0F3E41',
                textColor: '#E8EDE4',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ser-services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'ser-services-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Personalized wellness programs tailored to your needs',
                ctaText: 'Explore',
                ctaLink: '#details',
                backgroundImage: 'linear-gradient(135deg, #E8EDE4 0%, #DFE5DB 100%)',
              },
              settings: {
                backgroundColor: '#E8EDE4',
                textColor: '#1B4D4F',
                padding: '120px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-services-detail-1',
              type: 'text',
              order: 1,
              content: {
                heading: 'Therapeutic Retreat Programs',
                text: 'Immerse yourself in our transformative wellness retreats. Combining therapeutic treatments, yoga, nutrition guidance, and mindfulness practices, our retreats provide the perfect environment for deep healing and renewal.',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B4D4F',
                padding: '80px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-services-detail-2',
              type: 'text',
              order: 2,
              content: {
                heading: 'Integrative Wellness Plans',
                text: 'Our practitioners work collaboratively to create personalized wellness plans that integrate modern medicine, nutritional science, and holistic therapies. Each plan is designed specifically for your unique health goals and circumstances.',
              },
              settings: {
                backgroundColor: '#DFE5DB',
                textColor: '#1B4D4F',
                padding: '80px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-services-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Serenity Clinic',
                tagline: 'Holistic wellness for the whole person.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@serenityclinic.wellness',
                phone: '+1 (555) 567-8901',
              },
              settings: {
                backgroundColor: '#0F3E41',
                textColor: '#E8EDE4',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ser-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'ser-about-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Serenity Clinic',
                subheading: 'A sanctuary for healing and transformation',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'linear-gradient(135deg, #E8EDE4 0%, #DFE5DB 100%)',
              },
              settings: {
                backgroundColor: '#E8EDE4',
                textColor: '#1B4D4F',
                padding: '120px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-about-content',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Philosophy',
                text: 'Wellness is not the absence of disease—it is a state of complete physical, mental, and social wellbeing. Our philosophy integrates the best of modern medicine with time-honored healing traditions, creating a space where true transformation can occur.',
                image: 'https://images.unsplash.com/photo-1576091160653-112173f31c77?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-about-team',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet Our Practitioners',
                members: [
                  {
                    name: 'Dr. Sarah Mitchell',
                    role: 'Founder & Medical Director',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'James Chen',
                    role: 'Wellness Coach & Nutritionist',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Priya Sharma',
                    role: 'Yoga & Meditation Instructor',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#DFE5DB',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-about-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Serenity Clinic',
                tagline: 'Holistic wellness for the whole person.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@serenityclinic.wellness',
                phone: '+1 (555) 567-8901',
              },
              settings: {
                backgroundColor: '#0F3E41',
                textColor: '#E8EDE4',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'ser-contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'ser-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Begin Your Healing Journey',
                subheading: 'Contact us to schedule your consultation',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(135deg, #E8EDE4 0%, #DFE5DB 100%)',
              },
              settings: {
                backgroundColor: '#E8EDE4',
                textColor: '#1B4D4F',
                padding: '120px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Schedule Your Consultation',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Request Appointment',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B4D4F',
                padding: '100px 0',
                accentColor: '#D4827E',
              },
            },
            {
              id: 'ser-contact-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Serenity Clinic',
                tagline: 'Holistic wellness for the whole person.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@serenityclinic.wellness',
                phone: '+1 (555) 567-8901',
              },
              settings: {
                backgroundColor: '#0F3E41',
                textColor: '#E8EDE4',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },

  // ===============================
  // HEALTH & WELLNESS: Vitality Health
  // ===============================
  {
    name: 'Vitality Health',
    description: 'Modern clinic template with clean white, navy blue, and bright coral accent. Medical-professional yet approachable healthcare branding.',
    industry_tags: ['health', 'medical', 'clinic', 'wellness'],
    style_tags: ['medical', 'professional', 'approachable', 'modern'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'vh-home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'vh-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Exceptional Care, Right When You Need It',
                subheading: 'Comprehensive healthcare services focused on your wellbeing and vitality.',
                ctaText: 'Book an Appointment',
                ctaLink: '#book',
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '140px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-features',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Services',
                subheading: 'World-class healthcare across all specialties',
                features: [
                  {
                    title: 'Primary Care',
                    description: 'Comprehensive preventive care and chronic disease management from experienced physicians.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Specialty Care',
                    description: 'Expert consultation across cardiology, orthopedics, pediatrics, and more.',
                    icon: 'shield',
                  },
                  {
                    title: 'Diagnostic Services',
                    description: 'Advanced imaging and laboratory services for accurate diagnosis and monitoring.',
                    icon: 'search',
                  },
                  {
                    title: 'Urgent Care',
                    description: 'Quick access to medical attention for non-emergency conditions when you need it.',
                    icon: 'zap',
                  },
                  {
                    title: 'Preventive Health',
                    description: 'Wellness programs and screenings to keep you healthy and detect issues early.',
                    icon: 'heart',
                  },
                  {
                    title: 'Telemedicine',
                    description: 'Convenient virtual consultations with our healthcare providers from anywhere.',
                    icon: 'monitor',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
                variant: 'featured',
              },
            },
            {
              id: 'vh-stats',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '50,000+', label: 'Patients Served' },
                  { value: '150+', label: 'Board-Certified Physicians' },
                  { value: '98%', label: 'Patient Satisfaction' },
                  { value: '24/7', label: 'Patient Support' },
                ],
              },
              settings: {
                backgroundColor: '#1B365D',
                textColor: '#FFFFFF',
                padding: '80px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-about',
              type: 'about',
              order: 3,
              content: {
                heading: 'Why Choose Vitality Health',
                text: 'For over 30 years, Vitality Health has been committed to delivering exceptional healthcare with compassion and expertise. Our team of highly skilled physicians, nurses, and healthcare professionals are dedicated to your health, wellness, and vitality.',
                image: 'https://images.unsplash.com/photo-1576091160550-2173f31c77?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-testimonials',
              type: 'testimonials',
              order: 4,
              content: {
                heading: 'Patient Stories',
                testimonials: [
                  {
                    quote: 'Vitality Health provided exceptional care during a challenging time. The team is compassionate, knowledgeable, and truly invested in patient outcomes.',
                    author: 'Robert Martinez',
                    role: 'Patient',
                  },
                  {
                    quote: 'The quality of care and professionalism here is outstanding. I trust my health to this team completely.',
                    author: 'Lisa Anderson',
                    role: 'Patient',
                  },
                  {
                    quote: 'From scheduling to treatment, every interaction was seamless and caring. Vitality Health sets the standard.',
                    author: 'Michael Chen',
                    role: 'Patient',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-cta',
              type: 'cta',
              order: 5,
              content: {
                heading: 'Ready to Take the Next Step?',
                subheading: 'Schedule an appointment or learn more about our services.',
                ctaText: 'Book Now',
                ctaLink: '#book',
              },
              settings: {
                backgroundColor: '#1B365D',
                textColor: '#FFFFFF',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-footer',
              type: 'footer',
              order: 6,
              content: {
                companyName: 'Vitality Health',
                tagline: 'Exceptional care for vibrant living.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Physicians', href: '#team' },
                  { label: 'Contact', href: '#contact' },
                  { label: 'Patient Portal', href: '#portal' },
                ],
                email: 'hello@vitalityhealth.com',
                phone: '+1 (555) 678-9012',
              },
              settings: {
                backgroundColor: '#0D1F34',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'vh-services',
          name: 'Services',
          slug: '/services',
          blocks: [
            {
              id: 'vh-services-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Healthcare Services',
                subheading: 'Comprehensive care across all medical specialties',
                ctaText: 'Explore',
                ctaLink: '#details',
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '120px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-services-primary',
              type: 'text',
              order: 1,
              content: {
                heading: 'Primary Care Services',
                text: 'Our primary care physicians provide comprehensive medical care including preventive screenings, management of chronic conditions, and coordinated specialty referrals. We build lasting relationships with our patients to ensure continuity of care and optimal health outcomes.',
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '80px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-services-specialty',
              type: 'text',
              order: 2,
              content: {
                heading: 'Specialty Consulting',
                text: 'Access expert specialists in cardiology, orthopedics, neurology, oncology, and more. Our specialists work collaboratively with your primary care physician to provide integrated, compassionate care tailored to your unique health needs.',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '80px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-services-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Vitality Health',
                tagline: 'Exceptional care for vibrant living.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@vitalityhealth.com',
                phone: '+1 (555) 678-9012',
              },
              settings: {
                backgroundColor: '#0D1F34',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'vh-physicians',
          name: 'Our Physicians',
          slug: '/physicians',
          blocks: [
            {
              id: 'vh-physicians-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Physicians',
                subheading: 'Board-certified medical professionals committed to your care',
                ctaText: 'Meet the Team',
                ctaLink: '#team',
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '120px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-physicians-team',
              type: 'team',
              order: 1,
              content: {
                heading: 'Leadership & Physicians',
                members: [
                  {
                    name: 'Dr. Elizabeth Park',
                    role: 'Chief Medical Officer & Internist',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Dr. Ahmad Hassan',
                    role: 'Cardiologist & Director of Specialty Care',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Dr. Jennifer Rodriguez',
                    role: 'Orthopedic Surgeon',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Dr. Michael Thompson',
                    role: 'Family Medicine Physician',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  },
                  {
                    name: 'Dr. Priya Desai',
                    role: 'Pediatrician',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  },
                ],
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-physicians-footer',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Vitality Health',
                tagline: 'Exceptional care for vibrant living.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@vitalityhealth.com',
                phone: '+1 (555) 678-9012',
              },
              settings: {
                backgroundColor: '#0D1F34',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'vh-about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'vh-about-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Vitality Health',
                subheading: 'Three decades of exceptional care and patient commitment',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '120px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-about-mission',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'To provide exceptional, compassionate healthcare that promotes vibrant living and improved health outcomes for our patients, families, and communities. We are committed to clinical excellence, patient-centered care, and continuous innovation in medicine.',
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-about-content',
              type: 'about',
              order: 2,
              content: {
                heading: 'Our Story',
                text: 'Since 1994, Vitality Health has been setting the standard for comprehensive, compassionate medical care. What began as a small family practice has grown into a full-service healthcare organization serving thousands of patients across multiple locations.',
                image: 'https://images.unsplash.com/photo-1576091160550-2173f31c77?w=800&h=600&fit=crop',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-about-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Vitality Health',
                tagline: 'Exceptional care for vibrant living.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
                email: 'hello@vitalityhealth.com',
                phone: '+1 (555) 678-9012',
              },
              settings: {
                backgroundColor: '#0D1F34',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
        {
          id: 'vh-contact',
          name: 'Contact & Appointments',
          slug: '/contact',
          blocks: [
            {
              id: 'vh-contact-hero',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Contact Vitality Health',
                subheading: 'Schedule an appointment or get in touch with us',
                ctaText: 'Contact',
                ctaLink: '#form',
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1B365D',
                padding: '120px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Schedule Your Appointment',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Request Appointment',
              },
              settings: {
                backgroundColor: '#F5F7FA',
                textColor: '#1B365D',
                padding: '100px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-contact-cta',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Need Urgent Care?',
                subheading: 'Our urgent care center is open 24/7 for non-emergency medical needs.',
                ctaText: 'Visit Urgent Care',
                ctaLink: '#urgent',
              },
              settings: {
                backgroundColor: '#1B365D',
                textColor: '#FFFFFF',
                padding: '80px 0',
                accentColor: '#FF6B6B',
              },
            },
            {
              id: 'vh-contact-footer',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Vitality Health',
                tagline: 'Exceptional care for vibrant living.',
                links: [
                  { label: 'Services', href: '#services' },
                  { label: 'Physicians', href: '#team' },
                  { label: 'About', href: '#about' },
                  { label: 'Patient Portal', href: '#portal' },
                ],
                email: 'hello@vitalityhealth.com',
                phone: '+1 (555) 678-9012',
              },
              settings: {
                backgroundColor: '#0D1F34',
                textColor: '#FFFFFF',
                padding: '60px 0',
              },
            },
          ],
        },
      ],
    },
  },
];
