import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'beginner-course',
    title: "Complete Beginner's Badminton Course",
    category: 'Training Program',
    price: 99,
    originalPrice: 149,
    emoji: '🏸',
    badge: 'Popular',
    description: 'A comprehensive 8-week program designed to take you from absolute beginner to confident player with proper fundamentals.',
    features: [
      '8 structured weekly lessons',
      'Video demonstrations for all techniques',
      'Printable practice drills',
      'Progress tracking worksheets',
      'Email support from Coach Evesh'
    ]
  },
  {
    id: 'tournament-masterclass',
    title: 'Tournament Champion Training Program',
    category: 'Training Program',
    price: 199,
    originalPrice: 299,
    emoji: '🏆',
    badge: 'Premium',
    description: 'Elite-level training program covering everything needed to compete and win at tournament level with personalized coaching.',
    features: [
      '12-week structured program',
      'Match analysis and strategy sessions',
      'Advanced tactical training',
      '1-on-1 coaching sessions (6 sessions)',
      'Tournament preparation guidance'
    ]
  },
  {
    id: 'smash-program',
    title: 'Power Smash Development Program',
    category: 'Training Program',
    price: 129,
    emoji: '🎯',
    description: 'Build devastating attacking power with this specialized 6-week program focused on smash technique and conditioning.',
    features: [
      '6-week structured program',
      'Biomechanics video analysis',
      'Strength training protocols',
      'Shot accuracy drills',
      'Personal feedback sessions'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};