'use client';

import Link from 'next/link';
import { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import { useCart } from '@/context/CartContext';

const CartModal = lazy(() => import('./CartModal'));

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCartOpen, cartCount, openCart } = useCart();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    // Close mobile menu when opening cart
    setIsMobileMenuOpen(false);
    openCart();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when screen size changes to larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when cart opens
  useEffect(() => {
    if (isCartOpen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isCartOpen, isMobileMenuOpen]);

  return (
    <>
      <header ref={headerRef}>
        <nav className="container">
          <Link href="/" className="logo logo-flex">
            <img 
              src="/assets/favicon_io/android-chrome-512x512.png" 
              alt="Shuttle Master Logo" 
              width="28" 
              height="28" 
            />
            <span>Shuttle Master</span>
          </Link>
          
          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Header Actions */}
          <div className="mobile-header-actions">
            {/* Mobile Cart Button */}
            <button 
              className="cart-btn mobile-cart-btn" 
              onClick={handleCartClick}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              🛒 <span className="cart-count">{cartCount}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              &#9776;
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <Navigation 
              isMobile={true} 
              onItemClick={closeMobileMenu}
              id="mobile-navigation"
              showCartButton={false}
            />
          )}
        </nav>
      </header>
      
      {isCartOpen && (
        <Suspense fallback={null}>
          <CartModal />
        </Suspense>
      )}
    </>
  );
}