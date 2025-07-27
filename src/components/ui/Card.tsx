import React from 'react';
import Link from 'next/link';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = React.memo(({
  icon,
  title,
  subtitle,
  link,
  linkText,
  href,
  target,
  children,
  className = ''
}) => {
  const cardClasses = `card ${className}`;

  const CardContent = () => (
    <>
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {link && <p className="card-link">{link}</p>}
      {linkText && href && !target && (
        <Link href={href} className="card-link">{linkText}</Link>
      )}
      {linkText && href && target && (
        <a href={href} className="card-link" target={target} rel="noopener noreferrer">
          {linkText}
        </a>
      )}
      {children}
    </>
  );

  // If href is provided, wrap in link
  if (href && !linkText) {
    if (target) {
      return (
        <a href={href} className={`${cardClasses} card-link-wrapper`} target={target} rel="noopener noreferrer">
          <CardContent />
        </a>
      );
    } else {
      return (
        <Link href={href} className={`${cardClasses} card-link-wrapper`}>
          <CardContent />
        </Link>
      );
    }
  }

  // Regular card without link wrapper
  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
});

export default Card;