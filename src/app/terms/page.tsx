import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | DIGIFORT Marketplace',
  description: 'Review the Terms of Service governing purchases and digital software licensing on shop.getdigifort.com.',
};

export default function TermsPage() {
  return (
    <div className="policy-page section-padding">
      <div className="container policy-container">
        <div className="policy-header">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Legal Agreement
          </div>
          <h1 className="policy-title">Terms of Service</h1>
          <span className="policy-date">Last Updated: September 2026</span>
        </div>

        <div className="card policy-body-card">
          <section className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or purchasing digital software products on <code>shop.getdigifort.com</code>, you agree to comply with these Terms of Service. If you do not agree with any portion of these terms, please do not use our platform.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Nature of Services</h2>
            <p>
              DIGIFORT operates as an independent digital marketplace offering authentic software activation licenses for third-party antivirus developers (such as Norton, McAfee, Bitdefender, and Webroot). We do not claim ownership of third-party trademarks or proprietary software code.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Digital License Delivery</h2>
            <p>
              All software product keys purchased through DIGIFORT are delivered electronically via on-screen order confirmation and automated email delivery. No physical boxes, media discs, or hardware are shipped.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. User Responsibilities</h2>
            <p>
              Customers are responsible for verifying that their devices (Windows, Mac, Android, or iOS) satisfy minimum system operating requirements before placing an order.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Customer Support & Contact</h2>
            <p>
              For questions regarding order status, terms, or licensing assistance, contact us via email at <strong>support@getdigifort.com</strong> or through our online contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
