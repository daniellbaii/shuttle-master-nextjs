import { NavigationItem, SocialLink } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    icon: '/assets/icons/youtube.png',
    alt: 'YouTube'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: '/assets/icons/instagram.png',
    alt: 'Instagram'
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/61403429308',
    icon: '/assets/icons/whatsapp.png',
    alt: 'WhatsApp'
  },
  {
    platform: 'Discord',
    url: 'https://discord.com',
    icon: '/assets/icons/discord.png',
    alt: 'Discord'
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Articles', href: '/articles' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};