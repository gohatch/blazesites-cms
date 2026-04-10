import type { SeedTemplate } from '../seed-templates';

export const gymModernTemplate: SeedTemplate = {
  name: 'Gymastic',
  description: 'Modern gym template with class showcase, trainer profiles, gallery, pricing plans, and testimonials. Clean dark design with lime accent.',
  industry_tags: ['Fitness', 'Gym', 'Classes'],
  style_tags: ['Modern', 'Dark', 'Lime Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'gym-modern',
  template_data: {
    pages: [
      {
        id: 'gym-modern-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'gym-modern-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Transform Your Body, Unleash Your Potential',
              subheading: 'Join our state-of-the-art facility with expert trainers, diverse classes, and a supportive community ready to help you achieve your fitness goals.',
              ctaText: 'Get Started',
              ctaLink: '#classes',
              backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-features',
            type: 'features',
            order: 1,
            content: {
              heading: 'What We Offer',
              subheading: 'From high-intensity training to mindful yoga, we have a class for every fitness level and goal.',
              features: [
                { title: 'Weightlifting', description: 'Build strength and muscle mass with our comprehensive weightlifting programs and premium equipment.', icon: 'zap' },
                { title: 'Zumba', description: 'High-energy dance fitness classes that make working out feel like a party.', icon: 'heart' },
                { title: 'Yoga', description: 'Find balance and flexibility through our expert-led yoga and mindfulness sessions.', icon: 'sparkles' },
                { title: 'CrossFit', description: 'Functional fitness training that builds strength, endurance, and agility.', icon: 'shield' },
                { title: 'Boxing', description: 'Learn proper technique while getting an intense full-body cardio workout.', icon: 'star' },
                { title: 'HIIT', description: 'Maximum results in minimum time with high-intensity interval training sessions.', icon: 'zap' },
              ],
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-team',
            type: 'team',
            order: 2,
            content: {
              heading: 'Meet Our Team',
              subheading: 'Our certified trainers bring passion, expertise, and dedication to help you reach your full potential.',
              members: [
                { name: 'Marcus Johnson', role: 'Head Trainer', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&q=80' },
                { name: 'Sarah Williams', role: 'Yoga Instructor', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-about',
            type: 'about',
            order: 3,
            content: {
              heading: 'See the Energy, Feel the Difference',
              text: 'Take a look inside our facility and see why our members love training with us. Our state-of-the-art equipment, clean modern spaces, and energetic atmosphere create the perfect environment for achieving your fitness goals.',
              image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-pricing',
            type: 'pricing',
            order: 4,
            content: {
              heading: 'Flexible Plans for Every Goal',
              subheading: 'Choose the plan that fits your lifestyle. No hidden fees, cancel anytime.',
              plans: [
                {
                  name: 'Starter Plan',
                  price: '$29/mo',
                  description: 'Great for beginners getting started on their fitness journey.',
                  features: ['Access to gym floor', 'Locker room access', '2 group classes/week', 'Basic fitness assessment'],
                },
                {
                  name: 'Transform Plan',
                  price: '$49/mo',
                  description: 'Our most popular plan for dedicated fitness enthusiasts.',
                  features: ['Unlimited gym access', 'All group classes', 'Personal training session', 'Nutrition consultation', '24/7 access'],
                  highlighted: true,
                },
              ],
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'What Our Members Say',
              testimonials: [
                { quote: 'Gymastic completely changed my approach to fitness. The trainers are incredibly supportive and the facilities are top-notch.', author: 'Alex Thompson', role: 'Member since 2023' },
                { quote: 'I\'ve been a member for over a year and the variety of classes keeps me motivated. Best gym experience I\'ve ever had.', author: 'Jessica Rivera', role: 'Member since 2022' },
                { quote: 'The 24/7 access is a game-changer for my schedule. Clean, modern equipment and a great community of people.', author: 'Ryan Mitchell', role: 'Member since 2024' },
                { quote: 'From the moment I joined, the staff made me feel welcome. The Transform Plan is worth every penny for the personal training alone.', author: 'Priya Sharma', role: 'Member since 2023' },
              ],
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Ready to Transform Your Fitness?',
              subheading: 'Join Gymastic today and take the first step toward a stronger, healthier you. Our team is ready to guide you every step of the way.',
              ctaText: 'Join Now',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#c8ff00',
            },
          },
          {
            id: 'gym-modern-footer',
            type: 'footer',
            order: 7,
            content: {
              companyName: 'Gymastic',
              tagline: 'A modern fitness center with 24/7 access, diverse classes, and experienced trainers.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Classes', href: '/classes' },
                { label: 'Trainers', href: '/trainers' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@gymastic.com',
              phone: '(555) 567-8901',
            },
            settings: {
              backgroundColor: '#0a0a0a',
              textColor: '#888888',
              padding: '48px 0',
              accentColor: '#c8ff00',
            },
          },
        ],
      },
    ],
  },
};
