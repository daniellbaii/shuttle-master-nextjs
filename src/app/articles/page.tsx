import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Shuttle Master",
  description: "Read expert badminton advice, training articles, and strategy breakdowns to improve your game. Tips from professional coach Evesh Vasigaran.",
};

export default function Articles() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Learn & Improve</div>
          <h2>Badminton Insights & Tips</h2>
          <p className="services-subtitle">Read expert advice, training articles, and strategy breakdowns to stay sharp on and off the court.</p>
        </div>
        <div className="articles-grid">
          <article className="article-card">
            <div className="article-card-image">🏸</div>
            <div className="article-card-content">
              <div className="article-card-meta">
                <span className="article-card-category">Technique</span>
                <span>December 15, 2024</span>
              </div>
              <h3 className="article-card-title">Mastering the Perfect Badminton Serve</h3>
              <p className="article-card-excerpt">Learn the fundamentals of serving in badminton, from proper grip to footwork positioning. Master both high serves and short serves to gain the upper hand in your matches.</p>
              <div className="article-card-footer">
                <span className="article-read-time">⏱️ 5 min read</span>
                <Link href="/articles/serve" className="article-read-more">Read More →</Link>
              </div>
            </div>
          </article>

          <article className="article-card">
            <div className="article-card-image">💪</div>
            <div className="article-card-content">
              <div className="article-card-meta">
                <span className="article-card-category">Fitness</span>
                <span>December 12, 2024</span>
              </div>
              <h3 className="article-card-title">Essential Conditioning Exercises for Badminton Players</h3>
              <p className="article-card-excerpt">Discover the key exercises that will improve your speed, agility, and endurance on the court. Build the physical foundation needed for competitive play.</p>
              <div className="article-card-footer">
                <span className="article-read-time">⏱️ 8 min read</span>
                <Link href="/articles/fitness" className="article-read-more">Read More →</Link>
              </div>
            </div>
          </article>

          <article className="article-card">
            <div className="article-card-image">🧠</div>
            <div className="article-card-content">
              <div className="article-card-meta">
                <span className="article-card-category">Strategy</span>
                <span>December 10, 2024</span>
              </div>
              <h3 className="article-card-title">Reading Your Opponent: Mental Game Strategies</h3>
              <p className="article-card-excerpt">Learn how to analyze your opponent&apos;s playing style and adapt your strategy mid-game. Develop the mental skills that separate good players from great ones.</p>
              <div className="article-card-footer">
                <span className="article-read-time">⏱️ 6 min read</span>
                <Link href="/articles/strategy" className="article-read-more">Read More →</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}