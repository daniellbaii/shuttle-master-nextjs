// Core TypeScript interfaces and types

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  emoji?: string;
  badge?: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  emoji: string;
  slug: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  alt: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'cart' | 'product';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  icon?: string;
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface ArticleCardProps {
  article: Article;
}

export type NotificationType = 'success' | 'error' | 'info';

export interface NotificationOptions {
  message: string;
  type?: NotificationType;
  duration?: number;
}