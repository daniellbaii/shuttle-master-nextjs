import type { Metadata } from "next";
import { ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/ui';

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
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}