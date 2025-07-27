import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Coach | Shuttle Master",
  description: "Learn about Eveshgaran 'Evesh' Vasigaran, former Malaysian national badminton player and Western Australia's leading coach with over 15 years of experience.",
};

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <h1 className="text-center about-title">About the Coach</h1>
        <div className="about-container">
          <p className="about-text">
            <strong>Eveshgaran &quot;Evesh&quot; Vasigaran</strong> is a former Malaysian national badminton player and one of Western Australia&apos;s leading coaches, bringing over 15 years of international playing and coaching experience to the court. Currently based in Perth, he combines elite-level knowledge with a genuine passion for helping players of all levels improve.
          </p>
          <div className="section-badge">Career</div>
          <h3 className="about-heading">From National Athlete to International Competitor</h3>
          <p className="about-text">
            Born and raised in Malaysia, Eveshgaran earned his place on the <strong>Malaysian national senior team</strong>, where he competed professionally in BWF-sanctioned tournaments across Asia and Oceania. During his career, he achieved a <strong>world ranking of No. 227</strong> in Men&apos;s Singles and won over <strong>45 international matches</strong>.
          </p>

          <ul className="about-list">
            <li>Semi-finalist at the 2017 Nepal International Series (Mixed Doubles)</li>
            <li>Quarter-finalist at the 2018 Bangladesh International Challenge</li>
            <li>Seeded competitor at events like the 2019 Waikato International</li>
          </ul>

          <div className="section-badge">Leadership</div>
          <h3 className="about-heading">Leadership in Western Australia</h3>
          <p className="about-text">
            Now based in Perth, Eveshgaran is currently the <strong>No. 1 ranked Men&apos;s Singles player in Western Australia</strong>. He serves as <strong>Senior Pro and Team Captain</strong> of the PBX Badminton Team at Perth Badminton Arena, where he also mentors rising talent and promotes high-performance training.
          </p>
          <div className="section-badge">Philosophy</div>
          <h3 className="about-heading">Coaching Philosophy</h3>
          <p className="about-text">
            As founder of <strong>Shuttle Master</strong>, Eveshgaran&apos;s coaching philosophy is centered on helping players <strong>play smarter, not just harder</strong>. His training focuses on:
          </p>

          <ul className="about-list">
            <li>Technical precision and footwork</li>
            <li>Tactical decision-making</li>
            <li>Strength and conditioning</li>
            <li>Mental confidence and discipline</li>
          </ul>

          <p className="about-text">
            He works with players of all levels — from beginners to tournament athletes — always bringing energy, structure, and purpose to every session.
          </p>
          <div className="section-badge">Community</div>
          <h3 className="about-heading">Community Engagement & Recognition</h3>
          <p className="about-text">
            Eveshgaran plays an active role in Western Australia&apos;s badminton scene. He regularly coaches at Perth Badminton Arena, leads community programs, mentors junior athletes, and participates in local tournaments. His presence in the badminton community is both inspiring and impactful.
          </p>
          <p className="about-text">
            Whether you&apos;re just starting out or looking to elevate your performance, <strong>Coach Evesh</strong> brings the international experience, coaching expertise, and dedication needed to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
}