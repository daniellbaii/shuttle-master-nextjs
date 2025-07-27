'use client';

import Link from 'next/link';
import { useState, Suspense, lazy } from 'react';
import Navigation from './Navigation';
import { useCart } from '@/context/CartContext';

const CartModal = lazy(() => import('./CartModal'));

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCartOpen } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header>
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

          {/* Mobile Menu Toggle */}
          <button 
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776;
          </button>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <Navigation isMobile={true} onItemClick={closeMobileMenu} />
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