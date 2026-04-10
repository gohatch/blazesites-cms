import type { SeedTemplate } from '../seed-templates';

export const gymDarkTemplate: SeedTemplate = {
  name: 'FiTusion',
  description: 'Dark premium gym template with neon green accent, program showcase, trainer profiles, and newsletter. High-energy and bold.',
  industry_tags: ['Fitness', 'Gym', 'Training'],
  style_tags: ['Dark', 'Bold', 'Neon Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'gym-dark',
  template_data: {
    pages: [
      {
        id: 'gym-dark-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'gym-dark-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Sculpt Your Body, Elevate Your Spirit',
              subheading: 'Transform your physique with cutting-edge training programs, expert coaches, and a community that pushes your limits.',
              ctaText: 'Start Training',
              ctaLink: '#programs',
              backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#0A0A0A',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-features',
            type: 'features',
            order: 1,
            content: {
              heading: 'Inspired to Inspire Your Best Self',
              subheading: 'A fully equipped, modern training environment designed for maximum performance output.',
              features: [
                { title: 'Nutrition Guidance', description: 'Personalized meal plans and dietary advice tailored to your fitness goals and body type.', icon: 'heart' },
                { title: 'Expert Trainers', description: 'Certified professionals with years of experience helping athletes reach peak performance.', icon: 'users' },
                { title: 'Progress Tracking', description: 'Advanced analytics and real-time metrics to monitor your gains and optimize every workout.', icon: 'star' },
                { title: 'Premium Membership', description: 'Exclusive access to state-of-the-art equipment, spa facilities, and VIP training zones.', icon: 'shield' },
                { title: 'Community Support', description: 'Join a motivated network of fitness enthusiasts who inspire and challenge each other daily.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'Discover What Sets Us Apart',
              text: 'We combine cutting-edge science with passionate coaching to create training experiences that deliver real, lasting results. Our state-of-the-art facility features the latest equipment, dedicated training zones, and a supportive atmosphere where every member can thrive.',
              image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
            },
            settings: {
              backgroundColor: '#0A0A0A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-programs',
            type: 'features',
            order: 3,
            content: {
              heading: 'Train Smarter, Unleash Your Potential',
              subheading: 'From barbell basics to advanced conditioning, we have a program for every fitness level.',
              features: [
                { title: 'Barbell Basics', description: 'Master the fundamentals of barbell training for a solid strength foundation.', icon: 'zap' },
                { title: 'Kettlebell Masterclass', description: 'Dynamic kettlebell flows for explosive power and total-body conditioning.', icon: 'zap' },
                { title: 'Cardio Power Boost', description: 'Heart-pumping cardio sessions to elevate your endurance and stamina.', icon: 'heart' },
                { title: 'Hypertrophy', description: 'Volume-based training protocols designed to maximize muscle growth.', icon: 'star' },
                { title: 'Rope Climbing', description: 'Build grip strength, upper body power, and mental toughness.', icon: 'shield' },
                { title: 'TRX Suspension', description: 'Suspension training for core stability, balance, and lean muscle.', icon: 'settings' },
              ],
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-team',
            type: 'team',
            order: 4,
            content: {
              heading: 'Your Fitness Goals, Their Expertise',
              subheading: 'Our certified trainers bring passion, expertise, and dedication to help you reach your full potential.',
              members: [
                { name: 'Marcus Stone', role: 'Strength & Conditioning', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&q=80' },
                { name: 'Alexa Rivera', role: 'HIIT & Cardio Specialist', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80' },
                { name: 'James Chen', role: 'Nutrition & Wellness Coach', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#0A0A0A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'Your Success Stories, Our Inspiration',
              testimonials: [
                { quote: 'FiTusion completely transformed my approach to fitness. The trainers are incredibly knowledgeable and the atmosphere pushes you to give your absolute best every session.', author: 'David Harmon', role: 'Member since 2022' },
                { quote: 'I\'ve tried dozens of gyms over the years, but nothing comes close to the experience at FiTusion. The combination of expert coaching and premium facilities is unmatched.', author: 'Sarah Mitchell', role: 'Member since 2021' },
              ],
            },
            settings: {
              backgroundColor: '#111111',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Connect. Engage. Transform.',
              subheading: 'Join our community and get exclusive access to workout tips, nutrition guides, and special member offers.',
              ctaText: 'Join Now',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0A0A0A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B5FF00',
            },
          },
          {
            id: 'gym-dark-footer',
            type: 'footer',
            order: 7,
            content: {
              companyName: 'FiTusion',
              tagline: 'Premium fitness center delivering world-class training, expert coaching, and a community that pushes you to your peak performance.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Programs', href: '/programs' },
                { label: 'Trainers', href: '/trainers' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@fitusion.com',
              phone: '(555) 345-6789',
            },
            settings: {
              backgroundColor: '#0A0A0A',
              textColor: '#888888',
              padding: '48px 0',
              accentColor: '#B5FF00',
            },
          },
        ],
      },
    ],
  },
};
