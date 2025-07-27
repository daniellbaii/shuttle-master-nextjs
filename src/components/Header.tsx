'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartModal from './CartModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

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
          
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <button className="cart-btn" onClick={openCart}>
                🛒 <span className="cart-count">{cartCount}</span>
              </button>
            </li>
          </ul>

          <button 
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776;
          </button>

          {isMobileMenuOpen && (
            <ul className="mobile-nav show">
              <li><Link href="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link href="/about" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link href="/shop" onClick={closeMobileMenu}>Shop</Link></li>
              <li><Link href="/articles" onClick={closeMobileMenu}>Articles</Link></li>
              <li><Link href="/contact" onClick={closeMobileMenu}>Contact</Link></li>
              <li>
                <button className="cart-btn" onClick={() => { openCart(); closeMobileMenu(); }}>
                  🛒 <span className="cart-count">{cartCount}</span>
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>
      
      <CartModal />
    </>
  );
}