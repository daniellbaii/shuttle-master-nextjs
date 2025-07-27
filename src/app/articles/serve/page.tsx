import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mastering the Perfect Badminton Serve | Shuttle Master",
  description: "Learn the fundamentals of serving in badminton, from proper grip to footwork positioning. Master both high serves and short serves.",
};

export default function ServeArticle() {
  return (
    <article className="article-page section-padding">
      <div className="container">
        <div className="article-header">
          <Link href="/articles" className="article-back-link">← Back to Articles</Link>
          <div className="article-meta">
            <span className="article-card-category">Technique</span>
            <span>December 15, 2024</span>
            <span className="article-read-time">⏱️ 5 min read</span>
          </div>
          <h1 className="article-title">Mastering the Perfect Badminton Serve</h1>
        </div>
        
        <div className="article-content">
          <p>The serve is the most important shot in badminton - it&apos;s the only shot you have complete control over. A good serve can put your opponent on the defensive from the very start of the rally, while a poor serve gives them an easy attacking opportunity.</p>
          
          <h3>Types of Serves</h3>
          <p>There are four main types of serves in badminton:</p>
          <ul>
            <li><strong>High Serve:</strong> Sends the shuttlecock high and deep to the back of the court</li>
            <li><strong>Low Serve:</strong> Keeps the shuttlecock low over the net, landing just past the service line</li>
            <li><strong>Flick Serve:</strong> A deceptive serve that looks like a low serve but suddenly goes high</li>
            <li><strong>Drive Serve:</strong> A fast, flat serve aimed at the opponent&apos;s body</li>
          </ul>
          
          <h3>Proper Serving Technique</h3>
          <p>Regardless of which serve you choose, the fundamentals remain the same:</p>
          <ol>
            <li><strong>Grip:</strong> Use a loose forehand grip, with your thumb and index finger controlling the racket</li>
            <li><strong>Stance:</strong> Stand with your non-racket foot forward, body sideways to the net</li>
            <li><strong>Contact Point:</strong> Hit the shuttlecock below waist level - this is a rule in badminton</li>
            <li><strong>Follow Through:</strong> Complete your swing in the direction you want the shuttlecock to go</li>
          </ol>
          
          <p>Practice these serves regularly, and you&apos;ll notice an immediate improvement in your game. Remember, variety is key - keep your opponent guessing by mixing up your serves throughout the match.</p>
          
          <div className="article-footer">
            <Link href="/articles" className="btn-secondary">← Back to Articles</Link>
          </div>
        </div>
      </div>
    </article>
  );
}