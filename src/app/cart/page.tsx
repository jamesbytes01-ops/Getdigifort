'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Mail, Monitor, Lock } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, savings, total, cartCount } = useCart();

  return (
    <div className="cart-page section-padding">
      <div className="container">
        <div className="cart-header">
          <div className="cart-title-group">
            <ShoppingBag size={28} className="cart-icon" />
            <div>
              <h1 className="cart-title">Your Digital Software Cart</h1>
              <span className="cart-count-text">
                {cartCount === 0
                  ? 'Your cart is currently empty'
                  : `You have ${cartCount} plan${cartCount > 1 ? 's' : ''} in your cart`}
              </span>
            </div>
          </div>

          <Link href="/contact" className="cart-help-link">
            <Mail size={16} /> Need help choosing? Contact Support
          </Link>
        </div>

        {cart.length > 0 ? (
          <div className="cart-grid">
            {/* ITEMS LIST */}
            <div className="cart-items-column">
              {cart.map((item) => (
                <div key={item.planId} className="card cart-item-card">
                  <div className="item-info">
                    <div className="cart-brand-badge-wrap">
                      <BrandLogo slug={item.brandId || item.brandName} size={28} />
                      <div className="brand-pill">{item.brandName}</div>
                    </div>
                    <h3 className="item-title">{item.planName}</h3>
                    <div className="item-specs">
                      <span className="spec-item">
                        <Monitor size={14} /> {item.deviceCount} Device{item.deviceCount > 1 ? 's' : ''}
                      </span>
                      <span className="spec-dot">•</span>
                      <span className="spec-item">{item.billingPeriod} Subscription</span>
                    </div>
                  </div>

                  <div className="item-qty-price">
                    <div className="qty-controls">
                      <button
                        onClick={() => updateQuantity(item.planId, item.quantity - 1)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.planId, item.quantity + 1)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="price-box">
                      <span className="item-total-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="item-orig-price">
                          ${(item.originalPrice * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.planId)}
                      className="remove-btn"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-actions-row">
                <Link href="/antivirus" className="btn btn-secondary">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* ORDER SUMMARY COLUMN */}
            <div className="cart-summary-column">
              <div className="card summary-card">
                <h3 className="summary-title">Order Summary</h3>

                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="summary-line savings-line">
                    <span>Plan Discounts</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                )}

                <div className="summary-line delivery-line">
                  <span>Delivery Method</span>
                  <span className="green-text">Digital (Instant Email)</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-line total-line">
                  <span>Total Due Today</span>
                  <span className="total-amount">${total.toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="btn btn-primary btn-full btn-lg checkout-btn">
                  Proceed to Checkout <ArrowRight size={18} />
                </Link>

                <div className="summary-guarantees">
                  <div className="guarantee-item">
                    <ShieldCheck size={16} className="g-icon" />
                    <span>256-Bit SSL Encrypted Order</span>
                  </div>
                  <div className="guarantee-item">
                    <Lock size={16} className="g-icon" />
                    <span>Instant License Key Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-card card">
            <ShoppingBag size={48} className="empty-cart-icon" />
            <h2>Your Shopping Cart is Empty</h2>
            <p>You haven't added any antivirus plans to your cart yet.</p>
            <div className="empty-cart-actions">
              <Link href="/antivirus" className="btn btn-primary btn-lg">
                Browse Antivirus Products <ArrowRight size={18} />
              </Link>
              <Link href="/compare/antivirus" className="btn btn-secondary btn-lg">
                Compare Plans Matrix
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-page {
          background-color: var(--bg-main);
        }

        .cart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 16px;
        }

        .cart-title-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cart-icon {
          color: var(--navy-primary);
        }

        .cart-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--navy-primary);
          line-height: 1.2;
        }

        .cart-count-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .cart-help-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          background-color: var(--accent-gold-light);
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--accent-gold-border);
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
        }

        @media (max-width: 960px) {
          .cart-grid {
            grid-template-columns: 1fr;
          }
        }

        .cart-items-column {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cart-item-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cart-brand-badge-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .brand-pill {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--navy-primary);
          background-color: var(--bg-alt);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
        }

        .item-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 6px;
        }

        .item-specs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .spec-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .spec-dot {
          color: var(--border-color);
        }

        .item-qty-price {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          background-color: var(--bg-alt);
          border: none;
          font-weight: 800;
          color: var(--navy-primary);
          cursor: pointer;
        }

        .qty-val {
          padding: 0 12px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .price-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          min-width: 90px;
        }

        .item-total-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .item-orig-price {
          font-size: 0.8rem;
          text-decoration: line-through;
          color: var(--text-light);
        }

        .remove-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          transition: color 0.15s;
          padding: 4px;
        }

        .remove-btn:hover {
          color: var(--danger-red);
        }

        .cart-actions-row {
          margin-top: 10px;
        }

        /* Summary Card */
        .summary-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
        }

        .summary-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-primary);
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .summary-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .savings-line {
          color: var(--success-green);
          font-weight: 600;
        }

        .delivery-line {
          font-size: 0.88rem;
        }

        .green-text {
          color: var(--success-green);
          font-weight: 700;
        }

        .summary-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 4px 0;
        }

        .total-line {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .total-amount {
          font-size: 1.6rem;
          color: var(--navy-primary);
        }

        .checkout-btn {
          margin-top: 8px;
        }

        .summary-guarantees {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          margin-top: 8px;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .g-icon {
          color: var(--navy-primary);
        }

        /* Empty Cart State */
        .empty-cart-card {
          padding: 64px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .empty-cart-icon {
          color: var(--text-light);
        }

        .empty-cart-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 12px;
        }
      `}</style>
    </div>
  );
}
