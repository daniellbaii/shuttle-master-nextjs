'use client';

import type { Metadata } from "next";
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ui';

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="section-padding">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Online Store</div>
          <h2>Training Programs & Courses</h2>
          <p className="services-subtitle">Purchase downloadable resources, training guides, and exclusive course access to take your badminton to the next level.</p>
        </div>
        
        <div className="shop-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}