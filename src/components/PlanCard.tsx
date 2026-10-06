'use client';

import React from 'react';
import { Plan, Product } from '@/types';
import { Check, ShoppingCart, Shield, Monitor, Laptop, Smartphone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { BrandLogo } from './BrandLogo';

interface PlanCardProps {
  product: Product;
  plan: Plan;
}

export const PlanCard: React.FC<PlanCardProps> = ({ product, plan }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, plan);
  };

  const discountPercent = Math.round(
    ((plan.originalPrice - plan.price) / plan.originalPrice) * 100
  );

  const brandSlug = product.brandId || plan.id;

  return (
    <div className={`card plan-card ${plan.isPopular ? 'popular-plan' : ''}`}>
      {plan.isPopular && (
        <div className="popular-badge-ribbon">
          <Shield size={13} /> Recommended Plan
        </div>
      )}

      <div className="plan-header">
        <div className="plan-brand-bar">
          <BrandLogo slug={brandSlug} size={32} />
          <span className="brand-name-tag">{product.brandName}</span>
        </div>
        <h3 className="plan-title">{plan.name}</h3>
        <p className="plan-tagline">{plan.tagline}</p>
      </div>

      <div className="plan-device-badge-row">
        <span className="device-badge">
          <Monitor size={14} /> {plan.deviceLabel}
        </span>
        <div className="os-icons">
          {plan.osSupport.includes('Windows') && <Monitor size={14} title="Windows PC" />}
          {plan.osSupport.includes('macOS') && <Laptop size={14} title="macOS" />}
          {(plan.osSupport.includes('Android') || plan.osSupport.includes('iOS')) && (
            <Smartphone size={14} title="Mobile Support" />
          )}
        </div>
      </div>

      <div className="plan-price-block">
        <div className="price-row">
          <span className="current-price">${plan.price.toFixed(2)}</span>
          <span className="billing-period">/ {plan.billingPeriod.toLowerCase()}</span>
        </div>
        {plan.originalPrice > plan.price && (
          <div className="original-price-row">
            <span className="strikethrough-price">${plan.originalPrice.toFixed(2)}</span>
            <span className="discount-tag">Save {discountPercent}%</span>
          </div>
        )}
      </div>

      <div className="plan-features-list">
        <span className="features-title">Included Features:</span>
        {plan.features.map((feature, i) => (
          <div key={i} className="feature-bullet">
            <Check size={16} className="feature-check-icon" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="plan-card-action">
        <button
          onClick={handleAddToCart}
          className={`btn btn-full ${plan.isPopular ? 'btn-gold' : 'btn-primary'}`}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
        <span className="delivery-note">Instant Digital Key Delivery</span>
      </div>

      <style jsx>{`
        .plan-card {
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: #ffffff;
          padding: 32px 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
        }

        .plan-card.popular-plan {
          border: 2px solid var(--accent-gold);
          box-shadow: var(--shadow-md);
        }

        .popular-badge-ribbon {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--accent-gold);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 14px;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 6px rgba(197, 155, 39, 0.4);
        }

        .plan-header {
          margin-bottom: 18px;
        }

        .plan-brand-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .brand-name-tag {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--navy-primary);
          background-color: var(--bg-alt);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
        }

        .plan-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.28;
          margin-bottom: 6px;
        }

        .plan-tagline {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .plan-device-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          margin-bottom: 22px;
          border: 1px solid var(--border-subtle);
        }

        .device-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--navy-primary);
        }

        .os-icons {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
        }

        .plan-price-block {
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .current-price {
          font-size: 2.1rem;
          font-weight: 600;
          color: var(--navy-primary);
          letter-spacing: -0.02em;
        }

        .billing-period {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .original-price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 2px;
        }

        .strikethrough-price {
          font-size: 0.9rem;
          text-decoration: line-through;
          color: var(--text-light);
        }

        .discount-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--success-green);
          background-color: var(--success-bg);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .plan-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .feature-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .feature-check-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .plan-card-action {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .delivery-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};
