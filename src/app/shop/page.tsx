'use client';

import type { Metadata } from "next";
import { useCart } from '@/context/CartContext';

const products = [
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

export default function Shop() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice
    });
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Online Store</div>
          <h2>Training Programs & Courses</h2>
          <p className="services-subtitle">Purchase downloadable resources, training guides, and exclusive course access to take your badminton to the next level.</p>
        </div>
        
        <div className="shop-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-image">
                {product.emoji}
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-card-content">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="product-footer">
                  <div className="product-price">
                    {product.originalPrice && (
                      <span className="product-price-original">${product.originalPrice}</span>
                    )}
                    ${product.price}
                  </div>
                  <button 
                    className="product-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}