import type { Metadata } from "next";
import { Card } from '@/components/ui';

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
          <Card
            icon="📧"
            title="Email"
            subtitle="Get in touch for bookings and questions"
            link="coach@shuttlemaster.com"
          />

          <Card
            icon="📱"
            title="Phone"
            subtitle="Call or text us on WhatsApp for quick responses"
            link="+61 403 429 308"
            href="https://wa.me/61403429308"
            target="_blank"
          />

          <Card
            icon="📍"
            title="Location"
            subtitle="Training sessions held at"
            link="Perth Badminton Arena"
            href="https://www.google.com/maps?q=Perth+Badminton+Arena"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}