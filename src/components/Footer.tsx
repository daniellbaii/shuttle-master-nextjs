import Link from 'next/link';

export default function Footer() {
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
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/youtube.png" alt="YouTube" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://wa.me/61403429308" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/whatsapp.png" alt="WhatsApp" className="social-icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/discord.png" alt="Discord" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-column-narrow">
          <h3 className="footer-heading">Quick Links</h3>
          <p><Link href="/" className="footer-link">Home</Link></p>
          <p><Link href="/shop" className="footer-link">Shop</Link></p>
          <p><Link href="/articles" className="footer-link">Articles</Link></p>
        </div>

        <div className="footer-column-narrow">
          <h3 className="footer-heading">Company</h3>
          <p><Link href="/about" className="footer-link">About Us</Link></p>
          <p><Link href="/contact" className="footer-link">Contact</Link></p>
        </div>
      </div>
    </footer>
  );
}