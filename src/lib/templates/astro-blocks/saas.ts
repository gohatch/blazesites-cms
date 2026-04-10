import type { SeedTemplate } from '../seed-templates';

export const saasTemplate: SeedTemplate = {
  name: 'Applex',
  description: 'Modern SaaS template with feature grid, product showcase, testimonials, and blog cards. Purple accent with clean typography.',
  industry_tags: ['SaaS', 'Technology', 'Software'],
  style_tags: ['Modern', 'Clean', 'Purple Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'saas',
  template_data: {
    pages: [
      {
        id: 'saas-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'saas-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'The ultimate project and collaboration tool',
              subheading: 'Enhance project discussions and structure information effortlessly with Applex, designed to boost collaboration, clarity, and productivity for teams.',
              ctaText: 'Get Started Free',
              ctaLink: '#pricing',
              backgroundImage: '',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '120px 0',
              accentColor: '#7C3AED',
            },
          },
          {
            id: 'saas-features',
            type: 'features',
            order: 1,
            content: {
              heading: 'Our Features',
              subheading: 'Everything you need to manage projects, collaborate with your team, and boost productivity.',
              features: [
                { title: 'Instant Sync', description: 'Applex creativity, innovation, and advanced technology to craft exceptional real-time collaboration.', icon: 'zap' },
                { title: 'Effortless Management', description: 'Effortlessly organize tasks, projects, and ideas to boost efficiency and stay on track.', icon: 'settings' },
                { title: 'Seamless Connectivity', description: 'Applex creativity, innovation, and advanced technology to craft exceptional digital solutions.', icon: 'users' },
                { title: 'Smart Analytics', description: 'Get real-time insights and data-driven recommendations to optimize your workflow.', icon: 'star' },
              ],
            },
            settings: {
              backgroundColor: '#FAFAFA',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#7C3AED',
            },
          },
          {
            id: 'saas-features-extended',
            type: 'features',
            order: 2,
            content: {
              heading: 'Diaries & Notepads',
              subheading: 'Merging creativity, innovation, and advanced technology to craft exceptional digital solutions.',
              features: [
                { title: 'Alerts & Schedules', description: 'Stay organized with smart reminders and automatic notification for daily productivity.', icon: 'phone' },
                { title: 'Customization & Design', description: 'Personalize your experience with custom themes, layouts, and styling options.', icon: 'palette' },
                { title: 'Activity Tracking', description: 'Monitor progress, deadlines, and milestones across all your projects.', icon: 'briefcase' },
                { title: 'Various Documents & Files', description: 'Effortlessly manage documents and files in one place.', icon: 'mail' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#7C3AED',
            },
          },
          {
            id: 'saas-cta',
            type: 'cta',
            order: 3,
            content: {
              heading: 'Start with Applex, unlock seamless productivity',
              subheading: 'Merging creativity, innovation, and advanced technology to craft exceptional digital solutions.',
              ctaText: 'Download for iOS',
              ctaLink: '#download',
            },
            settings: {
              backgroundColor: '#FAF5FF',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#7C3AED',
            },
          },
          {
            id: 'saas-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'Customer reviews',
              testimonials: [
                { quote: 'Applex transformed our team\'s collaboration and productivity with its intuitive interface and seamless integrations!', author: 'Sarah Johnson', role: 'Product Manager at InnovateTech' },
                { quote: 'The smart analytics feature alone has saved us 20 hours per week. Game changer for our remote team.', author: 'Michael Reeves', role: 'Engineering Lead at FlowStack' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#7C3AED',
            },
          },
          {
            id: 'saas-footer',
            type: 'footer',
            order: 5,
            content: {
              companyName: 'Applex',
              tagline: 'Enhance project discussions and structure information effortlessly with Applex, designed to boost collaboration, clarity, and productivity for teams.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@applex.io',
              phone: '(555) 456-7890',
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#7C3AED',
            },
          },
        ],
      },
    ],
  },
};
