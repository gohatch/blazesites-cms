import type { TemplateData } from '@/types';

export const batch2Templates: Array<{
  name: string;
  description: string;
  industry_tags: string[];
  style_tags: string[];
  page_count: number;
  template_data: TemplateData;
}> = [
  // RESTAURANT & HOSPITALITY - COASTAL KITCHEN
  {
    name: 'Coastal Kitchen',
    description: 'Modern coastal dining experience with farm-to-sea elegance',
    industry_tags: ['Restaurant', 'Hospitality', 'Fine Dining'],
    style_tags: ['Coastal', 'Modern', 'Fresh', 'Breezy'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Coastal Kitchen',
                subheading: 'Farm-to-sea dining in a modern coastal setting',
                ctaText: 'Reserve Your Table',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1504674900897-22e076901d33?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '120px 40px',
                overlayOpacity: 0.3,
                accentColor: '#E8775D'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 1,
              content: {
                heading: 'Why Dine With Us',
                subheading: 'Experience the perfect blend of local ingredients and coastal charm',
                features: [
                  {
                    title: 'Seasonal Menu',
                    description: 'Locally sourced seafood and produce, changing with the seasons',
                    icon: 'star'
                  },
                  {
                    title: 'Ocean Views',
                    description: 'Panoramic seating overlooking the coast with sunset dining',
                    icon: 'sun'
                  },
                  {
                    title: 'Expert Sommelier',
                    description: 'Curated wine selection featuring coastal region varietals',
                    icon: 'target'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                accentColor: '#E8775D',
                borderRadius: '8px'
              }
            },
            {
              id: 'about-1',
              type: 'about',
              order: 2,
              content: {
                heading: 'Our Story',
                text: 'Founded in 2019, Coastal Kitchen began as Chef Marcus Williams\' dream to bring authentic farm-to-sea dining to the coast. Sourcing ingredients from local fishermen and farmers within a 50-mile radius, we create dishes that celebrate the region\'s natural bounty. Every plate tells a story of the land and sea that surrounds us.',
                image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Guest Experiences',
                testimonials: [
                  {
                    quote: 'The freshest seafood we\'ve ever had. Every dish was a revelation of flavor and technique.',
                    author: 'Sarah Mitchell',
                    role: 'Food Writer'
                  },
                  {
                    quote: 'Service was impeccable, the ambiance magical, and the food unforgettable. We\'re already planning our return.',
                    author: 'James Chen',
                    role: 'Restaurant Critic'
                  },
                  {
                    quote: 'A hidden gem. The chef\'s attention to ingredient quality is evident in every bite.',
                    author: 'Elena Rodriguez',
                    role: 'Culinary Director'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                accentColor: '#E8775D',
                borderRadius: '8px'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Experience Coastal Kitchen?',
                subheading: 'Reserve your table for an unforgettable dining experience',
                ctaText: 'Book Now',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#1A3A5C',
                textColor: '#F5F0E8',
                padding: '80px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Coastal Kitchen',
                tagline: 'Farm-to-sea dining with a view',
                links: [
                  { label: 'Menu', href: '/menu' },
                  { label: 'About', href: '/about' },
                  { label: 'Reservations', href: '/contact' },
                  { label: 'Private Events', href: '/contact' }
                ],
                email: 'reservations@coastalkitchen.com',
                phone: '+1 (555) 238-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E8',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'menu',
          name: 'Menu',
          slug: '/menu',
          blocks: [
            {
              id: 'hero-menu',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Menu',
                subheading: 'Seasonal dishes crafted from the finest local ingredients',
                ctaText: 'Reserve a Table',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                overlayOpacity: 0.3,
                accentColor: '#E8775D'
              }
            },
            {
              id: 'text-menu',
              type: 'text',
              order: 1,
              content: {
                heading: 'Appetizers',
                text: 'Littleneck Clams - Daily selection, mignonette & lemon\nDay Catch Crudo - Thin-sliced with citrus ponzu & jalapeño\nSmoked Mackerel - House-cured, horseradish cream, heirloom toast\nBeacon Farm Greens - Seasonal lettuces, local goat cheese, coastal herbs'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3A5C',
                padding: '60px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'text-entrees',
              type: 'text',
              order: 2,
              content: {
                heading: 'Entrées',
                text: 'Line-Caught Halibut - Brown butter, capers, seasonal vegetables\nLocal Lobster - Market price, garlic, white wine sauce, fingerling potatoes\nPan-Seared Diver Scallops - Cauliflower purée, crispy sage, brown butter foam\nGrass-Fed Ribeye - Herb butter, roasted root vegetables, sea salt'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '60px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'footer-menu',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Coastal Kitchen',
                tagline: 'Farm-to-sea dining with a view',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'reservations@coastalkitchen.com',
                phone: '+1 (555) 238-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E8',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Coastal Kitchen',
                subheading: 'A culinary journey rooted in local tradition',
                ctaText: 'Book a Table',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                overlayOpacity: 0.3,
                accentColor: '#E8775D'
              }
            },
            {
              id: 'text-about',
              type: 'text',
              order: 1,
              content: {
                heading: 'Chef & Philosophy',
                text: 'Chef Marcus Williams spent over a decade working in Michelin-starred kitchens across Europe before returning to his coastal hometown with a vision: to create food that celebrates local producers and seasonal rhythms. Every ingredient on our menu is chosen with intention, sourced from farmers and fishermen we trust and respect. We believe that great food begins with great ingredients, and great ingredients come from those who understand the land and sea.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3A5C',
                padding: '60px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'text-team',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Team',
                text: 'Our front-of-house team brings genuine warmth and expertise to every service. From sommelier recommendations to dietary accommodations, we\'re dedicated to making your evening memorable. Our kitchen staff includes some of the most talented young chefs on the coast, each bringing their own creativity while honoring Chef Marcus\'s vision of ingredient-driven cooking.'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '60px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Coastal Kitchen',
                tagline: 'Farm-to-sea dining with a view',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'Reservations', href: '/contact' },
                  { label: 'Events', href: '/contact' }
                ],
                email: 'reservations@coastalkitchen.com',
                phone: '+1 (555) 238-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E8',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact & Reservations',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Reservations',
                subheading: 'Join us for an unforgettable coastal dining experience',
                ctaText: 'Reserve Now',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800bb1?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                overlayOpacity: 0.3,
                accentColor: '#E8775D'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Book Your Table',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Request Reservation'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3A5C',
                padding: '80px 40px',
                accentColor: '#E8775D',
                borderRadius: '8px'
              }
            },
            {
              id: 'text-info',
              type: 'text',
              order: 2,
              content: {
                heading: 'Dining Details',
                text: 'Hours: Tuesday - Sunday, 5:00 PM - 11:00 PM (Closed Mondays)\nParty Size: 2-10 guests per reservation\nPrivate Events: Available for groups of 10+\nDress Code: Smart casual\nLocation: 432 Oceanview Drive, Coastal Bay, CA 94040'
              },
              settings: {
                backgroundColor: '#F5F0E8',
                textColor: '#1A3A5C',
                padding: '60px 40px',
                accentColor: '#E8775D'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Coastal Kitchen',
                tagline: 'Farm-to-sea dining with a view',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'reservations@coastalkitchen.com',
                phone: '+1 (555) 238-4567'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E8',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  },

  // RESTAURANT & HOSPITALITY - NOIR BISTRO
  {
    name: 'Noir Bistro',
    description: 'Dramatic French brasserie elegance with luxurious minimalism',
    industry_tags: ['Restaurant', 'Bistro', 'Fine Dining', 'French'],
    style_tags: ['Dramatic', 'Luxury', 'Moody', 'Classic'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Noir Bistro',
                subheading: 'Classic French brasserie dining reinvented',
                ctaText: 'Secure Your Reservation',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1502012190550-6f3ee3000921?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '140px 40px',
                overlayOpacity: 0.5,
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'text-intro',
              type: 'text',
              order: 1,
              content: {
                heading: 'The Noir Experience',
                text: 'Step into an atmosphere of understated sophistication. Noir Bistro channels the spirit of Balthazar and the great Parisian brasseries—intimate lighting, impeccable service, and cuisine that honors tradition while embracing contemporary refinement. Here, timeless dishes are elevated through precise technique and the finest ingredients.'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 2,
              content: {
                heading: 'Noir Distinctions',
                subheading: 'What sets our brasserie apart',
                features: [
                  {
                    title: 'Classic Cuisine',
                    description: 'Authentic French brasserie dishes prepared with uncompromising precision',
                    icon: 'star'
                  },
                  {
                    title: 'Vintage Wine List',
                    description: 'Curated selection of French and European wines, including rare vintages',
                    icon: 'palette'
                  },
                  {
                    title: 'Intimate Ambiance',
                    description: 'Candlelit tables, original millwork, and timeless design throughout'
                  },
                  {
                    title: 'Expert Service',
                    description: 'Knowledgeable staff trained in the finest traditions of hospitality',
                    icon: 'target'
                  }
                ]
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'Discerning Diners',
                testimonials: [
                  {
                    quote: 'The finest French dining I\'ve experienced outside of Paris. Every detail perfectly executed.',
                    author: 'Philippe Leclerc',
                    role: 'Culinary Critic'
                  },
                  {
                    quote: 'A masterpiece of atmosphere and cuisine. Noir Bistro sets the standard for brasserie excellence.',
                    author: 'Victoria Sterling',
                    role: 'Food & Wine Contributor'
                  },
                  {
                    quote: 'Impeccable service, iconic dishes, and a wine selection that rivals Paris itself.',
                    author: 'Laurent Beaumont',
                    role: 'Restaurant Sommelier'
                  }
                ]
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Experience Noir Bistro',
                subheading: 'Reserve your table for an evening of refined French dining',
                ctaText: 'Make a Reservation',
                ctaLink: '/contact'
              },
              settings: {
                backgroundColor: '#C9A96E',
                textColor: '#0A0A0A',
                padding: '80px 40px',
                accentColor: '#F5F0E0'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Noir Bistro',
                tagline: 'Parisian elegance in every detail',
                links: [
                  { label: 'Menu', href: '/menu' },
                  { label: 'About', href: '/about' },
                  { label: 'Wine List', href: '/menu' },
                  { label: 'Private Dining', href: '/contact' }
                ],
                email: 'reservations@noirbistro.com',
                phone: '+1 (555) 482-9756'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'menu',
          name: 'Menu',
          slug: '/menu',
          blocks: [
            {
              id: 'hero-menu',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Le Menu',
                subheading: 'Classic brasserie dishes executed with precision',
                ctaText: 'Reserve Your Table',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                overlayOpacity: 0.5,
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'text-appetizers',
              type: 'text',
              order: 1,
              content: {
                heading: 'Hors d\'Œuvres',
                text: 'Soupe à l\'Oignon - Caramelized onion, beef stock, Gruyère croûte\nEscargots de Bourgogne - Butter, garlic, parsley, traditional preparation\nPâté de Foie Gras - House-made, toasted brioche, Fig compote\nSalade de Endive - Belgian endive, Roquefort, walnuts, Champagne vinaigrette'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'text-mains',
              type: 'text',
              order: 2,
              content: {
                heading: 'Plats Principaux',
                text: 'Coq au Vin - Burgundy wine, pearl onions, mushrooms, lardons\nCôte de Veau - Milk-fed veal chop, brown butter, fresh herbs, root vegetables\nSole Meunière - Dover sole, brown butter, lemon, capers\nCassoulet de Toulouse - White beans, duck confit, garlic sausage, crispy breadcrumb'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#F5F0E0',
                padding: '60px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'footer-menu',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Noir Bistro',
                tagline: 'Parisian elegance in every detail',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'reservations@noirbistro.com',
                phone: '+1 (555) 482-9756'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Heritage',
                subheading: 'Inspired by the great brasseries of Paris',
                ctaText: 'Book a Table',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1504674900897-22e076901d33?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                overlayOpacity: 0.5,
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'text-story',
              type: 'text',
              order: 1,
              content: {
                heading: 'The Noir Story',
                text: 'Noir Bistro was conceived as a homage to the grand brasseries of Belle Époque Paris—establishments where refined cuisine meets unpretentious elegance. Chef Laurent Devereaux, trained under masters of classical French cooking, created Noir as a sanctuary for those who appreciate tradition, technique, and the perfect coq au vin. Every element, from the bronze fixtures to the amber lighting, speaks to timeless sophistication.'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'text-philosophy',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Philosophy',
                text: 'We believe in the power of classical French technique executed with unwavering precision. Our kitchen honors time-tested recipes while seeking the finest ingredients available. Our wine program reflects decades of collecting and expertise, offering guests the opportunity to experience some of Europe\'s greatest vintages. At Noir Bistro, service is not merely professional—it is an art form practiced with genuine care.'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#F5F0E0',
                padding: '60px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Noir Bistro',
                tagline: 'Parisian elegance in every detail',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'Wine List', href: '/menu' },
                  { label: 'Reservations', href: '/contact' }
                ],
                email: 'reservations@noirbistro.com',
                phone: '+1 (555) 482-9756'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Reservations',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Reserve Your Table',
                subheading: 'Join us for an unforgettable evening',
                ctaText: 'Make a Reservation',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                overlayOpacity: 0.5,
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Book Your Evening',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Request Reservation'
              },
              settings: {
                backgroundColor: '#1A1A1A',
                textColor: '#F5F0E0',
                padding: '80px 40px',
                accentColor: '#C9A96E',
                borderRadius: '0px'
              }
            },
            {
              id: 'text-details',
              type: 'text',
              order: 2,
              content: {
                heading: 'Details',
                text: 'Hours: Tuesday - Saturday, 5:30 PM - 11:00 PM / Sunday Brunch, 11:00 AM - 3:00 PM (Closed Mondays)\nDress Code: Jackets preferred\nParty Size: 2-12 guests\nPrivate Dining: Exclusive rooms available\nLocation: 287 Heritage Street, Downtown District, NY 10013'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px',
                accentColor: '#C9A96E'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Noir Bistro',
                tagline: 'Parisian elegance in every detail',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'reservations@noirbistro.com',
                phone: '+1 (555) 482-9756'
              },
              settings: {
                backgroundColor: '#0A0A0A',
                textColor: '#F5F0E0',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  },

  // REAL ESTATE - LUXE PROPERTIES
  {
    name: 'Luxe Properties',
    description: 'Editorial luxury real estate with sophisticated magazine-style design',
    industry_tags: ['Real Estate', 'Luxury', 'Property Sales', 'Residential'],
    style_tags: ['Editorial', 'Sophisticated', 'Luxury', 'Magazine-Style'],
    page_count: 5,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Luxe Properties',
                subheading: 'Curating the world\'s most exceptional residences',
                ctaText: 'Explore Our Portfolio',
                ctaLink: '/listings',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '140px 40px',
                overlayOpacity: 0.4,
                accentColor: '#B8995A'
              }
            },
            {
              id: 'stats-1',
              type: 'stats',
              order: 1,
              content: {
                stats: [
                  { value: '500+', label: 'Properties Sold' },
                  { value: '$2.8B', label: 'Total Volume' },
                  { value: '25+', label: 'Years of Excellence' },
                  { value: '50', label: 'Expert Agents' }
                ]
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'text-intro',
              type: 'text',
              order: 2,
              content: {
                heading: 'Defining Luxury Real Estate',
                text: 'Luxe Properties represents the pinnacle of exclusive residential real estate. Since 1999, we have specialized in presenting only the most exceptional properties to discerning clients worldwide. Our editorial approach combines sophisticated marketing with an intimate understanding of architectural significance, investment potential, and lifestyle excellence.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 3,
              content: {
                heading: 'Our Expertise',
                subheading: 'What sets Luxe Properties apart',
                features: [
                  {
                    title: 'Architectural Excellence',
                    description: 'Expertise in historic estates and iconic modern design',
                    icon: 'briefcase'
                  },
                  {
                    title: 'Global Network',
                    description: 'International connections and buyer relationships',
                    icon: 'target'
                  },
                  {
                    title: 'Discretion & Privacy',
                    description: 'Confidential handling of sensitive transactions',
                    icon: 'shield'
                  },
                  {
                    title: 'Market Intelligence',
                    description: 'Unparalleled data on comparable sales and trends',
                    icon: 'chart'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A',
                borderRadius: '0px'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Discover Exceptional Properties',
                subheading: 'Browse our curated collection of luxury residences',
                ctaText: 'View Listings',
                ctaLink: '/listings'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Luxe Properties',
                tagline: 'Defining luxury real estate since 1999',
                links: [
                  { label: 'Listings', href: '/listings' },
                  { label: 'About', href: '/about' },
                  { label: 'Our Team', href: '/team' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'inquiry@luxeproperties.com',
                phone: '+1 (555) 287-4829'
              },
              settings: {
                backgroundColor: '#0F1F1C',
                textColor: '#F8F5EF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'listings',
          name: 'Listings',
          slug: '/listings',
          blocks: [
            {
              id: 'hero-listings',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Featured Properties',
                subheading: 'Exceptional residences from around the world',
                ctaText: 'Schedule a Private Viewing',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1d3a19?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '80px 40px',
                overlayOpacity: 0.4,
                accentColor: '#B8995A'
              }
            },
            {
              id: 'text-collection',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Current Collection',
                text: 'Manhattan Penthouse - 5 Bedrooms, Central Park views, $47M\nPalm Beach Estate - 8 Bedrooms, oceanfront, 2 acres, $32M\nAspen Chalet - 6 Bedrooms, ski-in/ski-out, wine cellar, $18.5M\nMalibu Contemporary - 4 Bedrooms, 180-degree ocean views, $24M\nWilshire Boulevard Mansion - 7 Bedrooms, Hollywood history, $28M'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'gallery-1',
              type: 'gallery',
              order: 2,
              content: {
                heading: 'Property Showcase',
                images: [
                  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1600596542815-ffad4c1d3a19?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1600607687644-c173dc70c0e6?w=400&h=300&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'footer-listings',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Luxe Properties',
                tagline: 'Defining luxury real estate since 1999',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Listings', href: '/listings' },
                  { label: 'Team', href: '/team' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'inquiry@luxeproperties.com',
                phone: '+1 (555) 287-4829'
              },
              settings: {
                backgroundColor: '#0F1F1C',
                textColor: '#F8F5EF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Luxe Properties',
                subheading: 'Excellence in luxury real estate since 1999',
                ctaText: 'Meet Our Team',
                ctaLink: '/team',
                backgroundImage: 'https://images.unsplash.com/photo-1600607687644-c173dc70c0e6?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '80px 40px',
                overlayOpacity: 0.4,
                accentColor: '#B8995A'
              }
            },
            {
              id: 'text-about',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Legacy',
                text: 'Founded by renowned real estate visionary Catherine Whitmore in 1999, Luxe Properties has established itself as the premier destination for ultra-high-net-worth buyers and sellers. Our reputation is built on an unwavering commitment to excellence, discretion, and deep market knowledge. We don\'t simply list properties—we tell their stories through editorial-quality marketing and personalized service.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3C34',
                padding: '60px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'text-mission',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Mission',
                text: 'To connect the world\'s most discerning clients with architectural masterpieces and exceptional residential investments. We believe that luxury real estate transactions require more than market data—they demand vision, integrity, and an appreciation for the extraordinary. Each property in our portfolio is selected for its significance and potential to enrich the lives of its owners.'
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '60px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Luxe Properties',
                tagline: 'Defining luxury real estate since 1999',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Listings', href: '/listings' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'inquiry@luxeproperties.com',
                phone: '+1 (555) 287-4829'
              },
              settings: {
                backgroundColor: '#0F1F1C',
                textColor: '#F8F5EF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'team',
          name: 'Our Team',
          slug: '/team',
          blocks: [
            {
              id: 'hero-team',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Meet Our Experts',
                subheading: 'Dedicated specialists in luxury real estate',
                ctaText: 'Contact an Agent',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '80px 40px',
                overlayOpacity: 0.4,
                accentColor: '#B8995A'
              }
            },
            {
              id: 'team-1',
              type: 'team',
              order: 1,
              content: {
                heading: 'Senior Leadership',
                members: [
                  {
                    name: 'Catherine Whitmore',
                    role: 'Founder & CEO',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
                  },
                  {
                    name: 'James Richardson',
                    role: 'Vice President, Manhattan Portfolio',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
                  },
                  {
                    name: 'Alexandra Pierce',
                    role: 'Director of Acquisitions',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'text-team',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Specialists',
                text: 'Our team brings together the finest minds in luxury real estate—from former auction house specialists to architectural historians, financial advisors, and international market experts. Each team member is selected for their profound expertise, impeccable ethics, and genuine passion for exceptional properties. We work as one unified organization with a single goal: your complete satisfaction.'
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '60px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'footer-team',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Luxe Properties',
                tagline: 'Defining luxury real estate since 1999',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Listings', href: '/listings' },
                  { label: 'Team', href: '/team' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'inquiry@luxeproperties.com',
                phone: '+1 (555) 287-4829'
              },
              settings: {
                backgroundColor: '#0F1F1C',
                textColor: '#F8F5EF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get In Touch',
                subheading: 'Let us help you find your dream property',
                ctaText: 'Send Inquiry',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#1A3C34',
                textColor: '#F8F5EF',
                padding: '80px 40px',
                overlayOpacity: 0.4,
                accentColor: '#B8995A'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Send Us Your Inquiry',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Inquiry'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#1A3C34',
                padding: '80px 40px',
                accentColor: '#B8995A',
                borderRadius: '0px'
              }
            },
            {
              id: 'text-contact',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Offices',
                text: 'Manhattan Office: 420 Park Avenue, New York, NY 10022\nBeverly Hills Office: 9595 Wilshire Boulevard, Beverly Hills, CA 90212\nMiami Office: 1501 Brickell Bay Drive, Miami, FL 33131\nAspen Office: 618 East Main Street, Aspen, CO 81611'
              },
              settings: {
                backgroundColor: '#F8F5EF',
                textColor: '#1A3C34',
                padding: '60px 40px',
                accentColor: '#B8995A'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Luxe Properties',
                tagline: 'Defining luxury real estate since 1999',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Listings', href: '/listings' },
                  { label: 'Team', href: '/team' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'inquiry@luxeproperties.com',
                phone: '+1 (555) 287-4829'
              },
              settings: {
                backgroundColor: '#0F1F1C',
                textColor: '#F8F5EF',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  },

  // REAL ESTATE - URBAN REALTY
  {
    name: 'Urban Realty',
    description: 'Modern PropTech-inspired real estate with clean, tech-forward design',
    industry_tags: ['Real Estate', 'Technology', 'Property', 'Residential'],
    style_tags: ['Modern', 'Tech-Forward', 'Clean', 'Data-Driven'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Urban Realty',
                subheading: 'Smart real estate for modern living',
                ctaText: 'Search Properties',
                ctaLink: '/listings',
                backgroundImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '140px 40px',
                overlayOpacity: 0.2,
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'stats-1',
              type: 'stats',
              order: 1,
              content: {
                stats: [
                  { value: '1,250+', label: 'Active Listings' },
                  { value: '$8.5B', label: 'Total Market Value' },
                  { value: '95%', label: 'Customer Satisfaction' },
                  { value: '12', label: 'Cities Served' }
                ]
              },
              settings: {
                backgroundColor: '#F0F9FF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 2,
              content: {
                heading: 'Why Urban Realty',
                subheading: 'Technology meets real estate expertise',
                features: [
                  {
                    title: 'AI-Powered Search',
                    description: 'Find properties matching your exact needs with advanced filtering',
                    icon: 'laptop'
                  },
                  {
                    title: 'Real-Time Market Data',
                    description: 'Access comprehensive analytics and pricing trends instantly',
                    icon: 'chart'
                  },
                  {
                    title: 'Virtual Tours',
                    description: 'Explore properties with immersive 3D technology',
                    icon: 'monitor'
                  },
                  {
                    title: 'Expert Guidance',
                    description: 'Connect with local specialists who know your market',
                    icon: 'briefcase'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9',
                borderRadius: '8px'
              }
            },
            {
              id: 'about-1',
              type: 'about',
              order: 3,
              content: {
                heading: 'Reimagining Real Estate',
                text: 'Urban Realty combines cutting-edge technology with genuine real estate expertise. Founded in 2018, we\'ve disrupted traditional real estate by putting powerful tools in buyers\' and sellers\' hands. Our data-driven approach, transparent pricing, and customer-first philosophy have made us the trusted choice for modern property transactions across major urban markets.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop'
              },
              settings: {
                backgroundColor: '#F0F9FF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Ready to Find Your Next Home?',
                subheading: 'Start your property search today with smart tools and expert support',
                ctaText: 'Browse Listings',
                ctaLink: '/listings'
              },
              settings: {
                backgroundColor: '#0EA5E9',
                textColor: '#FFFFFF',
                padding: '80px 40px',
                accentColor: '#FFFFFF'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Urban Realty',
                tagline: 'Smart real estate for modern living',
                links: [
                  { label: 'Search Properties', href: '/listings' },
                  { label: 'How It Works', href: '/about' },
                  { label: 'Sell Your Home', href: '/contact' },
                  { label: 'Support', href: '/contact' }
                ],
                email: 'hello@urbanrealty.com',
                phone: '+1 (555) 342-8756'
              },
              settings: {
                backgroundColor: '#2B2B2B',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'listings',
          name: 'Search Listings',
          slug: '/listings',
          blocks: [
            {
              id: 'hero-listings',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Find Your Perfect Property',
                subheading: 'Browse over 1,250 active listings with advanced filters',
                ctaText: 'Search Now',
                ctaLink: '/listings',
                backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'text-featured',
              type: 'text',
              order: 1,
              content: {
                heading: 'Featured Properties',
                text: 'Modern Downtown Loft - 2 bed, 2 bath, $650,000 - Smart home ready, rooftop access\nSuburban Family Home - 4 bed, 3 bath, $895,000 - Tree-lined street, great schools\nUrban Studio - 1 bed, 1 bath, $425,000 - Transit-adjacent, walkable neighborhood\nContemporary Townhouse - 3 bed, 2.5 bath, $725,000 - Brand new construction, energy efficient'
              },
              settings: {
                backgroundColor: '#F0F9FF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'gallery-listings',
              type: 'gallery',
              order: 2,
              content: {
                heading: 'Recent Listings',
                images: [
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'footer-listings',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Urban Realty',
                tagline: 'Smart real estate for modern living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Search', href: '/listings' },
                  { label: 'How It Works', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@urbanrealty.com',
                phone: '+1 (555) 342-8756'
              },
              settings: {
                backgroundColor: '#2B2B2B',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'How It Works',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'How Urban Realty Works',
                subheading: 'Transparent, technology-driven real estate',
                ctaText: 'Get Started',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'text-process',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Process',
                text: 'Step 1: Search & Explore - Use our AI-powered tools to find properties that match your criteria\nStep 2: Virtual Tour - Explore properties with immersive 3D tours from home\nStep 3: Get Data - Access transparent pricing, market analysis, and comparable sales\nStep 4: Connect with Agent - When ready, chat with a local expert\nStep 5: Close the Deal - We handle the paperwork and coordination'
              },
              settings: {
                backgroundColor: '#F0F9FF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'text-advantage',
              type: 'text',
              order: 2,
              content: {
                heading: 'The Urban Realty Advantage',
                text: 'We believe real estate should be transparent, efficient, and customer-centric. Our technology eliminates friction, our data drives better decisions, and our experts provide the human touch when it matters. Whether you\'re a first-time buyer or an experienced investor, Urban Realty gives you the tools and guidance to succeed.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '60px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Urban Realty',
                tagline: 'Smart real estate for modern living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Search', href: '/listings' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@urbanrealty.com',
                phone: '+1 (555) 342-8756'
              },
              settings: {
                backgroundColor: '#2B2B2B',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get in Touch',
                subheading: 'Questions? Let our team help',
                ctaText: 'Send Message',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Us',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#F0F9FF',
                textColor: '#2B2B2B',
                padding: '80px 40px',
                accentColor: '#0EA5E9',
                borderRadius: '8px'
              }
            },
            {
              id: 'text-support',
              type: 'text',
              order: 2,
              content: {
                heading: 'Support Hours',
                text: 'Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 10:00 AM - 6:00 PM\nSunday: 12:00 PM - 5:00 PM\nPhone: +1 (555) 342-8756\nEmail: hello@urbanrealty.com'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#2B2B2B',
                padding: '60px 40px',
                accentColor: '#0EA5E9'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Urban Realty',
                tagline: 'Smart real estate for modern living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Search', href: '/listings' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@urbanrealty.com',
                phone: '+1 (555) 342-8756'
              },
              settings: {
                backgroundColor: '#2B2B2B',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  },

  // E-COMMERCE & RETAIL - ARTISAN MARKET
  {
    name: 'Artisan Market',
    description: 'Direct-to-consumer brand with handcrafted artisanal feel',
    industry_tags: ['E-Commerce', 'Retail', 'Artisanal', 'D2C Brand'],
    style_tags: ['Artisanal', 'Handcrafted', 'Warm', 'Boutique'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Artisan Market',
                subheading: 'Thoughtfully crafted goods for the modern home',
                ctaText: 'Shop Our Collection',
                ctaLink: '/products',
                backgroundImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '140px 40px',
                overlayOpacity: 0.2,
                accentColor: '#D4654A'
              }
            },
            {
              id: 'text-intro',
              type: 'text',
              order: 1,
              content: {
                heading: 'Handcrafted with Care',
                text: 'Each piece in our collection is thoughtfully designed and handcrafted by skilled artisans. We believe in the beauty of imperfection, the value of quality materials, and the joy of supporting makers. From sustainable packaging to ethical sourcing, every detail reflects our commitment to craft and consciousness.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 2,
              content: {
                heading: 'Why Artisan Market',
                subheading: 'Our commitment to quality and craftsmanship',
                features: [
                  {
                    title: 'Handcrafted Quality',
                    description: 'Each item made with attention to detail and pride in craft',
                    icon: 'star'
                  },
                  {
                    title: 'Ethical Sourcing',
                    description: 'We partner with artisans and suppliers who share our values',
                    icon: 'heart'
                  },
                  {
                    title: 'Sustainable Materials',
                    description: 'Organic fibers, reclaimed wood, and eco-conscious production',
                    icon: 'palette'
                  },
                  {
                    title: 'Direct from Makers',
                    description: 'No middlemen—support the creators directly',
                    icon: 'layout'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A',
                borderRadius: '8px'
              }
            },
            {
              id: 'testimonials-1',
              type: 'testimonials',
              order: 3,
              content: {
                heading: 'From Our Community',
                testimonials: [
                  {
                    quote: 'The quality is exceptional. I can tell these pieces were made with real care and craftsmanship.',
                    author: 'Maya Chen',
                    role: 'Interior Designer'
                  },
                  {
                    quote: 'I love supporting makers directly. Every purchase feels meaningful.',
                    author: 'Jordan Williams',
                    role: 'Design Enthusiast'
                  },
                  {
                    quote: 'Beautiful, sustainable, and socially conscious. Everything I look for in a brand.',
                    author: 'Sophia Rodriguez',
                    role: 'Conscious Consumer'
                  }
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A',
                borderRadius: '8px'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Discover Artisan Craftsmanship',
                subheading: 'Explore our collection of handcrafted goods',
                ctaText: 'Shop Now',
                ctaLink: '/products'
              },
              settings: {
                backgroundColor: '#3D1C2C',
                textColor: '#FFF0ED',
                padding: '80px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Artisan Market',
                tagline: 'Thoughtfully crafted goods',
                links: [
                  { label: 'Shop', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Story', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@artisanmarket.com',
                phone: '+1 (555) 473-8234'
              },
              settings: {
                backgroundColor: '#3D1C2C',
                textColor: '#FFF0ED',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'products',
          name: 'Shop',
          slug: '/products',
          blocks: [
            {
              id: 'hero-products',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Collection',
                subheading: 'Handcrafted goods for the modern home',
                ctaText: 'Browse All',
                ctaLink: '/products',
                backgroundImage: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#D4654A'
              }
            },
            {
              id: 'text-categories',
              type: 'text',
              order: 1,
              content: {
                heading: 'Featured Categories',
                text: 'Home Textiles - Organic cotton throws, linen pillows, handwoven rugs ($45-$280)\nCeramics & Pottery - Handthrown bowls, vases, dinnerware sets ($35-$150)\nWood & Leather - Reclaimed wood shelving, leather journals, wooden utensils ($25-$200)\nJewelry & Accessories - Artisan jewelry, scarves, handmade belts ($30-$180)'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'gallery-1',
              type: 'gallery',
              order: 2,
              content: {
                heading: 'Featured Items',
                images: [
                  'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1595521624809-aaf4ce934b08?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'footer-products',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Artisan Market',
                tagline: 'Thoughtfully crafted goods',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Shop', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@artisanmarket.com',
                phone: '+1 (555) 473-8234'
              },
              settings: {
                backgroundColor: '#3D1C2C',
                textColor: '#FFF0ED',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Story',
                subheading: 'Building a community of makers and lovers of craft',
                ctaText: 'Learn More',
                ctaLink: '/about',
                backgroundImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#D4654A'
              }
            },
            {
              id: 'text-story',
              type: 'text',
              order: 1,
              content: {
                heading: 'How Artisan Market Began',
                text: 'Founded in 2020 by designer and maker advocate Emma Patterson, Artisan Market was born from a desire to connect contemporary creators with conscious consumers. Emma spent years visiting artisan communities around the world, learning their stories, understanding their craft, and developing relationships built on mutual respect. She realized there was a gap in the market for a platform that celebrated handmade quality while maintaining complete transparency about sourcing and fair compensation.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D1C2C',
                padding: '60px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'text-values',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Values',
                text: 'Artisan Market operates on three core principles: First, we prioritize craftsmanship over mass production. Every item tells a story of the maker\'s skill and dedication. Second, we commit to fair practices—every artisan we work with receives fair compensation and maintains ownership of their work. Third, we embrace sustainability—from the materials we source to the packaging we use, every decision reflects our environmental responsibility. Quality over quantity. Heart over profit.'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '60px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Artisan Market',
                tagline: 'Thoughtfully crafted goods',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Shop', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@artisanmarket.com',
                phone: '+1 (555) 473-8234'
              },
              settings: {
                backgroundColor: '#3D1C2C',
                textColor: '#FFF0ED',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get in Touch',
                subheading: 'We\'d love to hear from you',
                ctaText: 'Send Message',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                overlayOpacity: 0.2,
                accentColor: '#D4654A'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Us',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send Message'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#3D1C2C',
                padding: '80px 40px',
                accentColor: '#D4654A',
                borderRadius: '8px'
              }
            },
            {
              id: 'text-info',
              type: 'text',
              order: 2,
              content: {
                heading: 'Customer Support',
                text: 'Email: hello@artisanmarket.com\nPhone: +1 (555) 473-8234\nResponse time: Within 24 hours\nShipping: Free domestic shipping on orders over $75\nReturns: 30-day satisfaction guarantee'
              },
              settings: {
                backgroundColor: '#FFF0ED',
                textColor: '#3D1C2C',
                padding: '60px 40px',
                accentColor: '#D4654A'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Artisan Market',
                tagline: 'Thoughtfully crafted goods',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Shop', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'hello@artisanmarket.com',
                phone: '+1 (555) 473-8234'
              },
              settings: {
                backgroundColor: '#3D1C2C',
                textColor: '#FFF0ED',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  },

  // E-COMMERCE & RETAIL - MINIMAL STORE
  {
    name: 'Minimal Store',
    description: 'Ultra-minimalist product-focused e-commerce with Apple-inspired design',
    industry_tags: ['E-Commerce', 'Retail', 'Technology', 'Minimalist'],
    style_tags: ['Minimal', 'Modern', 'Product-Focused', 'Premium'],
    page_count: 4,
    template_data: {
      pages: [
        {
          id: 'home',
          name: 'Home',
          slug: '/',
          blocks: [
            {
              id: 'hero-1',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Minimal Store',
                subheading: 'Thoughtfully designed products for everyday excellence',
                ctaText: 'Explore Products',
                ctaLink: '/products',
                backgroundImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '140px 40px',
                overlayOpacity: 0,
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'text-intro',
              type: 'text',
              order: 1,
              content: {
                heading: 'Simplicity is the Ultimate Sophistication',
                text: 'At Minimal Store, we design products that do one thing exceptionally well. No unnecessary features. No confusing options. Just elegant solutions to everyday problems. Each product is engineered to the smallest detail, manufactured to perfection, and designed to inspire.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '80px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'features-1',
              type: 'features',
              order: 2,
              content: {
                heading: 'Why Choose Minimal',
                subheading: 'The difference is in the details',
                features: [
                  {
                    title: 'Precision Design',
                    description: 'Every element serves a purpose in a cohesive whole',
                    icon: 'code'
                  },
                  {
                    title: 'Superior Materials',
                    description: 'Only the finest materials, selected for durability and aesthetics',
                    icon: 'star'
                  },
                  {
                    title: 'Intuitive Experience',
                    description: 'Products that are a joy to use, not a chore to figure out',
                    icon: 'zap'
                  },
                  {
                    title: 'Lifetime Guarantee',
                    description: 'We stand behind our products with a lifetime warranty',
                    icon: 'shield'
                  }
                ]
              },
              settings: {
                backgroundColor: '#F5F5F5',
                textColor: '#000000',
                padding: '80px 40px',
                accentColor: '#FF3B30',
                borderRadius: '0px'
              }
            },
            {
              id: 'gallery-1',
              type: 'gallery',
              order: 3,
              content: {
                heading: 'Featured Collection',
                images: [
                  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
                ]
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '80px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'cta-1',
              type: 'cta',
              order: 4,
              content: {
                heading: 'Discover the Collection',
                subheading: 'Simple. Elegant. Essential.',
                ctaText: 'Shop Now',
                ctaLink: '/products'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: '80px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'footer-1',
              type: 'footer',
              order: 5,
              content: {
                companyName: 'Minimal Store',
                tagline: 'Essential design for everyday living',
                links: [
                  { label: 'Products', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Support', href: '/contact' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@minimalstore.com',
                phone: '+1 (555) 829-4567'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'products',
          name: 'Products',
          slug: '/products',
          blocks: [
            {
              id: 'hero-products',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Our Products',
                subheading: 'Designed for clarity, engineered for excellence',
                ctaText: 'Browse All',
                ctaLink: '/products',
                backgroundImage: 'https://images.unsplash.com/photo-1599602643419-d976f3869a80?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '80px 40px',
                overlayOpacity: 0,
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'text-catalog',
              type: 'text',
              order: 1,
              content: {
                heading: 'The Essential Collection',
                text: 'Minimal Desk Lamp - Precision engineering, adjustable brightness, 10-year lifespan. $129\nEssential Notebook - Acid-free paper, minimal binding, 200 pages. $24\nMinimal Pen - Machined aluminum, replaceable ink cartridge, lifetime warranty. $45\nNatural Wood Desk Organizer - Sustainably sourced oak, handcrafted, 3-compartment. $89'
              },
              settings: {
                backgroundColor: '#F5F5F5',
                textColor: '#000000',
                padding: '80px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'text-philosophy',
              type: 'text',
              order: 2,
              content: {
                heading: 'Design Philosophy',
                text: 'Every Minimal Store product begins with a question: What if we removed everything unnecessary? Through relentless refinement, we create products that are a pleasure to own and use. We believe that quality should be evident from the moment you unbox a product. Every detail—from materials to packaging—reflects our commitment to excellence.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '60px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'footer-products',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Minimal Store',
                tagline: 'Essential design for everyday living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@minimalstore.com',
                phone: '+1 (555) 829-4567'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'about',
          name: 'About',
          slug: '/about',
          blocks: [
            {
              id: 'hero-about',
              type: 'hero',
              order: 0,
              content: {
                heading: 'About Minimal Store',
                subheading: 'How we design products that matter',
                ctaText: 'Explore Our Process',
                ctaLink: '/about',
                backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '80px 40px',
                overlayOpacity: 0,
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'text-story',
              type: 'text',
              order: 1,
              content: {
                heading: 'Our Story',
                text: 'Founded in 2019 by product designer Thomas Hart, Minimal Store exists to prove that simplicity is not a limitation—it\'s a superpower. After years working at major consumer electronics companies, Thomas grew frustrated with feature bloat and unnecessary complexity. He set out to create products that respect the user\'s intelligence and time by doing one thing beautifully.'
              },
              settings: {
                backgroundColor: '#F5F5F5',
                textColor: '#000000',
                padding: '60px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'text-values',
              type: 'text',
              order: 2,
              content: {
                heading: 'Our Values',
                text: 'We believe that less is more. Every product serves a clear purpose. Unnecessary features are eliminated. Materials are chosen for beauty and durability, not cost. Manufacturing is precise, ensuring every unit meets exacting standards. We design for the long term—products you\'ll love using for years, not ones you\'ll replace next season. This is design with integrity.'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '60px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'footer-about',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Minimal Store',
                tagline: 'Essential design for everyday living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@minimalstore.com',
                phone: '+1 (555) 829-4567'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact',
          slug: '/contact',
          blocks: [
            {
              id: 'hero-contact',
              type: 'hero',
              order: 0,
              content: {
                heading: 'Get in Touch',
                subheading: 'We\'re here to help',
                ctaText: 'Send Message',
                ctaLink: '/contact',
                backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '80px 40px',
                overlayOpacity: 0,
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'contact-form',
              type: 'contact',
              order: 1,
              content: {
                heading: 'Contact Us',
                fields: ['name', 'email', 'phone', 'message'],
                submitText: 'Send'
              },
              settings: {
                backgroundColor: '#F5F5F5',
                textColor: '#000000',
                padding: '80px 40px',
                accentColor: '#FF3B30',
                borderRadius: '0px'
              }
            },
            {
              id: 'text-support',
              type: 'text',
              order: 2,
              content: {
                heading: 'Support',
                text: 'Email: support@minimalstore.com\nPhone: +1 (555) 829-4567\nResponse time: Within 24 hours\nGuarantee: Lifetime warranty on all products\nShipping: Free worldwide shipping'
              },
              settings: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                padding: '60px 40px',
                accentColor: '#FF3B30'
              }
            },
            {
              id: 'footer-contact',
              type: 'footer',
              order: 3,
              content: {
                companyName: 'Minimal Store',
                tagline: 'Essential design for everyday living',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ],
                email: 'support@minimalstore.com',
                phone: '+1 (555) 829-4567'
              },
              settings: {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                padding: '60px 40px'
              }
            }
          ]
        }
      ]
    }
  }
];
