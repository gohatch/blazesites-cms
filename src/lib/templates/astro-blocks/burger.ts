import type { SeedTemplate } from '../seed-templates';

export const burgerTemplate: SeedTemplate = {
  name: 'BJORBUN',
  description: 'Bold burger joint template with dark teal tones, gold accents, signature burger showcase, and customer testimonials. Energetic and appetizing.',
  industry_tags: ['Burger', 'Fast Food', 'Restaurant'],
  style_tags: ['Bold', 'Dark', 'Gold Accent'],
  page_count: 4,
  template_type: 'astro',
  template_dir: 'burger',
  template_data: {
    pages: [
      {
        id: 'burger-home',
        name: 'Home',
        slug: '/',
        blocks: [
          {
            id: 'burger-hero',
            type: 'hero',
            order: 0,
            content: {
              heading: 'Crafted Burgers With Premium Taste',
              subheading: 'We don\'t just make burgers — we craft unforgettable flavor experiences using premium ingredients, bold recipes, and perfectly grilled patties in every bite.',
              ctaText: 'Explore Our Menu',
              ctaLink: '#menu',
              backgroundImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1400&q=80',
            },
            settings: {
              backgroundColor: '#0D4A4A',
              textColor: '#ffffff',
              padding: '120px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-signature',
            type: 'gallery',
            order: 1,
            content: {
              heading: 'Our Signature Burgers',
              subheading: 'Discover our most-loved burgers, crafted with premium ingredients and bold flavors that keep customers coming back for more.',
              images: [
                { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', alt: 'Cheese Lava Beast' },
                { src: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80', alt: 'Ultimate Drip Stack' },
                { src: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80', alt: 'Smoky Black Bun' },
              ],
            },
            settings: {
              backgroundColor: '#F5ECD7',
              textColor: '#0D4A4A',
              padding: '80px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-features',
            type: 'features',
            order: 2,
            content: {
              heading: 'Why People Love Our Burgers',
              subheading: 'We don\'t just make burgers — we craft unforgettable flavor experiences using premium ingredients, bold recipes, and perfectly grilled patties in every bite.',
              features: [
                { title: 'Fresh and Premium', description: 'We carefully select fresh, high-quality ingredients every day — from premium beef patties and crisp vegetables to soft freshly baked buns.', icon: 'star' },
                { title: 'Perfectly Grilled Every Time', description: 'Each burger is grilled to perfection using special techniques to lock in juiciness and create a delicious smoky aroma.', icon: 'zap' },
                { title: 'Fast & Friendly Service', description: 'Enjoy quick preparation without compromising quality, served by a team that cares about your experience.', icon: 'users' },
              ],
            },
            settings: {
              backgroundColor: '#ffffff',
              textColor: '#0D4A4A',
              padding: '80px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-menu',
            type: 'features',
            order: 3,
            content: {
              heading: 'Menu Preview',
              subheading: 'From juicy burgers to crispy fries and refreshing drinks, explore a taste of what awaits you at BJORBUN.',
              features: [
                { title: 'Signature Burgers', description: 'Our handcrafted burgers made with premium beef, fresh toppings, and house-made sauces.', icon: 'star' },
                { title: 'Fries & Sides', description: 'Crispy golden fries, onion rings, and other delicious sides to complement your meal.', icon: 'zap' },
                { title: 'Beverages', description: 'Refreshing drinks, milkshakes, and craft sodas to pair with your favorite burger.', icon: 'heart' },
              ],
            },
            settings: {
              backgroundColor: '#0D4A4A',
              textColor: '#ffffff',
              padding: '80px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-testimonials',
            type: 'testimonials',
            order: 4,
            content: {
              heading: 'What Our Customers Say',
              testimonials: [
                { quote: 'Hands down the best burger in town! The patties are super juicy and the cheese melts perfectly. I\'m officially addicted.', author: 'Dekatama Aditya Yapeo', role: 'Regular Customer' },
                { quote: 'The Cheese Lava Beast is insane — crispy on the outside, juicy on the inside, and that lava cheese is next level. Can\'t stop coming back.', author: 'Marcus Chen', role: 'Food Blogger' },
                { quote: 'Great burgers, great vibes, great people. BJORBUN is my new favorite spot for a weekend meal with friends.', author: 'Sarah Williams', role: 'Local Foodie' },
              ],
            },
            settings: {
              backgroundColor: '#F5ECD7',
              textColor: '#0D4A4A',
              padding: '80px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-cta',
            type: 'cta',
            order: 5,
            content: {
              heading: 'Come Enjoy With Us',
              subheading: 'Come enjoy juicy handcrafted burgers made with premium ingredients, served hot and fresh in a comfortable and welcoming space.',
              ctaText: 'Order Now',
              ctaLink: '#contact',
            },
            settings: {
              backgroundColor: '#0D4A4A',
              textColor: '#ffffff',
              padding: '96px 0',
              accentColor: '#C5A23E',
            },
          },
          {
            id: 'burger-footer',
            type: 'footer',
            order: 6,
            content: {
              companyName: 'BJORBUN',
              tagline: 'Serving freshly grilled, handcrafted burgers made with premium ingredients and bold flavors. Your go-to spot for juicy burgers, crispy fries, and great vibes every day.',
              links: [
                { label: 'Menu', href: '/menu' },
                { label: 'Testimonials', href: '/about' },
                { label: 'Services', href: '/about' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
              email: 'eat@bjorbun.com',
              phone: '(555) 678-9012',
            },
            settings: {
              backgroundColor: '#0D4A4A',
              textColor: '#cccccc',
              padding: '48px 0',
              accentColor: '#C5A23E',
            },
          },
        ],
      },
    ],
  },
};
