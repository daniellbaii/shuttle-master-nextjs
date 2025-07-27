import React from 'react';
import { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = React.memo(({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'cart':
        return 'cart-btn';
      case 'product':
        return 'product-btn';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'btn-small';
      case 'large':
        return 'btn-large';
      default:
        return '';
    }
  };

  const buttonClasses = [
    getVariantClass(),
    getSizeClass(),
    className,
    disabled ? 'btn-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;