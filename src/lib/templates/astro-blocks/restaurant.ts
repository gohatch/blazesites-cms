import type { SeedTemplate } from '../seed-templates';

export const restaurantTemplate: SeedTemplate = {
  name: 'Drizzle.',
  description: 'Elegant restaurant template with warm cream tones, menu categories, photo gallery, reservation section, and customer reviews. Refined and inviting.',
  industry_tags: ['Restaurant', 'Dining', 'Food & Beverage'],
  style_tags: ['Elegant', 'Warm', 'Serif Typography'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'restaurant',
  template_data: {
    pages: [
      {
        id: 'restaurant-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'restaurant-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Experience the Language of Taste',
              subheading: 'Made with Love, Served with Joy. Blending tradition & innovation to create unforgettable dining experiences.',
              ctaText: 'Reserve a Table',
              ctaLink: '#contact',
              backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80',
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#1a1a1a',
              padding: '120px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-about',
            type: 'about',
            order: 1,
            content: {
              heading: 'Blending tradition & innovation to create unforgettable dining experiences',
              text: 'Experience the perfect harmony of heritage. We bring together time-honored culinary traditions with modern innovation, creating dishes that tell a story in every bite. Our kitchen is dedicated to sourcing the finest ingredients and crafting memorable meals for every guest.',
              image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-features',
            type: 'features',
            order: 2,
            content: {
              heading: 'Your next favorite meal awaits',
              subheading: 'Discover our menu of carefully crafted dishes',
              features: [
                { title: 'Main Course', description: 'Where bold flavors and perfect technique meet.', icon: 'star' },
                { title: 'Soups & Salads', description: 'Light, healthy, and packed with flavor.', icon: 'heart' },
                { title: 'Vegan & Vegetarian', description: 'Colorful creations inspired by nature.', icon: 'sparkles' },
                { title: 'Beverages / Drinks', description: 'Sip, savor, and refresh your senses.', icon: 'zap' },
              ],
            },
            settings: {
              backgroundColor: '#F5EDE3',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-gallery',
            type: 'gallery',
            order: 3,
            content: {
              heading: 'Taste the vibes through our gallery',
              subheading: 'A Feast for the Eyes',
              images: [
                { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', alt: 'Fried Rice' },
                { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80', alt: 'Burger' },
                { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', alt: 'Rice & Meat' },
                { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80', alt: 'Salad & Soup' },
                { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80', alt: 'Special Burger' },
                { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80', alt: 'Pasta' },
              ],
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-cta',
            type: 'cta',
            order: 4,
            content: {
              heading: 'Reserve your spot! ultimate joy of dining done right',
              subheading: 'Book your table today and experience an unforgettable evening of flavors, ambiance, and hospitality.',
              ctaText: 'Reserve Your Table',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#F5EDE3',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-testimonials',
            type: 'testimonials',
            order: 5,
            content: {
              heading: 'Where every visit becomes a great Memory',
              testimonials: [
                { quote: 'Every bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences I\'ve had in a long time.', author: 'Daniel Johnson', role: 'California, USA' },
                { quote: 'The staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients. Highly recommend the chef\'s special.', author: 'Sophia Lee', role: 'New York, USA' },
                { quote: 'We celebrated my parents\' anniversary here, and everything was perfect. From the decor to the desserts, it was an unforgettable evening.', author: 'Emily Carter', role: 'Texas, USA' },
              ],
            },
            settings: {
              backgroundColor: '#FAF7F2',
              textColor: '#1a1a1a',
              padding: '80px 0',
              accentColor: '#B91C1C',
            },
          },
          {
            id: 'restaurant-footer',
            type: 'footer',
            order: 6,
            content: {
              companyName: 'Drizzle.',
              tagline: 'No spam — just fresh updates, special offers, and mouthwatering news.',
              links: [
                { label: 'Home', href: '/' },
                { label: 'Our Menu', href: '/menu' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/about' },
                { label: 'Reservations', href: '/contact' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'hello@drizzle.com',
              phone: '(555) 345-6789',
            },
            settings: {
              backgroundColor: '#1a1a1a',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#B91C1C',
            },
          },
        ],
      },
    ],
  },
};
