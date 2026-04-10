import type { SeedTemplate } from '../seed-templates';

export const yogaTemplate: SeedTemplate = {
  name: 'PureYoga',
  description: 'Serene yoga studio template with class listings, benefit grid, pricing plans, testimonials, and contact form. Earthy green palette with elegant serif typography.',
  industry_tags: ['Yoga', 'Wellness', 'Mindfulness'],
  style_tags: ['Serene', 'Earthy', 'Elegant'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'yoga',
  template_data: {
    pages: [
      {
        id: 'yoga-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'yoga-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Find stillness within movement',
              subheading: 'Expert-led yoga classes for all levels \u2014 from gentle restorative sessions to dynamic vinyasa flows.',
              ctaText: 'Book a Class',
              ctaLink: '#classes',
              backgroundImage: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#F4F7F0',
              textColor: '#1A2E1A',
              padding: '120px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-stats',
            type: 'stats',
            order: 1,
            content: {
              stats: [
                { value: '12+', label: 'Years of practice' },
                { value: '2400+', label: 'Happy students' },
                { value: '38', label: 'Weekly classes' },
                { value: '14', label: 'Expert instructors' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A2E1A',
              padding: '64px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'Yoga as a way of life',
              text: 'At PureYoga, we believe yoga is more than a practice \u2014 it\'s a path. Whether you\'re stepping onto the mat for the first time or deepening a lifelong journey, our studio offers a space to breathe, grow, and connect. With over a decade of wellness, our certified instructors guide you through mindful practice with care and expertise.',
              image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
            },
            settings: {
              backgroundColor: '#F4F7F0',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-classes',
            type: 'features',
            order: 3,
            content: {
              heading: 'Classes for every journey',
              subheading: 'From your very first sun salutation to advanced flow sequences, we have a class that meets you where you are.',
              features: [
                { title: 'Vinyasa Flow', description: 'Dynamic sequences linking breath to movement for strength and flexibility.', icon: 'zap' },
                { title: 'Yin Yoga', description: 'Long-held poses targeting deep connective tissue for profound release.', icon: 'heart' },
                { title: 'Hatha Basics', description: 'Foundational postures and alignment principles for new practitioners.', icon: 'star' },
                { title: 'Power Yoga', description: 'A vigorous, fitness-based approach building core strength and endurance.', icon: 'shield' },
                { title: 'Restorative', description: 'Deeply restful practice using props for complete nervous system reset.', icon: 'sparkles' },
                { title: 'Meditation', description: 'Guided mindfulness and breathwork to cultivate inner stillness.', icon: 'settings' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-benefits',
            type: 'features',
            order: 4,
            content: {
              heading: 'Transform from the inside out',
              subheading: 'Discover the holistic benefits of a regular yoga practice.',
              features: [
                { title: 'Flexibility', description: 'Increase range of motion and ease of movement in daily life.', icon: 'sparkles' },
                { title: 'Strength', description: 'Build functional muscle tone through bodyweight resistance.', icon: 'shield' },
                { title: 'Breathwork', description: 'Master pranayama techniques for calm and focus.', icon: 'heart' },
                { title: 'Better Sleep', description: 'Regulate your nervous system for deeper, more restful nights.', icon: 'star' },
                { title: 'Mental Clarity', description: 'Reduce anxiety and sharpen focus through mindful practice.', icon: 'zap' },
                { title: 'Community', description: 'Find your tribe in a supportive, judgment-free environment.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#F4F7F0',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-pricing',
            type: 'pricing',
            order: 5,
            content: {
              heading: 'Choose your path',
              subheading: 'Flexible plans designed to support your practice at every stage of the journey.',
              plans: [
                {
                  name: 'Drop-In',
                  price: '$22',
                  description: 'Perfect for visitors or those exploring different styles.',
                  features: ['Single class access', 'Any class type', 'Mat rental included'],
                },
                {
                  name: 'Monthly',
                  price: '$99/mo',
                  description: 'Our most popular option for dedicated practitioners.',
                  features: ['Unlimited classes', 'Priority booking', 'Guest passes', 'Workshop discounts'],
                  highlighted: true,
                },
                {
                  name: 'Annual',
                  price: '$180/mo',
                  description: 'Flexible access that fits your schedule and lifestyle.',
                  features: ['Unlimited classes', 'Priority booking', 'Free guest passes', 'All workshops included', 'Retail discounts'],
                },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Begin your journey today',
              subheading: 'Your first class is on us. No experience needed \u2014 just show up and breathe.',
              ctaText: 'Book Free Class',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#4A7C59',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#C4A882',
            },
          },
          {
            id: 'yoga-testimonials',
            type: 'testimonials',
            order: 7,
            content: {
              heading: 'Stories from our community',
              testimonials: [
                { quote: 'PureYoga transformed my relationship with my body. The instructors create such a welcoming, judgment-free space that makes every class feel special.', author: 'Sarah M.', role: 'Member since 2021' },
                { quote: 'I came for the yoga and stayed for the community. The variety of classes means I never get bored, and the teachers are incredibly knowledgeable.', author: 'James R.', role: 'Member since 2022' },
                { quote: 'After years of stress and tension, the restorative classes at PureYoga have been life-changing. I sleep better and feel more centered than ever.', author: 'Elena K.', role: 'Member since 2023' },
              ],
            },
            settings: {
              backgroundColor: '#F4F7F0',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-contact',
            type: 'contact',
            order: 8,
            content: {
              heading: 'Come find us',
              subheading: 'We\'d love to welcome you to our studio. Drop us a message or just show up.',
              email: 'hello@pureyoga.com',
              phone: '(555) 789-0123',
              address: '48 Serenity Lane, Portland, OR 97201',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A2E1A',
              padding: '80px 0',
              accentColor: '#4A7C59',
            },
          },
          {
            id: 'yoga-footer',
            type: 'footer',
            order: 9,
            content: {
              companyName: 'PureYoga',
              tagline: 'A sanctuary of movement and mindfulness in the heart of the city.',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Classes', href: '/classes' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@pureyoga.com',
              phone: '(555) 789-0123',
            },
            settings: {
              backgroundColor: '#1A2E1A',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#4A7C59',
            },
          },
        ],
      },
    ],
  },
};
