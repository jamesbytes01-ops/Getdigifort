'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Shield, ArrowRight } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  return (
    <div className="cta-banner-card">
      <div className="cta-content">
        <div className="cta-icon-wrap">
          <Shield size={28} className="cta-shield" />
        </div>
        <div className="cta-text-group">
          <h3 className="cta-title">Need Help Choosing the Right Protection?</h3>
          <p className="cta-desc">
            Our digital security specialists can answer questions about multi-device licensing, device compatibility, and plan features.
          </p>
        </div>
      </div>

      <div className="cta-actions">
        <Link href="/contact" className="btn btn-gold btn-lg">
          <Mail size={18} /> Contact Support Desk
        </Link>
        <Link href="/compare/antivirus" className="btn btn-secondary btn-lg">
          Compare Plans <ArrowRight size={16} />
        </Link>
      </div>

      <style jsx>{`
        .cta-banner-card {
          background-color: var(--navy-primary);
          color: #ffffff;
          border-radius: var(--radius-lg);
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: var(--shadow-lg);
          border: 1px solid #1E293B;
        }

        @media (max-width: 900px) {
          .cta-banner-card {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
          }
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .cta-content {
            flex-direction: column;
          }
        }

        .cta-icon-wrap {
          width: 56px;
          height: 56px;
          background-color: #1E293B;
          border: 1px solid #334155;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-shield {
          color: var(--accent-gold);
        }

        .cta-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .cta-desc {
          font-size: 0.95rem;
          color: #CBD5E1;
          line-height: 1.6;
          max-width: 540px;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .cta-actions .btn {
            width: 100%;
          }
        }

        .cta-phone-btn {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
