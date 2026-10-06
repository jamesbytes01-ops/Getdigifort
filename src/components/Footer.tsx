'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Phone, Mail, MapPin, Lock, CheckCircle2 } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { DigifortLogo } from './DigifortLogo';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  let brandNameText = 'Norton, McAfee, Bitdefender, or Webroot';
  let trademarkText = 'Norton, McAfee, Bitdefender, and Webroot and related names are trademarks of their respective owners and are referenced here for comparison purposes only.';

  if (pathname?.includes('/antivirus/norton')) {
    brandNameText = 'Norton';
    trademarkText = 'Norton and related names are trademarks of their respective owners and are referenced here for comparison purposes only.';
  } else if (pathname?.includes('/antivirus/mcafee')) {
    brandNameText = 'McAfee, LLC';
    trademarkText = 'McAfee and related names are trademarks of their respective owners and are referenced here for comparison purposes only.';
  } else if (pathname?.includes('/antivirus/bitdefender')) {
    brandNameText = 'Bitdefender';
    trademarkText = 'Bitdefender and related names are trademarks of their respective owners and are referenced here for comparison purposes only.';
  } else if (pathname?.includes('/antivirus/webroot')) {
    brandNameText = 'Webroot';
    trademarkText = 'Webroot and related names are trademarks of their respective owners and are referenced here for comparison purposes only.';
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* COLUMN 1: BRAND INFO */}
          <div className="footer-col footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Digifort Home">
              <DigifortLogo size="md" variant="light" showSubtitle={true} />
            </Link>

            <p className="footer-desc">
              DIGIFORT is an independent digital security software marketplace. We help consumers compare, select, and acquire authentic antivirus and multi-device protection plans with guaranteed digital delivery and expert customer assistance.
            </p>

            <div className="footer-contact-list">
              <a href="mailto:support@getdigifort.com" className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <span>support@getdigifort.com</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>100 Enterprise Way, Suite 400, Austin, TX 78701</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ANTIVIRUS BRANDS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Antivirus Brands</h4>
            <ul className="footer-links">
              {BRANDS_DATA.map((brand) => (
                <li key={brand.id}>
                  <Link href={`/antivirus/${brand.slug}`}>{brand.name} Security</Link>
                </li>
              ))}
              <li>
                <Link href="/antivirus">All Antivirus Products</Link>
              </li>
              <li>
                <Link href="/compare/antivirus">Side-by-Side Comparison</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Digifort</Link>
              </li>
              <li>
                <Link href="/contact">Contact Support</Link>
              </li>
              <li>
                <Link href="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/compare/antivirus">Compare Security Plans</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: POLICIES & TRUST */}
          <div className="footer-col">
            <h4 className="footer-col-title">Policies & Trust</h4>
            <ul className="footer-links">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund & Cancellation Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Reseller & Brand Disclaimer</Link>
              </li>
            </ul>

            <div className="footer-trust-box">
              <div className="trust-box-header">
                <Lock size={15} className="trust-icon" />
                <span>256-Bit SSL Encryption</span>
              </div>
              <p className="trust-box-text">All transactions and digital key deliveries are processed over encrypted security protocols.</p>
            </div>
          </div>
        </div>

        {/* PROMINENT FOOTER DISCLAIMER */}
        <div className="footer-landing-disclaimer">
          <p className="landing-disclaimer-text">
            GetDigiFort Digital Commerce PH is an independent digital commerce platform operated by DMB Transit Inc. and is not affiliated with, endorsed by, or sponsored by {brandNameText}. {trademarkText}
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} GetDigiFort. Owned and Operated by DMB Transit Inc.. All Rights Reserved.
          </div>

          <div className="payment-badges">
            <span className="payment-badge">Visa</span>
            <span className="payment-badge">Mastercard</span>
            <span className="payment-badge">Amex</span>
            <span className="payment-badge">PayPal</span>
            <span className="payment-badge">Apple Pay</span>
            <span className="payment-badge ssl-badge">
              <CheckCircle2 size={12} /> SSL Verified
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--navy-primary);
          color: #94A3B8;
          padding-top: 72px;
          padding-bottom: 40px;
          border-top: 1px solid #1E293B;
          margin-top: auto;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.25fr;
          gap: 0;
          margin-bottom: 56px;
        }

        .footer-col {
          padding-left: 36px;
          padding-right: 36px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-col:first-child {
          padding-left: 0;
        }

        .footer-col:last-child {
          padding-right: 0;
          border-right: none;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px 0;
          }
          .footer-col {
            padding-left: 20px;
            padding-right: 20px;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
          .footer-col:nth-child(2n) {
            border-right: none;
          }
          .footer-brand-col {
            grid-column: span 2;
            padding-left: 0;
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 32px;
            margin-bottom: 8px;
          }
        }

        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-col {
            padding-left: 0;
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 24px;
          }
          .footer-col:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background-color: var(--accent-gold);
          color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-title {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .footer-logo-subtitle {
          display: block;
          font-size: 0.62rem;
          font-weight: 600;
          color: var(--accent-gold);
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #CBD5E1;
          margin-bottom: 24px;
          max-width: 440px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #E2E8F0;
          transition: color 0.2s;
        }

        a.footer-contact-item:hover {
          color: var(--accent-gold);
        }

        .contact-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .footer-col-title {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: #CBD5E1;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-trust-box {
          margin-top: 24px;
          background-color: #1E293B;
          border: 1px solid #334155;
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .trust-box-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .trust-icon {
          color: var(--success-green);
        }

        .trust-box-text {
          font-size: 0.78rem;
          color: #94A3B8;
          line-height: 1.45;
        }

        .footer-landing-disclaimer {
          background-color: #1E293B;
          border: 1px solid #334155;
          border-left: 4px solid var(--accent-gold, #FACC15);
          border-radius: var(--radius-md, 8px);
          padding: 18px 24px;
          margin-top: 36px;
          margin-bottom: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .landing-disclaimer-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #E2E8F0;
          margin: 0;
          font-weight: 400;
        }

        .footer-bottom {
          padding-top: 28px;
          border-top: 1px solid #1E293B;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: #94A3B8;
        }

        .payment-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .payment-badge {
          background-color: #1E293B;
          border: 1px solid #334155;
          color: #E2E8F0;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ssl-badge {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--success-green);
          border-color: rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </footer>
  );
};
