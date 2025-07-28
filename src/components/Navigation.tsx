import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { NAVIGATION_ITEMS } from '@/constants/navigation';

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
  id?: string;
  showCartButton?: boolean;
}

const Navigation: React.FC<NavigationProps> = React.memo(({ 
  isMobile = false, 
  onItemClick,
  id,
  showCartButton = true
}) => {
  const { cartCount, openCart } = useCart();

  const handleCartClick = () => {
    openCart();
    if (onItemClick) onItemClick();
  };

  const handleLinkClick = () => {
    if (onItemClick) onItemClick();
  };

  const navClass = isMobile ? 'mobile-nav show' : 'nav-links';

  return (
    <ul className={navClass} id={id}>
      {NAVIGATION_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href} onClick={handleLinkClick}>
            {item.label}
          </Link>
        </li>
      ))}
      {showCartButton && (
        <li>
          <button 
            className="cart-btn" 
            onClick={handleCartClick}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
        </li>
      )}
    </ul>
  );
});

export default Navigation;