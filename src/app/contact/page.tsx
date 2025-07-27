import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shuttle Master",
  description: "Get in touch with Shuttle Master for badminton coaching, training sessions, and questions. Located at Perth Badminton Arena.",
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Get In Touch</div>
          <h2>Contact Information</h2>
          <p className="services-subtitle">Have questions? Ready to start your badminton journey? We&apos;re here to help.</p>
        </div>
        <div className="grid-auto-fit grid-spacing">
          <div className="card">
            <div className="card-icon">📧</div>
            <h3 className="card-title">Email</h3>
            <p className="card-subtitle">Get in touch for bookings and questions</p>
            <p className="card-link">coach@shuttlemaster.com</p>
          </div>

          <a href="https://wa.me/61403429308" className="card card-link-wrapper" target="_blank" rel="noopener noreferrer">
            <div className="card-icon">📱</div>
            <h3 className="card-title">Phone</h3>
            <p className="card-subtitle">Call or text us on WhatsApp for quick responses</p>
            <p className="card-link">+61 403 429 308</p>
          </a>

          <a href="https://www.google.com/maps?q=Perth+Badminton+Arena" className="card card-link-wrapper" target="_blank" rel="noopener noreferrer">
            <div className="card-icon">📍</div>
            <h3 className="card-title">Location</h3>
            <p className="card-subtitle">Training sessions held at</p>
            <p className="card-link">Perth Badminton Arena</p>
          </a>
        </div>
      </div>
    </section>
  );
}