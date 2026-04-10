import type { TemplateData } from '@/types';

export const batch4Templates: Array<{
  name: string;
  description: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  template_data: TemplateData;
}> = [
  // Fitness & Gym - Template A: Peak Performance
  {
    name: 'Peak Performance',
    description: 'High-tech fitness experience with futuristic design. Inspired by premium fitness brands like Peloton.',
    industry_tags: ['fitness', 'gym', 'training', 'wellness'],
    style_tags: ['futuristic', 'high-tech', 'modern', 'energetic', 'dark'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Unlock Your Peak Performance',
                subheading: 'Train with AI-powered coaching in the ultimate digital fitness experience',
                ctaText: 'Start Your Journey',
                ctaLink: '/programs',
                backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 1,
              content: {
                heading: 'Why Peak Performance',
                subheading: 'Experience the future of fitness training',
                features: [
                  {
                    title: 'AI Coaching',
                    description: 'Real-time form feedback powered by advanced computer vision',
                    icon: 'zap'
                  },
                  {
                    title: 'Live Classes',
                    description: 'Join thousands in synchronized high-energy workouts',
                    icon: 'megaphone'
                  },
                  {
                    title: 'Smart Tracking',
                    description: 'Comprehensive metrics across all your training sessions',
                    icon: 'chart'
                  },
                  {
                    title: 'Custom Programs',
                    description: 'Tailored plans built around your goals and preferences',
                    icon: 'target'
                  }
                ]
              },
              settings: {
                backgroundColor: '#111827',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#22D3EE'
              }
            },
            {
              id: 'stats-1',
              type: 'stats',
              order: 2,
              content: {
                stats: [
                  { value: '500K+', label: 'Active Athletes' },
                  { value: '10M+', label: 'Workouts Completed' },
                  { value: '98%', label: 'Satisfaction Rate' },
                  { value: '24/7', label: 'Support Available' }
                ]
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Ready to Transform?',
                subheading: 'Join the elite training community and achieve your goals faster',
                ctaText: 'Get Started Free',
                ctaLink: '/signup'
              },
              settings: {
                backgroundColor: '#1F2937',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#22D3EE'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Peak Performance',
                tagline: 'The future of fitness is here',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Programs', href: '/programs' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'support@peakperformance.com',
                phone: '+1 (555) 123-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#9CA3AF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Revolutionizing Fitness Training',
                subheading: 'Built by athletes, engineers, and coaches for the next generation',
                ctaText: 'Explore Programs',
                ctaLink: '/programs',
                backgroundImage: 'https://images.unsplash.com/photo-1552821081-7bcfc17241fd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'about-1',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'Peak Performance is dedicated to making world-class fitness coaching accessible to everyone. Founded in 2021, we combine cutting-edge AI technology with human expertise to deliver personalized training experiences. Our platform has helped over 500,000 athletes achieve their fitness goals through intelligent, adaptive coaching that evolves with you.',
                image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#111827',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'What Our Athletes Say',
                testimonials: [
                  {
                    quote: 'The AI coaching completely transformed my form and reduced injuries. I\'ve never been stronger.',
                    author: 'Marcus Chen',
                    role: 'Competitive Athlete'
                  },
                  {
                    quote: 'Finally, a fitness platform that feels like having a personal trainer in your pocket.',
                    author: 'Sarah Martinez',
                    role: 'Fitness Coach'
                  },
                  {
                    quote: 'The community and real-time feedback make every workout feel fresh and motivating.',
                    author: 'James Thompson',
                    role: 'CEO'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#22D3EE'
              }
            },
            {
              id: 'footer-about-1',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Peak Performance',
                tagline: 'The future of fitness is here',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Programs', href: '/programs' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'support@peakperformance.com',
                phone: '+1 (555) 123-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#9CA3AF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'programs',
          name: 'programs',
          slug: '/programs',
          blocks: [
            {
              id: 'hero-programs-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Training Programs Designed for Results',
                subheading: 'From strength and conditioning to endurance and mobility',
                ctaText: 'Choose Your Program',
                ctaLink: '#pricing',
                backgroundImage: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf42f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'pricing-1',
              type: 'pricing',
              order: 1,
              content: {
                heading: 'Choose Your Training Level',
                plans: [
                  {
                    name: 'Starter',
                    price: '$29/mo',
                    features: [
                      'Unlimited access to 100+ programs',
                      'Basic AI form feedback',
                      'Community support',
                      'Mobile app'
                    ]
                  },
                  {
                    name: 'Advanced',
                    price: '$79/mo',
                    features: [
                      'Everything in Starter',
                      'Advanced AI coaching',
                      'Live classes with coaches',
                      '1-on-1 form analysis',
                      'Priority support'
                    ]
                  },
                  {
                    name: 'Elite',
                    price: '$199/mo',
                    features: [
                      'Everything in Advanced',
                      'Personal training program',
                      'Weekly progress consultations',
                      'Nutrition guidance',
                      'VIP community access'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#111827',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#22D3EE'
              }
            },
            {
              id: 'cta-programs-1',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Start Your Transformation Today',
                subheading: 'First 7 days free. No credit card required.',
                ctaText: 'Begin Free Trial',
                ctaLink: '/signup'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6'
              }
            },
            {
              id: 'footer-programs-1',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Peak Performance',
                tagline: 'The future of fitness is here',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'support@peakperformance.com',
                phone: '+1 (555) 123-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#9CA3AF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get in Touch',
                subheading: 'Questions? Our support team is ready to help.',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1552821081-7bcfc17241fd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#3B82F6',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'contact-1',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Us',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#111827',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#22D3EE'
              }
            },
            {
              id: 'footer-contact-1',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Peak Performance',
                tagline: 'The future of fitness is here',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Programs', href: '/programs' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'support@peakperformance.com',
                phone: '+1 (555) 123-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#9CA3AF',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Fitness & Gym - Template B: Zen Fitness
  {
    name: 'Zen Fitness',
    description: 'Calm and balanced wellness studio focused on yoga and mindful movement. Serene, peaceful design.',
    industry_tags: ['fitness', 'yoga', 'wellness', 'studio', 'mindfulness'],
    style_tags: ['calm', 'balanced', 'zen', 'organic', 'wellness'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-2',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Find Your Balance',
                subheading: 'Yoga, meditation, and mindful movement for a centered life',
                ctaText: 'Explore Classes',
                ctaLink: '/classes',
                backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#6B8F71',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'features-2',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Approach',
                subheading: 'Holistic wellness through mindful practice',
                features: [
                  {
                    title: 'Expert Instructors',
                    description: 'Certified yoga teachers with years of meditation practice',
                    icon: 'star'
                  },
                  {
                    title: 'Peaceful Studio',
                    description: 'Serene environment designed for deep practice and connection',
                    icon: 'heart'
                  },
                  {
                    title: 'Diverse Classes',
                    description: 'From gentle restorative to dynamic vinyasa flows',
                    icon: 'layout'
                  },
                  {
                    title: 'Community',
                    description: 'Join a supportive community of wellness-minded practitioners',
                    icon: 'sun'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#C9A84C'
              }
            },
            {
              id: 'about-2',
              type: 'about',
              order: 2,
              content: {
                heading: 'Welcome to Zen Fitness',
                text: 'Founded on principles of balance, mindfulness, and self-care, Zen Fitness offers a sanctuary for your body, mind, and spirit. Our holistic approach combines traditional yoga practices with modern wellness science to help you cultivate inner peace and physical vitality. Whether you\'re beginning your practice or deepening an existing one, our community welcomes you.',
                image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F9F7F4',
                textColor: '#2D3436',
                padding: 'lg'
              }
            },
            {
              id: 'cta-2',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Begin Your Journey',
                subheading: 'First class free for new members',
                ctaText: 'Join Our Community',
                ctaLink: '/signup'
              },
              settings: {
                backgroundColor: '#6B8F71',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A84C'
              }
            },
            {
              id: 'footer-2',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Zen Fitness',
                tagline: 'Balance your body, mind, and spirit',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Classes', href: '/classes' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@zenfitness.com',
                phone: '+1 (555) 234-5678'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#6B8F71',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-2',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Story',
                subheading: 'Created by yoga practitioners for a mindful community',
                ctaText: 'Explore Classes',
                ctaLink: '/classes',
                backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#6B8F71',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'about-story-2',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'Zen Fitness was founded in 2018 by a group of certified yoga instructors who envisioned a space where wellness and community flourish. We believe that yoga and mindfulness are transformative practices that benefit everyone. Our mission is to provide accessible, authentic instruction in a peaceful environment where students can explore their practice at their own pace and discover the profound benefits of mindful movement.',
                image: 'https://images.unsplash.com/photo-1544699686-24e90b60d1e5?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg'
              }
            },
            {
              id: 'team-2',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet Our Teachers',
                members: [
                  {
                    name: 'Sophia Patel',
                    role: 'Founder & Lead Teacher',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Marcus Williams',
                    role: 'Yoga & Mindfulness Coach',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Elena Rodriguez',
                    role: 'Restorative Yoga Specialist',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F9F7F4',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#C9A84C'
              }
            },
            {
              id: 'footer-about-2',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Zen Fitness',
                tagline: 'Balance your body, mind, and spirit',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Classes', href: '/classes' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@zenfitness.com',
                phone: '+1 (555) 234-5678'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#6B8F71',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'classes',
          name: 'classes',
          slug: '/classes',
          blocks: [
            {
              id: 'hero-classes-2',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Class Schedule',
                subheading: 'Find the perfect class for your practice level and lifestyle',
                ctaText: 'Schedule a Class',
                ctaLink: '#schedule',
                backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#6B8F71',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'features-classes-2',
              type: 'features',
              order: 1,
              content: {
                heading: 'Class Styles',
                subheading: 'Something for every yogi',
                features: [
                  {
                    title: 'Vinyasa Flow',
                    description: 'Dynamic, breath-synchronized movements for strength and flexibility',
                    icon: 'zap'
                  },
                  {
                    title: 'Gentle Hatha',
                    description: 'Accessible practice focusing on alignment and breath control',
                    icon: 'heart'
                  },
                  {
                    title: 'Restorative',
                    description: 'Deeply relaxing practice for recovery and nervous system balance',
                    icon: 'sun'
                  },
                  {
                    title: 'Meditation',
                    description: 'Guided mindfulness and meditation sessions for mental clarity',
                    icon: 'palette'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#C9A84C'
              }
            },
            {
              id: 'cta-classes-2',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Ready to Begin?',
                subheading: 'New members receive their first class completely free',
                ctaText: 'Claim Your Free Class',
                ctaLink: '/signup'
              },
              settings: {
                backgroundColor: '#6B8F71',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A84C'
              }
            },
            {
              id: 'footer-classes-2',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Zen Fitness',
                tagline: 'Balance your body, mind, and spirit',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@zenfitness.com',
                phone: '+1 (555) 234-5678'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#6B8F71',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-2',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'We\'d love to hear from you and answer any questions',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#6B8F71',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'contact-2',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#6B8F71'
              }
            },
            {
              id: 'footer-contact-2',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Zen Fitness',
                tagline: 'Balance your body, mind, and spirit',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Classes', href: '/classes' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@zenfitness.com',
                phone: '+1 (555) 234-5678'
              },
              settings: {
                backgroundColor: '#FEFDF8',
                textColor: '#6B8F71',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Photography & Portfolio - Template A: Lightroom Studio
  {
    name: 'Lightroom Studio',
    description: 'Warm editorial photography portfolio with vintage film aesthetic. Perfect for photographers and visual artists.',
    industry_tags: ['photography', 'portfolio', 'creative', 'visual arts', 'editorial'],
    style_tags: ['warm', 'vintage', 'editorial', 'film', 'nostalgic'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-3',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Light. Emotion. Memory.',
                subheading: 'Editorial photography capturing authentic moments in life',
                ctaText: 'View Portfolio',
                ctaLink: '/portfolio',
                backgroundImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D',
                overlayOpacity: 0.3
              }
            },
            {
              id: 'features-3',
              type: 'features',
              order: 1,
              content: {
                heading: 'Photography Services',
                subheading: 'Specialized in editorial and documentary work',
                features: [
                  {
                    title: 'Editorial',
                    description: 'Magazine-quality storytelling through portraiture and lifestyle imagery',
                    icon: 'camera'
                  },
                  {
                    title: 'Brand Stories',
                    description: 'Visual narratives that authentically represent your brand\'s values',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Events',
                    description: 'Documentary-style coverage capturing the genuine spirit of moments',
                    icon: 'megaphone'
                  },
                  {
                    title: 'Art Direction',
                    description: 'Creative vision development from concept through final images',
                    icon: 'palette'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D'
              }
            },
            {
              id: 'about-3',
              type: 'about',
              order: 2,
              content: {
                heading: 'Lightroom Studio',
                text: 'With over a decade of editorial photography experience, Lightroom Studio specializes in creating timeless imagery that tells stories. Our approach combines traditional film aesthetics with contemporary visual language. We believe in the power of authentic light, genuine emotion, and the beauty of imperfection. Each project is a collaboration in capturing the essence of your vision.',
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F9F7F4',
                textColor: '#3D3632',
                padding: 'lg'
              }
            },
            {
              id: 'cta-3',
              type: 'cta',
              order: 3,
              content: {
                heading: 'Let\'s Create Together',
                subheading: 'Schedule a consultation to discuss your project',
                ctaText: 'Get In Touch',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#3D3632',
                textColor: '#F5F2ED',
                padding: 'lg',
                accentColor: '#A0522D'
              }
            },
            {
              id: 'footer-3',
              type: 'footer',
              order: 4,
              content: {
                companyName: 'Lightroom Studio',
                tagline: 'Editorial photography with warmth and authenticity',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lightroomstudio.com',
                phone: '+1 (555) 345-6789'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-3',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About the Work',
                subheading: 'An approach rooted in authenticity and light',
                ctaText: 'View Portfolio',
                ctaLink: '/portfolio',
                backgroundImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D',
                overlayOpacity: 0.3
              }
            },
            {
              id: 'about-philosophy-3',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Philosophy',
                text: 'We approach each project with a film photographer\'s sensibility: patience, intentionality, and respect for natural light. Our work celebrates the warm tones of golden hour, the texture of real film, and the unguarded moments that reveal truth. We believe photography is about connection—between the photographer and subject, between the image and viewer, between past memories and present moments.',
                image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D3632',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-3',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'Client Stories',
                testimonials: [
                  {
                    quote: 'The warmth and authenticity in these images perfectly captured our brand\'s essence. Simply exceptional work.',
                    author: 'Jessica Chen',
                    role: 'Creative Director'
                  },
                  {
                    quote: 'Every frame tells a story. The attention to light and emotion is unparalleled.',
                    author: 'David Mitchell',
                    role: 'Magazine Editor'
                  },
                  {
                    quote: 'Working with Lightroom Studio transformed how we present ourselves visually. Highly recommended.',
                    author: 'Elena Rossi',
                    role: 'Founder'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F9F7F4',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D'
              }
            },
            {
              id: 'footer-about-3',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Lightroom Studio',
                tagline: 'Editorial photography with warmth and authenticity',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lightroomstudio.com',
                phone: '+1 (555) 345-6789'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'portfolio',
          name: 'portfolio',
          slug: '/portfolio',
          blocks: [
            {
              id: 'hero-portfolio-3',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Portfolio',
                subheading: 'A selection of recent editorial and commercial work',
                ctaText: 'Inquire',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D',
                overlayOpacity: 0.3
              }
            },
            {
              id: 'gallery-3',
              type: 'gallery',
              order: 1,
              content: {
                heading: 'Selected Works',
                images: [
                  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D3632',
                padding: 'lg'
              }
            },
            {
              id: 'cta-portfolio-3',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Ready for Your Project?',
                subheading: 'Let\'s discuss your vision and create something beautiful',
                ctaText: 'Start a Conversation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#3D3632',
                textColor: '#F5F2ED',
                padding: 'lg',
                accentColor: '#A0522D'
              }
            },
            {
              id: 'footer-portfolio-3',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Lightroom Studio',
                tagline: 'Editorial photography with warmth and authenticity',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lightroomstudio.com',
                phone: '+1 (555) 345-6789'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-3',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Let\'s Connect',
                subheading: 'Interested in working together? We\'d love to hear about your project.',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D',
                overlayOpacity: 0.3
              }
            },
            {
              id: 'contact-3',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D3632',
                padding: 'lg',
                accentColor: '#A0522D'
              }
            },
            {
              id: 'footer-contact-3',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Lightroom Studio',
                tagline: 'Editorial photography with warmth and authenticity',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lightroomstudio.com',
                phone: '+1 (555) 345-6789'
              },
              settings: {
                backgroundColor: '#F5F2ED',
                textColor: '#3D3632',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Photography & Portfolio - Template B: Noir Visuals
  {
    name: 'Noir Visuals',
    description: 'Bold, high-contrast fashion and commercial photography portfolio. Avant-garde aesthetic with striking minimalism.',
    industry_tags: ['photography', 'fashion', 'commercial', 'portfolio', 'art'],
    style_tags: ['bold', 'high-contrast', 'minimalist', 'avant-garde', 'fashion'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-4',
              type: 'hero',
              order: 0,
              content: {
                heading: 'NOIR VISUALS',
                subheading: 'Bold commercial photography. High contrast. Uncompromising vision.',
                ctaText: 'View Work',
                ctaLink: '/portfolio',
                backgroundImage: 'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'features-4',
              type: 'features',
              order: 1,
              content: {
                heading: 'Specialization',
                subheading: 'Fashion, commercial, and fine art photography',
                features: [
                  {
                    title: 'Fashion',
                    description: 'High-fashion editorials and campaign photography with bold aesthetic',
                    icon: 'camera'
                  },
                  {
                    title: 'Commercial',
                    description: 'Product and lifestyle photography with striking visual impact',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Art Direction',
                    description: 'Creative vision and conceptual development from inception',
                    icon: 'palette'
                  },
                  {
                    title: 'Retouching',
                    description: 'High-end post-production and color grading mastery',
                    icon: 'code'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'about-4',
              type: 'about',
              order: 2,
              content: {
                heading: 'About Noir Visuals',
                text: 'Noir Visuals is a boutique creative studio specializing in fashion and commercial photography that challenges conventions. Our work is characterized by bold contrasts, meticulous attention to detail, and unwavering commitment to visual excellence. We collaborate with forward-thinking brands and creative directors to produce imagery that is not just seen, but remembered. Every project is a statement.',
                image: 'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'stats-4',
              type: 'stats',
              order: 3,
              content: {
                stats: [
                  { value: '15+', label: 'Years of Experience' },
                  { value: '200+', label: 'Brands Served' },
                  { value: '50+', label: 'Awards & Recognition' },
                  { value: '1000+', label: 'Published Images' }
                ]
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'cta-4',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Collaborate?',
                subheading: 'Let\'s create something unforgettable together',
                ctaText: 'Get In Touch',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'footer-4',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Noir Visuals',
                tagline: 'Bold photography. Uncompromising vision.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'studio@noir-visuals.com',
                phone: '+1 (555) 456-7890'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-4',
              type: 'hero',
              order: 0,
              content: {
                heading: 'The Story',
                subheading: 'A decade and a half of pushing visual boundaries',
                ctaText: 'View Portfolio',
                ctaLink: '/portfolio',
                backgroundImage: 'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'about-story-4',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Evolution',
                text: 'Founded in 2009, Noir Visuals has established itself as a creative force in fashion and commercial photography. Our journey began with a simple philosophy: create images so compelling, so visually striking, that they demand attention. Over the years, we\'ve refined our craft, expanded our capabilities, and maintained our unwavering commitment to excellence. We\'ve worked with global brands, emerging designers, and visionary creatives.',
                image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-4',
              type: 'testimonials',
              order: 2,
              content: {
                heading: 'Testimonials',
                testimonials: [
                  {
                    quote: 'Noir Visuals transformed our brand aesthetic completely. Their work is bold, refined, and unmistakably professional.',
                    author: 'Victoria Laurent',
                    role: 'Fashion Creative Director'
                  },
                  {
                    quote: 'Working with their team was exceptional. Every image exceeded expectations and elevated our entire campaign.',
                    author: 'Marcus Thompson',
                    role: 'Brand Director'
                  },
                  {
                    quote: 'They understand luxury, minimalism, and impact. Simply the best in the industry.',
                    author: 'Sophie Chen',
                    role: 'Editorial Director'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'footer-about-4',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Noir Visuals',
                tagline: 'Bold photography. Uncompromising vision.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'studio@noir-visuals.com',
                phone: '+1 (555) 456-7890'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'portfolio',
          name: 'portfolio',
          slug: '/portfolio',
          blocks: [
            {
              id: 'hero-portfolio-4',
              type: 'hero',
              order: 0,
              content: {
                heading: 'PORTFOLIO',
                subheading: 'A collection of our finest work across fashion, commercial, and fine art',
                ctaText: 'Inquire',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'gallery-4',
              type: 'gallery',
              order: 1,
              content: {
                heading: 'Featured Work',
                images: [
                  'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1525904688663-4d6f9c32f7eb?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1537498425046-c894fdcc538d?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=600&h=400&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'cta-portfolio-4',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Let\'s Create Impact',
                subheading: 'Collaborate with us on your next project',
                ctaText: 'Schedule Consultation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'footer-portfolio-4',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Noir Visuals',
                tagline: 'Bold photography. Uncompromising vision.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'studio@noir-visuals.com',
                phone: '+1 (555) 456-7890'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-4',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Let\'s discuss your next project and vision',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1544099455-80c17995f0ba?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'contact-4',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#EC4899'
              }
            },
            {
              id: 'footer-contact-4',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Noir Visuals',
                tagline: 'Bold photography. Uncompromising vision.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'studio@noir-visuals.com',
                phone: '+1 (555) 456-7890'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Legal & Law Firm - Template A: Sterling Legal
  {
    name: 'Sterling Legal',
    description: 'Prestigious law firm site with old-world elegance and modern clarity. Top-tier professional aesthetic.',
    industry_tags: ['legal', 'law-firm', 'professional', 'corporate', 'consulting'],
    style_tags: ['prestigious', 'traditional', 'elegant', 'professional', 'trustworthy'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-5',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Sterling Legal Partners',
                subheading: 'Distinguished counsel for complex corporate and litigation matters',
                ctaText: 'Schedule Consultation',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fc1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'features-5',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Expertise',
                subheading: 'Decades of excellence across multiple practice areas',
                features: [
                  {
                    title: 'Corporate Law',
                    description: 'Mergers, acquisitions, and complex corporate transactions',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Litigation',
                    description: 'Strategic defense and advocacy in high-stakes disputes',
                    icon: 'shield'
                  },
                  {
                    title: 'Intellectual Property',
                    description: 'Patent, trademark, and copyright protection strategies',
                    icon: 'code'
                  },
                  {
                    title: 'Estate Planning',
                    description: 'Comprehensive wealth management and succession planning',
                    icon: 'chart'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F6F0',
                textColor: '#0C1B33',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'about-5',
              type: 'about',
              order: 2,
              content: {
                heading: 'About Sterling Legal',
                text: 'Founded in 1987, Sterling Legal Partners has established itself as one of the region\'s most respected law firms. With 85 attorneys across multiple offices, we provide comprehensive legal services to corporations, high-net-worth individuals, and institutions. Our commitment to excellence, integrity, and client success has made us the trusted counsel for Fortune 500 companies and discerning individuals.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#FEF8F0',
                textColor: '#0C1B33',
                padding: 'lg'
              }
            },
            {
              id: 'stats-5',
              type: 'stats',
              order: 3,
              content: {
                stats: [
                  { value: '35+', label: 'Years of Service' },
                  { value: '85', label: 'Attorneys' },
                  { value: '$2.5B+', label: 'Transactions Managed' },
                  { value: '98%', label: 'Client Retention' }
                ]
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'cta-5',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Consult With Our Experts',
                subheading: 'Discuss your legal needs with distinguished counsel',
                ctaText: 'Request Consultation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#B59B6C',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#0C1B33'
              }
            },
            {
              id: 'footer-5',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Sterling Legal Partners',
                tagline: 'Counsel you can trust. Results you deserve.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'counsel@sterlinglegal.com',
                phone: '+1 (555) 567-8901'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#B59B6C',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-5',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Firm',
                subheading: 'A legacy of excellence, integrity, and results',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fc1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'about-story-5',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Heritage',
                text: 'Sterling Legal Partners was founded with a vision to provide world-class legal representation with personal attention. For over three decades, we\'ve built our reputation on principled advocacy, rigorous analysis, and unwavering client focus. Our attorneys are recognized leaders in their fields, with deep expertise and a track record of landmark victories and complex negotiations.',
                image: 'https://images.unsplash.com/photo-1589829545856-d19953ba5f00?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F8F6F0',
                textColor: '#0C1B33',
                padding: 'lg'
              }
            },
            {
              id: 'team-5',
              type: 'team',
              order: 2,
              content: {
                heading: 'Leadership',
                members: [
                  {
                    name: 'James Sterling',
                    role: 'Founding Partner & Managing Partner',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Victoria Ashford',
                    role: 'Senior Partner, Corporate Practice',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Senior Partner, Litigation Practice',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FEF8F0',
                textColor: '#0C1B33',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'footer-about-5',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Sterling Legal Partners',
                tagline: 'Counsel you can trust. Results you deserve.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'counsel@sterlinglegal.com',
                phone: '+1 (555) 567-8901'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#B59B6C',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'practice-areas',
          name: 'practice-areas',
          slug: '/practice-areas',
          blocks: [
            {
              id: 'hero-practice-5',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Practice Areas',
                subheading: 'Comprehensive legal expertise across multiple disciplines',
                ctaText: 'Consult',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fc1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'features-practice-5',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Specializations',
                subheading: 'Deep expertise in high-value matters',
                features: [
                  {
                    title: 'Corporate & M&A',
                    description: 'Mergers, acquisitions, divestitures, and complex transactions',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Litigation & Dispute',
                    description: 'Commercial, employment, and intellectual property litigation',
                    icon: 'shield'
                  },
                  {
                    title: 'Real Estate',
                    description: 'Development, acquisition, and financing of major properties',
                    icon: 'layout'
                  },
                  {
                    title: 'Tax & Wealth',
                    description: 'Tax planning, trusts, estates, and succession strategies',
                    icon: 'chart'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F6F0',
                textColor: '#0C1B33',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'cta-practice-5',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Need Expert Legal Counsel?',
                subheading: 'Connect with our specialists to discuss your matter',
                ctaText: 'Schedule Consultation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'footer-practice-5',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Sterling Legal Partners',
                tagline: 'Counsel you can trust. Results you deserve.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'counsel@sterlinglegal.com',
                phone: '+1 (555) 567-8901'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#B59B6C',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'faq',
          name: 'faq',
          slug: '/faq',
          blocks: [
            {
              id: 'hero-faq-5',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Frequently Asked Questions',
                subheading: 'Answers to common legal and firm inquiries',
                ctaText: 'Contact Us',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fc1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'faq-5',
              type: 'faq',
              order: 1,
              content: {
                heading: 'Your Questions Answered',
                items: [
                  {
                    question: 'How do I schedule an initial consultation?',
                    answer: 'Contact our client services team at counsel@sterlinglegal.com or call +1 (555) 567-8901. We typically schedule consultations within 48 hours.'
                  },
                  {
                    question: 'What is your fee structure?',
                    answer: 'We offer hourly rates, flat fees, and contingency arrangements depending on the matter. We\'ll discuss the most appropriate arrangement during your consultation.'
                  },
                  {
                    question: 'Do you handle matters outside your main practice areas?',
                    answer: 'While our primary expertise is in corporate and litigation matters, we maintain a network of specialists and can often assist or refer you appropriately.'
                  },
                  {
                    question: 'What should I bring to my consultation?',
                    answer: 'Bring any relevant documents, contracts, correspondence, or information related to your legal matter. This helps us provide more informed initial guidance.'
                  },
                  {
                    question: 'Are consultations confidential?',
                    answer: 'Yes. All communications with our attorneys are protected by attorney-client privilege and remain confidential.'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F6F0',
                textColor: '#0C1B33',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'footer-faq-5',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Sterling Legal Partners',
                tagline: 'Counsel you can trust. Results you deserve.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'counsel@sterlinglegal.com',
                phone: '+1 (555) 567-8901'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#B59B6C',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-5',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Contact us to discuss your legal needs',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fc1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#F8F6F0',
                padding: 'lg',
                accentColor: '#B59B6C',
                overlayOpacity: 0.4
              }
            },
            {
              id: 'contact-5',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#F8F6F0',
                textColor: '#0C1B33',
                padding: 'lg',
                accentColor: '#B59B6C'
              }
            },
            {
              id: 'footer-contact-5',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Sterling Legal Partners',
                tagline: 'Counsel you can trust. Results you deserve.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'FAQ', href: '/faq' }
                ],
                email: 'counsel@sterlinglegal.com',
                phone: '+1 (555) 567-8901'
              },
              settings: {
                backgroundColor: '#0C1B33',
                textColor: '#B59B6C',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Legal & Law Firm - Template B: Justice Partners
  {
    name: 'Justice Partners',
    description: 'Modern, approachable law firm with tech-forward design. Client-friendly and accessible legal services.',
    industry_tags: ['legal', 'law-firm', 'modern', 'accessible', 'corporate'],
    style_tags: ['modern', 'accessible', 'tech-forward', 'fresh', 'client-focused'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-6',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Justice Partners Legal',
                subheading: 'Modern law firm providing accessible, expert counsel for individuals and businesses',
                ctaText: 'Schedule Consultation',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'features-6',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Do',
                subheading: 'Comprehensive legal services for modern needs',
                features: [
                  {
                    title: 'Business Law',
                    description: 'Formation, contracts, compliance, and business transitions',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Family Law',
                    description: 'Divorce, custody, and family matter representation',
                    icon: 'heart'
                  },
                  {
                    title: 'Employment Law',
                    description: 'Worker rights, contracts, and workplace issues',
                    icon: 'target'
                  },
                  {
                    title: 'Personal Injury',
                    description: 'Accident claims and compensation negotiations',
                    icon: 'shield'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488'
              }
            },
            {
              id: 'about-6',
              type: 'about',
              order: 2,
              content: {
                heading: 'About Justice Partners',
                text: 'Justice Partners was founded on the belief that excellent legal representation should be accessible and understandable. Our team of experienced attorneys combines deep legal expertise with a client-first approach. We believe in clear communication, transparent pricing, and real solutions to your legal challenges. Whether you\'re an individual facing a personal legal matter or a business navigating complex issues, we\'re here to help.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-6',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'What Clients Say',
                testimonials: [
                  {
                    quote: 'They made the whole process clear and straightforward. Excellent service and fair pricing.',
                    author: 'Robert Mitchell',
                    role: 'Business Owner'
                  },
                  {
                    quote: 'Professional, compassionate, and they actually explained things in plain English. Highly recommend.',
                    author: 'Amanda Torres',
                    role: 'Individual Client'
                  },
                  {
                    quote: 'Justice Partners is exactly what modern law firms should be. Accessible, tech-savvy, and genuinely helpful.',
                    author: 'David Kumar',
                    role: 'Startup Founder'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488'
              }
            },
            {
              id: 'cta-6',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Need Legal Help?',
                subheading: 'Get answers from experienced attorneys. First consultation included.',
                ctaText: 'Request Consultation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#0D9488',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#FFFFFF'
              }
            },
            {
              id: 'footer-6',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Justice Partners Legal',
                tagline: 'Expert counsel. Plain English. Fair pricing.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@justicepartners.com',
                phone: '+1 (555) 678-9012'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0D9488',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-6',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Story',
                subheading: 'Bringing accessibility and integrity to legal services',
                ctaText: 'Learn More',
                ctaLink: '#story',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'about-story-6',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Mission',
                text: 'Justice Partners was founded by attorneys who believed the legal profession needed to evolve. Too often, clients feel confused, intimidated, or overcharged by legal services. We\'re changing that. Our mission is to provide excellent legal representation that\'s transparent, accessible, and genuinely focused on your best interests. We use modern technology, clear communication, and fair pricing to deliver real value.',
                image: 'https://images.unsplash.com/photo-1552821081-7bcfc17241fd?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'lg'
              }
            },
            {
              id: 'team-6',
              type: 'team',
              order: 2,
              content: {
                heading: 'Our Team',
                members: [
                  {
                    name: 'Sarah Johnson',
                    role: 'Founder & Managing Attorney',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Christopher Lee',
                    role: 'Senior Attorney, Business Law',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Patricia Martinez',
                    role: 'Senior Attorney, Family Law',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488'
              }
            },
            {
              id: 'footer-about-6',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Justice Partners Legal',
                tagline: 'Expert counsel. Plain English. Fair pricing.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@justicepartners.com',
                phone: '+1 (555) 678-9012'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0D9488',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'practice-areas',
          name: 'practice-areas',
          slug: '/practice-areas',
          blocks: [
            {
              id: 'hero-practice-6',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Practice Areas',
                subheading: 'Experience across a wide range of legal matters',
                ctaText: 'Get Help',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'features-practice-6',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Expertise',
                subheading: 'Serving individuals and businesses',
                features: [
                  {
                    title: 'Business Services',
                    description: 'LLC formation, contracts, mergers, and business planning',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Family Matters',
                    description: 'Divorce, custody, adoption, and family support issues',
                    icon: 'heart'
                  },
                  {
                    title: 'Employment Issues',
                    description: 'Wrongful termination, discrimination, and wage disputes',
                    icon: 'target'
                  },
                  {
                    title: 'Personal Injury',
                    description: 'Car accidents, medical malpractice, and injury claims',
                    icon: 'shield'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488'
              }
            },
            {
              id: 'cta-practice-6',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Start Your Consultation',
                subheading: 'Clear answers from experienced attorneys. Transparent pricing.',
                ctaText: 'Contact Now',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#0D9488',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#FFFFFF'
              }
            },
            {
              id: 'footer-practice-6',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Justice Partners Legal',
                tagline: 'Expert counsel. Plain English. Fair pricing.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@justicepartners.com',
                phone: '+1 (555) 678-9012'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0D9488',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-6',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Schedule your consultation today',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'contact-6',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#F3F4F6',
                textColor: '#1F2937',
                padding: 'lg',
                accentColor: '#0D9488'
              }
            },
            {
              id: 'footer-contact-6',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Justice Partners Legal',
                tagline: 'Expert counsel. Plain English. Fair pricing.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Practice Areas', href: '/practice-areas' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@justicepartners.com',
                phone: '+1 (555) 678-9012'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#0D9488',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Beauty & Salon - Template A: Lumiere Salon
  {
    name: 'Lumiere Salon',
    description: 'High-end editorial salon with dark luxury aesthetic. Fashion-forward beauty and wellness.',
    industry_tags: ['beauty', 'salon', 'spa', 'wellness', 'luxury'],
    style_tags: ['luxury', 'dark', 'editorial', 'high-end', 'sophisticated'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-7',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Lumiere Salon',
                subheading: 'Luxury hair, makeup, and beauty services. Editorial excellence.',
                ctaText: 'Book Appointment',
                ctaLink: '/services',
                backgroundImage: 'https://images.unsplash.com/photo-1552183328-5fdc6b07c3a0?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'features-7',
              type: 'features',
              order: 1,
              content: {
                heading: 'Our Services',
                subheading: 'Curated beauty experiences',
                features: [
                  {
                    title: 'Hair Artistry',
                    description: 'Color, styling, and cutting by award-winning colorists',
                    icon: 'palette'
                  },
                  {
                    title: 'Makeup',
                    description: 'Editorial and bridal makeup for special occasions',
                    icon: 'camera'
                  },
                  {
                    title: 'Wellness',
                    description: 'Facials, massages, and skincare treatments',
                    icon: 'sun'
                  },
                  {
                    title: 'Consultation',
                    description: 'Personal beauty strategy and image consulting',
                    icon: 'monitor'
                  }
                ]
              },
              settings: {
                backgroundColor: '#2A2A2A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#F5E6CC'
              }
            },
            {
              id: 'about-7',
              type: 'about',
              order: 2,
              content: {
                heading: 'Lumiere Salon',
                text: 'Located in the heart of the city\'s luxury district, Lumiere Salon is a sanctuary for refined beauty. Our team of internationally trained stylists and beauty experts specializes in creating transformative looks that enhance your natural essence. With an emphasis on editorial technique, luxury products, and personalized service, we deliver beauty experiences that go beyond expectation.',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-7',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Client Reviews',
                testimonials: [
                  {
                    quote: 'An absolutely transformative experience. The team understood my vision perfectly and exceeded every expectation.',
                    author: 'Elena Sinclair',
                    role: 'Fashion Professional'
                  },
                  {
                    quote: 'The artistry here is unmatched. My hair has never looked or felt better. Highly recommend.',
                    author: 'Victoria Stone',
                    role: 'Executive'
                  },
                  {
                    quote: 'Lumiere isn\'t just a salon—it\'s an experience. Every detail is perfected, from the service to the space itself.',
                    author: 'Sophie Laurent',
                    role: 'Creative Director'
                  }
                ]
              },
              settings: {
                backgroundColor: '#2A2A2A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0'
              }
            },
            {
              id: 'cta-7',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Experience Luxury',
                subheading: 'Schedule your appointment with one of our expert stylists',
                ctaText: 'Reserve Your Time',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#C9A0A0',
                textColor: '#1A1A1A',
                padding: 'lg',
                accentColor: '#F5E6CC'
              }
            },
            {
              id: 'footer-7',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Lumiere Salon',
                tagline: 'Luxury beauty. Editorial excellence.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lumieresalon.com',
                phone: '+1 (555) 789-0123'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#C9A0A0',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-7',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Philosophy',
                subheading: 'Luxury, artistry, and personal transformation',
                ctaText: 'Book Now',
                ctaLink: '/services',
                backgroundImage: 'https://images.unsplash.com/photo-1552183328-5fdc6b07c3a0?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'about-story-7',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Approach',
                text: 'At Lumiere Salon, we believe beauty is a form of art. Each client receives personalized attention and custom techniques tailored to their unique features and desires. Our stylists stay at the forefront of international beauty trends while maintaining classic, timeless sensibilities. We use only the finest products and invest in ongoing professional development to deliver consistently outstanding results.',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#2A2A2A',
                textColor: '#FFFFFF',
                padding: 'lg'
              }
            },
            {
              id: 'team-7',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet Our Stylists',
                members: [
                  {
                    name: 'Amelie Rousseau',
                    role: 'Director & Master Colorist',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Marcus Chen',
                    role: 'Senior Stylist & Hair Artist',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Isabella Santos',
                    role: 'Makeup Artist & Esthetician',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0'
              }
            },
            {
              id: 'footer-about-7',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Lumiere Salon',
                tagline: 'Luxury beauty. Editorial excellence.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lumieresalon.com',
                phone: '+1 (555) 789-0123'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#C9A0A0',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'services',
          name: 'services',
          slug: '/services',
          blocks: [
            {
              id: 'hero-services-7',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Premium beauty and wellness experiences',
                ctaText: 'Reserve',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1552183328-5fdc6b07c3a0?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'features-services-7',
              type: 'features',
              order: 1,
              content: {
                heading: 'Services & Specialties',
                subheading: 'Comprehensive beauty solutions',
                features: [
                  {
                    title: 'Color Services',
                    description: 'Balayage, highlights, color correction, and custom color creation',
                    icon: 'palette'
                  },
                  {
                    title: 'Cuts & Styling',
                    description: 'Precision cutting, styling, and special occasion hair',
                    icon: 'camera'
                  },
                  {
                    title: 'Treatments',
                    description: 'Facials, massages, body treatments, and skincare',
                    icon: 'sun'
                  },
                  {
                    title: 'Makeup Services',
                    description: 'Bridal makeup, editorial work, and special event makeup',
                    icon: 'monitor'
                  }
                ]
              },
              settings: {
                backgroundColor: '#2A2A2A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#F5E6CC'
              }
            },
            {
              id: 'cta-services-7',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Ready for Your Transformation?',
                subheading: 'Book your appointment with our expert team',
                ctaText: 'Schedule Now',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#C9A0A0',
                textColor: '#1A1A1A',
                padding: 'lg',
                accentColor: '#F5E6CC'
              }
            },
            {
              id: 'footer-services-7',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Lumiere Salon',
                tagline: 'Luxury beauty. Editorial excellence.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lumieresalon.com',
                phone: '+1 (555) 789-0123'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#C9A0A0',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-7',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Contact us to schedule your appointment',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1552183328-5fdc6b07c3a0?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0',
                overlayOpacity: 0.5
              }
            },
            {
              id: 'contact-7',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#2A2A2A',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#C9A0A0'
              }
            },
            {
              id: 'footer-contact-7',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Lumiere Salon',
                tagline: 'Luxury beauty. Editorial excellence.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@lumieresalon.com',
                phone: '+1 (555) 789-0123'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#C9A0A0',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  },

  // Beauty & Salon - Template B: Glow Studio
  {
    name: 'Glow Studio',
    description: 'Fresh, bright beauty studio with modern minimalist design. Youthful, approachable, and welcoming.',
    industry_tags: ['beauty', 'salon', 'spa', 'wellness', 'skincare'],
    style_tags: ['fresh', 'modern', 'bright', 'youthful', 'welcoming'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'home',
          slug: '/',
          blocks: [
            {
              id: 'hero-8',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Welcome to Glow Studio',
                subheading: 'Fresh beauty and skincare services in a bright, welcoming space',
                ctaText: 'Book Appointment',
                ctaLink: '/services',
                backgroundImage: 'https://images.unsplash.com/photo-1560066810-1cffb29fdf0f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'features-8',
              type: 'features',
              order: 1,
              content: {
                heading: 'What We Offer',
                subheading: 'Services for your glow',
                features: [
                  {
                    title: 'Skincare',
                    description: 'Facials, treatments, and personalized skincare routines',
                    icon: 'heart'
                  },
                  {
                    title: 'Hair Services',
                    description: 'Cuts, styling, and hair treatments to revitalize your look',
                    icon: 'camera'
                  },
                  {
                    title: 'Makeup',
                    description: 'Makeup application and beauty coaching',
                    icon: 'palette'
                  },
                  {
                    title: 'Wellness',
                    description: 'Massages, body treatments, and relaxation services',
                    icon: 'sun'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F7F6',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066'
              }
            },
            {
              id: 'about-8',
              type: 'about',
              order: 2,
              content: {
                heading: 'About Glow Studio',
                text: 'Glow Studio is dedicated to making premium beauty services feel accessible and approachable. Our team of licensed professionals is passionate about helping you look and feel your best. We believe in personalized service, using clean beauty products, and creating an environment where you can relax and renew. Whether you\'re here for a quick refresh or a complete transformation, we\'re excited to help you shine.',
                image: 'https://images.unsplash.com/photo-1560066810-1cffb29fdf0f?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg'
              }
            },
            {
              id: 'testimonials-8',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Happy Clients',
                testimonials: [
                  {
                    quote: 'The entire experience was amazing. The team is so friendly and skilled. My skin has never looked better!',
                    author: 'Jessica Park',
                    role: 'Client'
                  },
                  {
                    quote: 'Finally found a place that makes beauty services feel accessible and fun. Highly recommend!',
                    author: 'Amanda Lewis',
                    role: 'Client'
                  },
                  {
                    quote: 'Professional service, affordable prices, and a genuinely welcoming space. Perfect!',
                    author: 'Michelle Garcia',
                    role: 'Client'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F7F6',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066'
              }
            },
            {
              id: 'cta-8',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Glow?',
                subheading: 'Schedule your appointment today and discover your best self',
                ctaText: 'Book Now',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#F97066',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#E9E4F0'
              }
            },
            {
              id: 'footer-8',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Glow Studio',
                tagline: 'Fresh beauty. Bright space. Happy clients.',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@glowstudio.com',
                phone: '+1 (555) 890-1234'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#F97066',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'about',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about-8',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Story',
                subheading: 'Making beauty accessible, one client at a time',
                ctaText: 'Explore Services',
                ctaLink: '/services',
                backgroundImage: 'https://images.unsplash.com/photo-1560066810-1cffb29fdf0f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'about-story-8',
              type: 'about',
              order: 1,
              content: {
                heading: 'Our Philosophy',
                text: 'Glow Studio was founded on the belief that everyone deserves access to great beauty services without judgment, intimidation, or excessive cost. We created a space that feels inclusive, modern, and welcoming to all. Our talented team stays current with the latest skincare science and beauty trends, ensuring you get both expert guidance and real results. We\'re committed to helping you feel confident and beautiful.',
                image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F8F7F6',
                textColor: '#2D3436',
                padding: 'lg'
              }
            },
            {
              id: 'team-8',
              type: 'team',
              order: 2,
              content: {
                heading: 'Meet the Team',
                members: [
                  {
                    name: 'Natasha Rivera',
                    role: 'Founder & Master Esthetician',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Kayla Thompson',
                    role: 'Hair Specialist & Stylist',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                  },
                  {
                    name: 'Sofia Martinez',
                    role: 'Makeup Artist & Beauty Coach',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066'
              }
            },
            {
              id: 'footer-about-8',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Glow Studio',
                tagline: 'Fresh beauty. Bright space. Happy clients.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@glowstudio.com',
                phone: '+1 (555) 890-1234'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#F97066',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'services',
          name: 'services',
          slug: '/services',
          blocks: [
            {
              id: 'hero-services-8',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Services',
                subheading: 'Everything you need to look and feel amazing',
                ctaText: 'Reserve Spot',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1560066810-1cffb29fdf0f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'pricing-8',
              type: 'pricing',
              order: 1,
              content: {
                heading: 'Service Packages',
                plans: [
                  {
                    name: 'Facial',
                    price: '$65-120',
                    features: [
                      'Customized facial treatment',
                      'Skin assessment & analysis',
                      'Hydrating or clarifying masks',
                      'Personalized skincare advice'
                    ]
                  },
                  {
                    name: 'Hair Service',
                    price: '$75-180',
                    features: [
                      'Professional haircut & style',
                      'Color services available',
                      'Conditioning treatments',
                      'Style consultation'
                    ]
                  },
                  {
                    name: 'Wellness Package',
                    price: '$95-250',
                    features: [
                      'Massage or body treatment',
                      'Facial or hair service',
                      'Aromatherapy experience',
                      'Complete relaxation package'
                    ]
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F7F6',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066'
              }
            },
            {
              id: 'cta-services-8',
              type: 'cta',
              order: 2,
              content: {
                heading: 'Let\'s Get You Glowing',
                subheading: 'Book your appointment and experience the Glow difference',
                ctaText: 'Schedule Now',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#F97066',
                textColor: '#FFFFFF',
                padding: 'lg',
                accentColor: '#E9E4F0'
              }
            },
            {
              id: 'footer-services-8',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Glow Studio',
                tagline: 'Fresh beauty. Bright space. Happy clients.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@glowstudio.com',
                phone: '+1 (555) 890-1234'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#F97066',
                padding: 'lg'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact-8',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Ready to book your glow-up? Contact us today.',
                ctaText: 'Send Message',
                ctaLink: '#form',
                backgroundImage: 'https://images.unsplash.com/photo-1560066810-1cffb29fdf0f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066',
                overlayOpacity: 0.2
              }
            },
            {
              id: 'contact-8',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Form',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#F8F7F6',
                textColor: '#2D3436',
                padding: 'lg',
                accentColor: '#F97066'
              }
            },
            {
              id: 'footer-contact-8',
              type: 'footer',
              order: 2,
              content: {
                companyName: 'Glow Studio',
                tagline: 'Fresh beauty. Bright space. Happy clients.',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Privacy', href: '/privacy' }
                ],
                email: 'hello@glowstudio.com',
                phone: '+1 (555) 890-1234'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#F97066',
                padding: 'lg'
              }
            }
          ]
        }
      ]
    }
  }
];
