import { Article } from '@/types';

export const ARTICLES: Article[] = [
  {
    id: 'serve',
    title: 'Mastering the Perfect Badminton Serve',
    category: 'Technique',
    date: 'December 15, 2024',
    readTime: '5 min read',
    excerpt: 'Learn the fundamentals of serving in badminton, from proper grip to footwork positioning. Master both high serves and short serves to gain the upper hand in your matches.',
    emoji: '🏸',
    slug: 'serve'
  },
  {
    id: 'fitness',
    title: 'Essential Conditioning Exercises for Badminton Players',
    category: 'Fitness',
    date: 'December 12, 2024',
    readTime: '8 min read',
    excerpt: 'Discover the key exercises that will improve your speed, agility, and endurance on the court. Build the physical foundation needed for competitive play.',
    emoji: '💪',
    slug: 'fitness'
  },
  {
    id: 'strategy',
    title: 'Reading Your Opponent: Mental Game Strategies',
    category: 'Strategy',
    date: 'December 10, 2024',
    readTime: '6 min read',
    excerpt: 'Learn how to analyze your opponent\'s playing style and adapt your strategy mid-game. Develop the mental skills that separate good players from great ones.',
    emoji: '🧠',
    slug: 'strategy'
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return ARTICLES.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return ARTICLES.filter(article => article.category === category);
};