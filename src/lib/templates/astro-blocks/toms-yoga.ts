import type { SeedTemplate } from '../seed-templates';

export const tomsYogaTemplate: SeedTemplate = {
  name: "Tom's Yoga Studio",
  description: 'Serene yoga studio template with organic tones, class listings, benefit cards, pricing tiers, testimonials, and contact form. Warm and inviting.',
  industry_tags: ['Yoga', 'Wellness', 'Fitness'],
  style_tags: ['Organic', 'Warm', 'Serene'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'toms-yoga',
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
              subheading: 'A welcoming yoga studio offering mindful movement and meditation practices for all levels. We create a sacred space where you can reconnect with your body, breath, and inner wisdom.',
              ctaText: 'Book a Class',
              ctaLink: '#pricing',
              backgroundImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#FEFFFE',
              textColor: '#2D3436',
              padding: '120px 0',
              accentColor: '#7C9885',
            },
          },
          {
            id: 'yoga-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'A Space for Healing and Growth',
              text: 'Our studio is a sanctuary where movement meets mindfulness. Whether you are a seasoned practitioner or stepping onto the mat for the first time, our classes are designed to meet you exactly where you are. We blend ancient wisdom with modern understanding to create transformative experiences that nurture your body, calm your mind, and uplift your spirit.',
              image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
            },
            settings: {
              backgroundColor: '#FEFFFE',
              textColor: '#2D3436',
              padding: '80px 0',
              accentColor: '#7C9885',
            },
          },
          {
            id: 'yoga-classes',
            type: 'features',
            order: 2,
            content: {
              heading: 'Classes for every journey',
              subheading: 'From gentle restorative sessions to dynamic vinyasa flows, find the practice that speaks to you.',
              features: [
                { title: 'Hatha Yoga', description: 'A gentle, foundational practice focusing on basic postures and breathing techniques. Perfect for beginners.', icon: 'heart' },
                { title: 'Vinyasa Flow', description: 'Dynamic, breath-linked movement sequences that build strength, flexibility, and inner heat.', icon: 'zap' },
                { title: 'Restorative Yoga', description: 'Deeply relaxing practice using props to support the body in restful poses for complete renewal.', icon: 'sparkles' },
                { title: 'Yin Yoga', description: 'Slow-paced practice with long-held floor poses targeting deep connective tissues and joints.', icon: 'star' },
                { title: 'Prenatal Yoga', description: 'Safe, nurturing practice designed for expecting mothers at every stage of pregnancy.', icon: 'shield' },
                { title: 'Meditation & Breathwork', description: 'Guided sessions to cultivate mindfulness, reduce stress, and develop a sustainable meditation practice.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#F8F6F3',
              textColor: '#2D3436',
              padding: '80px 0',
              accentColor: '#7C9885',
            },
          },
          {
            id: 'yoga-benefits',
            type: 'features',
            order: 3,
            content: {
              heading: 'Transform from the inside out',
              subheading: 'Yoga offers benefits that extend far beyond the mat into every area of your life.',
              features: [
                { title: 'Build Strength', description: 'Develop functional strength through mindful movement and body awareness.', icon: 'zap' },
                { title: 'Reduce Stress', description: 'Find relief from daily tension through breath work and mindful practice.', icon: 'heart' },
                { title: 'Improve Heart Health', description: 'Gentle cardiovascular benefits from flowing movements and deep breathing.', icon: 'shield' },
                { title: 'Increase Flexibility', description: 'Safely improve mobility and range of motion at your own pace.', icon: 'star' },
                { title: 'Better Sleep', description: 'Relax your nervous system for deeper, more restorative rest.', icon: 'sparkles' },
                { title: 'Mental Clarity', description: 'Cultivate focus and emotional balance through meditation and mindfulness.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#FEFFFE',
              textColor: '#2D3436',
              padding: '80px 0',
              accentColor: '#E8B4A0',
            },
          },
          {
            id: 'yoga-stats',
            type: 'stats',
            order: 4,
            content: {
              stats: [
                { value: '847+', label: 'Students Guided' },
                { value: '12', label: 'Years Teaching' },
                { value: '26', label: 'Classes Weekly' },
                { value: '94%', label: 'Student Satisfaction' },
              ],
            },
            settings: {
              backgroundColor: '#7C9885',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#E8B4A0',
            },
          },
          {
            id: 'yoga-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'Stories from our community',
              testimonials: [
                { quote: 'Tom creates such a welcoming space where I feel safe to explore my practice. The gentle guidance has helped me find strength I never knew I had.', author: 'Sarah M.', role: 'Student since 2021' },
                { quote: 'As someone who was intimidated by yoga, Tom made me feel completely at ease. The classes have transformed both my body and my relationship with stress.', author: 'Michael K.', role: 'Student since 2020' },
                { quote: "The prenatal classes were a blessing during my pregnancy. Tom's thoughtful approach helped me stay connected to my body and prepared for motherhood.", author: 'Elena R.', role: 'Student since 2022' },
              ],
            },
            settings: {
              backgroundColor: '#F8F6F3',
              textColor: '#2D3436',
              padding: '80px 0',
              accentColor: '#7C9885',
            },
          },
          {
            id: 'yoga-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Ready to Begin Your Yoga Journey?',
              subheading: 'Step onto the mat and discover the transformative power of yoga. Your first class is on us.',
              ctaText: 'Schedule Visit',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#7C9885',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#E8B4A0',
            },
          },
          {
            id: 'yoga-contact',
            type: 'contact',
            order: 7,
            content: {
              heading: 'Come find us',
              text: "We'd love to welcome you to our studio. Drop in, say hello, or send us a message.",
              email: 'hello@tomsyoga.com',
              phone: '(555) 234-9876',
            },
            settings: {
              backgroundColor: '#FEFFFE',
              textColor: '#2D3436',
              padding: '80px 0',
              accentColor: '#7C9885',
            },
          },
          {
            id: 'yoga-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: "Tom's Yoga Studio",
              tagline: 'A welcoming yoga studio offering mindful movement and meditation practices for all levels.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Classes', href: '/classes' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@tomsyoga.com',
              phone: '(555) 234-9876',
            },
            settings: {
              backgroundColor: '#2D3436',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#7C9885',
            },
          },
        ],
      },
    ],
  },
};
