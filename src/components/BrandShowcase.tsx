'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Check } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { BrandLogo } from './BrandLogo';

export const BrandShowcase: React.FC = () => {
  return (
    <section className="section-padding brand-showcase-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Top Antivirus Brands</span>
          <h2 className="section-title">Industry-Leading Security Solutions</h2>
          <p className="section-subtitle">
            Explore authentic software licenses from the world’s most trusted cybersecurity developers.
          </p>
        </div>

        <div className="brands-grid">
          {BRANDS_DATA.map((brand) => (
            <div key={brand.id} className="card card-hover brand-card">
              <div className="brand-card-top">
                <div className="brand-badge-icon">
                  <BrandLogo slug={brand.slug} size={38} />
                </div>
                <div className="brand-rating">
                  <Star size={15} className="star-icon" />
                  <span className="rating-num">{brand.rating}</span>
                  <span className="rating-count">({brand.reviewCount.toLocaleString()})</span>
                </div>
              </div>

              <h3 className="brand-name">{brand.name} Security</h3>
              <p className="brand-tagline">{brand.tagline}</p>

              <div className="brand-highlights">
                {brand.products[0]?.highlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="brand-hl-item">
                    <Check size={14} className="hl-check" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="brand-card-footer">
                <div className="brand-pricing">
                  <span className="pricing-label">Starting from</span>
                  <span className="pricing-amount">${brand.startingPrice.toFixed(2)} <small>/ year</small></span>
                </div>

                <Link href={`/antivirus/${brand.slug}`} className="btn btn-primary btn-sm">
                  View Plans <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brand-showcase-section {
          background-color: var(--bg-alt);
          border-bottom: 1px solid var(--border-color);
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media (max-width: 900px) {
          .brands-grid {
            grid-template-columns: 1fr;
          }
        }

        .brand-card {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          padding: 32px;
        }

        .brand-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .brand-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
        }

        .brand-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.88rem;
          font-weight: 600;
          background-color: var(--bg-alt);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
        }

        .star-icon {
          color: #F59E0B;
          fill: #F59E0B;
        }

        .rating-count {
          color: var(--text-muted);
          font-weight: 500;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .brand-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .brand-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          padding: 16px;
          background-color: var(--bg-main);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .brand-hl-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .hl-check {
          color: var(--success-green);
          flex-shrink: 0;
        }

        .brand-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .brand-pricing {
          display: flex;
          flex-direction: column;
        }

        .pricing-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .pricing-amount {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .pricing-amount small {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};
