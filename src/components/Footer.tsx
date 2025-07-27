import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS, FOOTER_LINKS } from '@/constants/navigation';

const Footer: React.FC = React.memo(() => {
  return (
    <footer>
      <div className="container footer-flex">
        <div className="footer-column">
          <Link href="/" className="logo logo-flex">
            <img 
              src="/assets/favicon_io/android-chrome-512x512.png" 
              alt="Shuttle Master Logo" 
              width="28" 
              height="28" 
            />
            <span>Shuttle Master</span>
          </Link>
          <p className="footer-copyright">Copyright &copy; Shuttle Master</p>
          <div className="social-icons">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.platform}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={social.icon} 
                  alt={social.alt} 
                  className="social-icon" 
                />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column-narrow">
          <h3 className="footer-heading">Quick Links</h3>
          {FOOTER_LINKS.quickLinks.map((link) => (
            <p key={link.href}>
              <Link href={link.href} className="footer-link">
                {link.label}
              </Link>
            </p>
          ))}
        </div>

        <div className="footer-column-narrow">
          <h3 className="footer-heading">Company</h3>
          {FOOTER_LINKS.company.map((link) => (
            <p key={link.href}>
              <Link href={link.href} className="footer-link">
                {link.label}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default Footer;