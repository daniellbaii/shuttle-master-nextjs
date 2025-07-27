import React from 'react';
import { ProductCardProps } from '@/types';
import Button from './Button';

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        {product.emoji}
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="product-card-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        
        {product.features && product.features.length > 0 && (
          <div className="product-features">
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="product-footer">
          <div className="product-price">
            {product.originalPrice && (
              <span className="product-price-original">${product.originalPrice}</span>
            )}
            ${product.price}
          </div>
          <Button 
            variant="product"
            onClick={handleAddToCart}
          >
            Add to Cart 🛒
          </Button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;