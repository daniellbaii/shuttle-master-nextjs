'use client';

import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

export default function CartModal() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    cartTotal, 
    clearCart 
  } = useCart();

  // Close cart with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen, closeCart]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Simulate checkout process
    const total = cartTotal;
    
    setTimeout(() => {
      alert(`Checkout complete! Total: $${total}\n\nThis is a demo - no actual payment was processed.`);
      clearCart();
      closeCart();
    }, 1500);
  };

  if (!isCartOpen) return null;

  return (
    <div 
      className={`cart-modal ${isCartOpen ? 'show' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <h3>Shopping Cart</h3>
          <button className="cart-modal-close" onClick={closeCart}>
            &times;
          </button>
        </div>
        
        <div className="cart-modal-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>No products in the basket.</p>
              <button className="btn-secondary" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-category">{item.category}</div>
                    {item.quantity > 1 && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Quantity: {item.quantity}
                      </div>
                    )}
                  </div>
                  <div className="cart-item-price">
                    ${item.quantity > 1 ? item.price * item.quantity : item.price}
                  </div>
                  <button 
                    className="cart-item-remove" 
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-modal-footer">
            <div className="cart-total">
              <strong>Total: ${cartTotal}</strong>
            </div>
            <div className="cart-actions">
              <button className="btn-secondary" onClick={closeCart}>
                Continue Shopping
              </button>
              <button className="btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}