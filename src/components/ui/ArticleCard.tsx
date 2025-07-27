import React from 'react';
import Link from 'next/link';
import { ArticleCardProps } from '@/types';

const ArticleCard: React.FC<ArticleCardProps> = React.memo(({ article }) => {
  return (
    <article className="article-card">
      <div className="article-card-image">{article.emoji}</div>
      <div className="article-card-content">
        <div className="article-card-meta">
          <span className="article-card-category">{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{article.excerpt}</p>
        <div className="article-card-footer">
          <span className="article-read-time">⏱️ {article.readTime}</span>
          <Link href={`/articles/${article.slug}`} className="article-read-more">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
});

export default ArticleCard;