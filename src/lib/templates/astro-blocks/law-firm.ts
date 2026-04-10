import type { SeedTemplate } from '../seed-templates';

export const lawFirmTemplate: SeedTemplate = {
  name: 'Sterling & Associates',
  description: 'Distinguished law firm template with navy and gold tones, practice areas, attorney profiles, case results, and client testimonials. Authoritative and trustworthy.',
  industry_tags: ['Law Firm', 'Legal', 'Attorney'],
  style_tags: ['Distinguished', 'Navy & Gold', 'Serif Typography'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'law-firm',
  template_data: {
    pages: [
      {
        id: 'lawfirm-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'lawfirm-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Justice. Integrity. Results.',
              subheading: 'For over 25 years, Sterling & Associates has been the trusted legal counsel for individuals and businesses across the state.',
              ctaText: 'Schedule Consultation',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            },
            settings: {
              backgroundColor: '#0C1B33',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-practice-areas',
            type: 'features',
            order: 1,
            content: {
              heading: 'Our Practice Areas',
              subheading: 'Comprehensive legal services tailored to your needs',
              features: [
                { title: 'Corporate Law', description: 'Comprehensive legal counsel for businesses of all sizes, from formation and governance to mergers, acquisitions, and compliance.', icon: 'building' },
                { title: 'Family Law', description: 'Compassionate yet determined advocacy in divorce, custody, adoption, and all matters affecting your family\'s future.', icon: 'users' },
                { title: 'Criminal Defense', description: 'Aggressive defense strategies protecting your freedom and reputation. Every case receives our full attention and resources.', icon: 'shield' },
                { title: 'Real Estate Law', description: 'Expert guidance through complex real estate transactions, disputes, zoning matters, and property development.', icon: 'home' },
                { title: 'Employment Law', description: 'Protecting the rights of employees and employers in workplace disputes, discrimination claims, and contract negotiations.', icon: 'briefcase' },
                { title: 'Personal Injury', description: 'Maximizing your compensation for injuries caused by negligence. No fees unless we win your case.', icon: 'heart' },
              ],
            },
            settings: {
              backgroundColor: '#F8F6F2',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-about',
            type: 'about',
            order: 2,
            content: {
              heading: 'A Legacy of Legal Excellence',
              text: 'We pursue the highest standard in every case, every brief, and every courtroom appearance. Honest counsel and transparent communication form the foundation of our practice. We treat every case as if it were our own, fighting tirelessly for our clients. Our track record speaks for itself — over 5,000 successful case outcomes.',
              image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-stats',
            type: 'stats',
            order: 3,
            content: {
              stats: [
                { value: '25+', label: 'Years of Experience' },
                { value: '5,000+', label: 'Cases Won' },
                { value: '98%', label: 'Success Rate' },
                { value: '45', label: 'Attorneys' },
              ],
            },
            settings: {
              backgroundColor: '#0C1B33',
              textColor: '#ffffff',
              padding: '64px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-team',
            type: 'team',
            order: 4,
            content: {
              heading: 'Meet Our Legal Team',
              members: [
                { name: 'Jonathan Sterling', role: 'Founding Partner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
                { name: 'Victoria Chen', role: 'Senior Partner, Family Law', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
                { name: 'Marcus Thompson', role: 'Partner, Criminal Defense', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
                { name: 'Elena Rodriguez', role: 'Partner, Personal Injury', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#F8F6F2',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'What Our Clients Say',
              testimonials: [
                { quote: 'Sterling & Associates didn\'t just win my case — they gave me my life back. Jonathan and his team were available around the clock and never wavered in their commitment.', author: 'Robert M.', role: 'Personal Injury Client' },
                { quote: 'When our company faced a complex merger challenge, Victoria\'s expertise and strategic thinking saved us millions. I wouldn\'t trust anyone else with our legal matters.', author: 'Sarah K.', role: 'Corporate Client, CEO' },
                { quote: 'Marcus Thompson is the reason I\'m a free man today. His courtroom presence is unmatched, and his preparation is meticulous. Truly the best defense attorney in the state.', author: 'David L.', role: 'Criminal Defense Client' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-cta',
            type: 'cta',
            order: 6,
            content: {
              heading: 'Schedule Your Free Consultation',
              subheading: 'Take the first step toward resolving your legal matter. Our experienced attorneys are ready to listen and provide expert guidance.',
              ctaText: 'Schedule Consultation',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0C1B33',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-contact',
            type: 'contact',
            order: 7,
            content: {
              heading: 'Get in Touch',
              fields: ['name', 'email', 'phone', 'service', 'message'],
            },
            settings: {
              backgroundColor: '#F8F6F2',
              textColor: '#1A1A2E',
              padding: '80px 0',
              accentColor: '#C9A84C',
            },
          },
          {
            id: 'lawfirm-footer',
            type: 'footer',
            order: 8,
            content: {
              companyName: 'Sterling & Associates',
              tagline: 'For over 25 years, Sterling & Associates has been the trusted legal counsel for individuals and businesses across the state.',
              links: [
                { label: 'Practice Areas', href: '#practice-areas' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ],
              email: 'contact@sterlinglaw.com',
              phone: '(555) 892-4500',
            },
            settings: {
              backgroundColor: '#0C1B33',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#C9A84C',
            },
          },
        ],
      },
    ],
  },
};
