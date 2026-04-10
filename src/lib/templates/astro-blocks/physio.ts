import type { SeedTemplate } from '../seed-templates';

export const physioTemplate: SeedTemplate = {
  name: 'Healex',
  description: 'Physiotherapy clinic template with service cards, benefit grid, team profiles, testimonials, and blog section. Warm green accent with clean design.',
  industry_tags: ['Physiotherapy', 'Healthcare', 'Wellness'],
  style_tags: ['Professional', 'Clean', 'Green Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'physio',
  template_data: {
    pages: [
      {
        id: 'physio-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'physio-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Specialized Care for Chronic Pain & Sports Injuries',
              subheading: 'We provide expert-led physiotherapy that helps you move better, recover faster, and live pain-free. Our licensed physiotherapists provide personalized care to help.',
              ctaText: 'Get Started',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80',
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '120px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-stats',
            type: 'stats',
            order: 1,
            content: {
              stats: [
                { value: '10K+', label: 'Successful Treatments Delivered' },
                { value: '99%', label: 'Patient Satisfaction Rate' },
                { value: '12+', label: 'Specialties or Conditions' },
              ],
            },
            settings: {
              backgroundColor: '#F5F9F5',
              textColor: '#1a1a1a',
              padding: '64px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-services',
            type: 'features',
            order: 2,
            content: {
              heading: 'Expert Physiotherapy Services',
              subheading: 'Our expert therapists specialize in comprehensive rehabilitation and recovery programs.',
              features: [
                { title: 'Musculoskeletal Physiotherapy', description: 'Our expert therapists specialize in the diagnosis and treatment of muscle, joint, and bone conditions.', icon: 'heart' },
                { title: 'Sports Injury Rehabilitation', description: 'Whether you\'re a weekend warrior or elite athlete, we help restore peak physical performance.', icon: 'zap' },
                { title: 'Post-Surgical Physiotherapy', description: 'Recovery-aiding physiotherapy after surgical procedures with personalized rehabilitation plans.', icon: 'shield' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-about',
            type: 'about',
            order: 3,
            content: {
              heading: 'Why Choose Healex For Your Recovery',
              text: 'Providing 200+ patients with effective and personalized rehabilitation services, our team of experienced physiotherapists create individualized treatment plans. Our team provides empathetic, patient-centered care with a holistic commitment to support your recovery. We believe trust is earned \u2014 that\'s your first step on your road to recovery and wellness.',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
            },
            settings: {
              backgroundColor: '#F5F9F5',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-benefits',
            type: 'features',
            order: 4,
            content: {
              heading: 'Discover The Life-Changing Power Of Physiotherapy',
              subheading: 'Programs tailored to your body, health goals, and lifestyle for optimal recovery.',
              features: [
                { title: 'Personalized Treatment Plans', description: 'Programs tailored to your body, health goals, and lifestyle for optimal recovery.', icon: 'settings' },
                { title: 'Faster Recovery Time', description: 'Evidence-based methods that speed up healing and get you back to full strength.', icon: 'zap' },
                { title: 'Improved Mobility & Function', description: 'Restore movement, balance, flexibility, strength, and coordination post-injury.', icon: 'heart' },
                { title: 'Greater Strength & Endurance', description: 'Build lasting resilience through progressive strengthening and conditioning.', icon: 'shield' },
                { title: 'Prevention of Future Injuries', description: 'We don\'t just treat the injury \u2014 we help you build resilience to prevent it happening again.', icon: 'star' },
                { title: 'Holistic Whole-Body Approach', description: 'We treat the body as a whole system, not just the area of pain or dysfunction.', icon: 'sparkles' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-team',
            type: 'team',
            order: 5,
            content: {
              heading: 'A Team You Can Trust With Your Health',
              subheading: 'Experienced professionals dedicated to your recovery and well-being.',
              members: [
                { name: 'Dr. Sarah Mitchell', role: 'Lead Physiotherapist', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80' },
                { name: 'Dr. James Noll', role: 'Sports Rehabilitation', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80' },
                { name: 'Dr. Stephanie', role: 'Musculoskeletal Specialist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=300&q=80' },
                { name: 'Dr. Bella Berry', role: 'Post-Surgical Recovery', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
                { name: 'Dr. Justin', role: 'Pain Management', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80' },
              ],
            },
            settings: {
              backgroundColor: '#F5F9F5',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-testimonials',
            type: 'testimonials',
            order: 6,
            content: {
              heading: 'What Our Patients Say',
              testimonials: [
                { quote: 'After years of chronic back pain, Healex gave me my life back. The personalized treatment plan was exactly what I needed.', author: 'Rebecca Anderson', role: 'Patient' },
                { quote: 'As a full-time desk worker, my neck and shoulder pain had become unbearable. Their postural correction program completely changed how I feel day-to-day.', author: 'Marcus Rivera', role: 'Patient' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#1B5E20',
            },
          },
          {
            id: 'physio-contact',
            type: 'contact',
            order: 7,
            content: {
              heading: 'Feel Better, Move Better. Reach Out To Us Today',
              subheading: 'Book your consultation and take the first step toward a pain-free life.',
              email: 'info@healex.com',
              phone: '(555) 678-9012',
              address: '123 Wellness Drive, Suite 200',
            },
            settings: {
              backgroundColor: '#1B5E20',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#ffffff',
            },
          },
          {
            id: 'physio-cta',
            type: 'cta',
            order: 8,
            content: {
              heading: 'Ready To Take The First Step Toward a Pain-Free Life?',
              subheading: 'We provide expert-led physiotherapy that helps you move better, recover faster, and live pain-free.',
              ctaText: 'Book Appointment',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#1B5E20',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#ffffff',
            },
          },
          {
            id: 'physio-footer',
            type: 'footer',
            order: 9,
            content: {
              companyName: 'Healex',
              tagline: 'We provide expert-led physiotherapy that helps you move better, recover faster, and live pain-free. Our licensed physiotherapists provide personalized care to help.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'info@healex.com',
              phone: '(555) 678-9012',
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#1B5E20',
            },
          },
        ],
      },
    ],
  },
};
