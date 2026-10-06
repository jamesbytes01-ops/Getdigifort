'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { OrderDetails } from '@/types';
import { CheckCircle2, Copy, Download, Key, Mail, Phone, ExternalLink, ShieldCheck, Printer } from 'lucide-react';

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [copiedKeyIndex, setCopiedKeyIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('digifort_latest_order');
      if (saved) {
        setOrder(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load order:', e);
    }
  }, []);

  const handleCopyKey = (key: string, idx: number) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyIndex(idx);
    setTimeout(() => setCopiedKeyIndex(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!order) {
    return (
      <div className="container section-padding text-center">
        <div className="card no-order-card">
          <ShieldCheck size={48} className="shield-icon" />
          <h2>No Recent Order Found</h2>
          <p>If you recently completed a purchase, please check your email inbox for your digital activation key.</p>
          <Link href="/antivirus" className="btn btn-primary mt-16">
            Return to Software Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-page section-padding">
      <div className="container">
        {/* SUCCESS HEADER */}
        <div className="card success-header-card">
          <div className="success-icon-wrap">
            <CheckCircle2 size={40} className="check-green" />
          </div>

          <div className="success-header-text">
            <span className="success-eyebrow">Digital License Issued</span>
            <h1 className="success-title">Your Order is Confirmed!</h1>
            <p className="success-desc">
              Thank you for licensing through DIGIFORT. Your authentic digital product keys have been generated below and sent to <strong>{order.customerEmail}</strong>.
            </p>
          </div>

          <div className="order-meta-box">
            <div className="meta-line">
              <span className="meta-lbl">Order Number:</span>
              <strong className="meta-val">{order.orderNumber}</strong>
            </div>
            <div className="meta-line">
              <span className="meta-lbl">Order Date:</span>
              <span>{order.orderDate}</span>
            </div>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm print-btn">
              <Printer size={14} /> Print Invoice
            </button>
          </div>
        </div>

        {/* DIGITAL KEYS SECTION */}
        <div className="section-title-wrap">
          <h2 className="section-heading">
            <Key size={20} className="key-heading-icon" /> Digital License Keys & Activation
          </h2>
          <p className="heading-sub">Copy your key and follow the official software developer link to activate.</p>
        </div>

        <div className="keys-list">
          {order.licenseKeys.map((item, idx) => (
            <div key={idx} className="card license-key-card">
              <div className="key-card-head">
                <div>
                  <span className="key-prod-name">{item.productName}</span>
                  <span className="key-plan-name">{item.planName}</span>
                </div>
                <span className="delivery-status-pill">
                  <CheckCircle2 size={12} /> Ready for Activation
                </span>
              </div>

              <div className="key-display-box">
                <span className="key-label">Product Key (25-Character):</span>
                <div className="key-value-row">
                  <code className="key-code">{item.key}</code>
                  <button
                    onClick={() => handleCopyKey(item.key, idx)}
                    className="btn btn-secondary btn-sm copy-btn"
                  >
                    <Copy size={14} /> {copiedKeyIndex === idx ? 'Copied!' : 'Copy Key'}
                  </button>
                </div>
              </div>

              <div className="activation-steps">
                <h4 className="steps-title">Activation Instructions:</h4>
                <ol className="steps-list">
                  <li>Copy your unique 25-character license key above.</li>
                  <li>Go to the official software registration & download portal.</li>
                  <li>Sign in or create your user account, enter your key, and download your installer.</li>
                </ol>

                <a
                  href={item.instructionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm external-act-btn"
                >
                  Go to Activation Portal <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY RECAP & SUPPORT */}
        <div className="confirmation-bottom-grid">
          <div className="card summary-recap-card">
            <h3 className="recap-title">Purchase Details</h3>
            <div className="recap-items">
              {order.items.map((it) => (
                <div key={it.planId} className="recap-item-row">
                  <span>{it.planName} ({it.deviceCount} Device, {it.billingPeriod})</span>
                  <strong>${(it.price * it.quantity).toFixed(2)}</strong>
                </div>
              ))}
            </div>
            <div className="recap-divider" />
            <div className="recap-total-row">
              <span>Total Paid Today:</span>
              <strong>${order.total.toFixed(2)}</strong>
            </div>
            <div className="recap-pm">Payment Method: {order.paymentMethod}</div>
          </div>

          <div className="card support-card">
            <h3 className="support-title">Need Activation Assistance?</h3>
            <p className="support-desc">
              If you experience any difficulties installing or activating your product key, our team is ready to guide you.
            </p>

            <div className="support-actions">
              <Link href="/contact" className="btn btn-primary btn-full">
                <Mail size={16} /> Contact Support Desk
              </Link>
              <a href="mailto:support@getdigifort.com" className="btn btn-secondary btn-full">
                <Mail size={16} /> Email support@getdigifort.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .confirmation-page {
          background-color: var(--bg-main);
        }

        .success-header-card {
          padding: 36px;
          display: flex;
          align-items: center;
          gap: 28px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--success-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .check-green {
          color: var(--success-green);
        }

        .success-header-text {
          flex-grow: 1;
        }

        .success-eyebrow {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--success-green);
          display: block;
          margin-bottom: 4px;
        }

        .success-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--navy-primary);
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .success-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .order-meta-box {
          background-color: var(--bg-alt);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 220px;
        }

        .meta-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .meta-val {
          color: var(--navy-primary);
          font-weight: 800;
        }

        .print-btn {
          margin-top: 6px;
        }

        .section-title-wrap {
          margin-bottom: 24px;
        }

        .section-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .key-heading-icon {
          color: var(--accent-gold-dark);
        }

        .heading-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .keys-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .license-key-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .key-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .key-prod-name {
          display: block;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-primary);
        }

        .key-plan-name {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .delivery-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--success-green);
          background-color: var(--success-bg);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
        }

        .key-display-box {
          background-color: var(--bg-alt);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px dashed var(--navy-primary);
        }

        .key-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .key-value-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .key-code {
          font-family: monospace;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--navy-primary);
          letter-spacing: 0.05em;
        }

        .activation-steps {
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
        }

        .steps-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 8px;
        }

        .steps-list {
          padding-left: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .external-act-btn {
          display: inline-flex;
        }

        .confirmation-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        @media (max-width: 800px) {
          .confirmation-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        .recap-title, .support-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 14px;
        }

        .recap-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
        }

        .recap-item-row {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
        }

        .recap-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 12px 0;
        }

        .recap-total-row {
          display: flex;
          justify-content: space-between;
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--navy-primary);
        }

        .recap-pm {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .support-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .support-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .no-order-card {
          padding: 48px;
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .shield-icon {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
