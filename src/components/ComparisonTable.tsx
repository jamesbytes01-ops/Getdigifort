'use client';

import React, { useState } from 'react';
import { BRANDS_DATA, COMPARISON_FEATURES } from '@/data/brands';
import { Check, X, Shield, ShoppingCart, HelpCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { BrandLogo } from './BrandLogo';

export const ComparisonTable: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedBrandMobile, setSelectedBrandMobile] = useState<string>('norton');

  const categories = Array.from(new Set(COMPARISON_FEATURES.map((f) => f.category)));

  const handleAddPopularPlan = (brandId: string) => {
    const brand = BRANDS_DATA.find((b) => b.id === brandId);
    if (!brand) return;
    const product = brand.products[0];
    const plan = product.plans.find((p) => p.isPopular) || product.plans[0];
    addToCart(product, plan);
  };

  return (
    <div className="comparison-table-wrapper">
      {/* MOBILE BRAND SELECTOR TABS */}
      <div className="mobile-brand-tabs">
        <span className="mobile-tabs-label">Select Brand to View:</span>
        <div className="tabs-flex">
          {BRANDS_DATA.map((brand) => (
            <button
              key={brand.id}
              className={`tab-btn ${selectedBrandMobile === brand.id ? 'active' : ''}`}
              onClick={() => setSelectedBrandMobile(brand.id)}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP FULL MATRIX TABLE */}
      <div className="desktop-matrix-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-th">Feature / Specification</th>
              {BRANDS_DATA.map((brand) => (
                <th key={brand.id} className="brand-th">
                  <div className="th-brand-box">
                    <div className="th-logo-wrap">
                      <BrandLogo slug={brand.slug} size={36} />
                      <span className="th-brand-name">{brand.name}</span>
                    </div>
                    <span className="th-brand-tagline">{brand.tagline.slice(0, 45)}...</span>
                    <button
                      onClick={() => handleAddPopularPlan(brand.id)}
                      className="btn btn-primary btn-sm btn-full th-add-btn"
                    >
                      <ShoppingCart size={14} /> Add {brand.name}
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <React.Fragment key={category}>
                <tr className="category-header-row">
                  <td colSpan={BRANDS_DATA.length + 1} className="category-td">
                    <Shield size={14} className="cat-shield" /> {category}
                  </td>
                </tr>

                {COMPARISON_FEATURES.filter((f) => f.category === category).map((feature) => (
                  <tr key={feature.id} className="feature-data-row">
                    <td className="feature-name-td">
                      <span className="feature-label">{feature.name}</span>
                      {feature.tooltip && (
                        <HelpCircle size={14} className="tooltip-icon" title={feature.tooltip} />
                      )}
                    </td>

                    {BRANDS_DATA.map((brand) => {
                      const val = feature.brandValues[brand.id];
                      return (
                        <td key={brand.id} className="brand-value-td">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <div className="status-icon green">
                                <Check size={18} />
                              </div>
                            ) : (
                              <div className="status-icon gray">
                                <X size={18} />
                              </div>
                            )
                          ) : (
                            <span className="text-val">{val || 'N/A'}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE STACKED VIEW */}
      <div className="mobile-card-view">
        {BRANDS_DATA.filter((b) => b.id === selectedBrandMobile).map((brand) => (
          <div key={brand.id} className="card mobile-comparison-card">
            <div className="mobile-card-head">
              <div className="mobile-brand-title-wrap">
                <BrandLogo slug={brand.slug} size={30} />
                <h3 className="mobile-brand-title">{brand.name} Security</h3>
              </div>
              <span className="mobile-starting-price">From ${brand.startingPrice.toFixed(2)}/yr</span>
            </div>

            <p className="mobile-brand-desc">{brand.description}</p>

            <button
              onClick={() => handleAddPopularPlan(brand.id)}
              className="btn btn-primary btn-full mb-16"
            >
              <ShoppingCart size={16} /> Select {brand.name} Plan
            </button>

            <div className="mobile-feature-accordion">
              {COMPARISON_FEATURES.map((feat) => {
                const val = feat.brandValues[brand.id];
                return (
                  <div key={feat.id} className="mobile-feat-row">
                    <span className="mobile-feat-name">{feat.name}</span>
                    <span className="mobile-feat-val">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <span className="yes-text"><Check size={14} /> Yes</span>
                        ) : (
                          <span className="no-text"><X size={14} /> No</span>
                        )
                      ) : (
                        val
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .comparison-table-wrapper {
          width: 100%;
        }

        .desktop-matrix-container {
          overflow-x: auto;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .feature-th {
          width: 25%;
          padding: 24px;
          background-color: var(--bg-alt);
          border-bottom: 2px solid var(--border-color);
          font-size: 1rem;
          font-weight: 600;
          color: var(--navy-primary);
        }

        .brand-th {
          width: 18.75%;
          padding: 20px 16px;
          background-color: var(--bg-surface);
          border-bottom: 2px solid var(--border-color);
          border-left: 1px solid var(--border-subtle);
          vertical-align: top;
        }

        .th-brand-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .th-logo-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .th-brand-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--navy-primary);
        }

        .th-brand-tagline {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.35;
          min-height: 32px;
        }

        .th-add-btn {
          margin-top: 8px;
        }

        .category-header-row {
          background-color: #F1F5F9;
        }

        .category-td {
          padding: 12px 24px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--navy-primary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .feature-data-row {
          border-bottom: 1px solid var(--border-subtle);
          transition: background-color 0.15s;
        }

        .feature-data-row:hover {
          background-color: var(--bg-main);
        }

        .feature-name-td {
          padding: 16px 24px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tooltip-icon {
          color: var(--text-muted);
          cursor: help;
        }

        .brand-value-td {
          padding: 16px;
          border-left: 1px solid var(--border-subtle);
          text-align: center;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .status-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }

        .status-icon.green {
          background-color: var(--success-bg);
          color: var(--success-green);
        }

        .status-icon.gray {
          background-color: #F1F5F9;
          color: #94A3B8;
        }

        .text-val {
          font-weight: 600;
          color: var(--navy-primary);
        }

        /* Mobile View Styles */
        .mobile-brand-tabs {
          display: none;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .mobile-tabs-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .tabs-flex {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .tab-btn {
          padding: 10px 18px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-color);
          background-color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          white-space: nowrap;
        }

        .tab-btn.active {
          background-color: var(--navy-primary);
          color: #ffffff;
          border-color: var(--navy-primary);
        }

        .mobile-card-view {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-matrix-container {
            display: none;
          }
          .mobile-brand-tabs, .mobile-card-view {
            display: flex;
          }
        }

        .mobile-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mobile-brand-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .mobile-starting-price {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
        }

        .mobile-brand-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .mb-16 {
          margin-bottom: 20px;
        }

        .mobile-feature-accordion {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-color);
        }

        .mobile-feat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.88rem;
        }

        .mobile-feat-name {
          font-weight: 600;
          color: var(--text-secondary);
        }

        .mobile-feat-val {
          font-weight: 700;
          color: var(--navy-primary);
        }

        .yes-text {
          color: var(--success-green);
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }

        .no-text {
          color: var(--text-light);
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }
      `}</style>
    </div>
  );
};
