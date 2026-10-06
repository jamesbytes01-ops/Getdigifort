import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | DIGIFORT Marketplace',
  description: 'Read the privacy policy for DIGIFORT (shop.getdigifort.com) explaining data collection, encryption, digital key fulfillment, and protection practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page section-padding">
      <div className="container policy-container">
        <div className="policy-header">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Legal & Data Protection
          </div>
          <h1 className="policy-title">Privacy Policy</h1>
          <span className="policy-date">Last Updated: September 2026</span>
        </div>

        <div className="card policy-body-card">
          <section className="policy-section">
            <h2>1. Overview</h2>
            <p>
              DIGIFORT ("we," "our," or "us"), operating at <code>shop.getdigifort.com</code> and <code>getdigifort.com</code>, respects your personal privacy. This Privacy Policy explains how we collect, use, safeguard, and disclose your personal data when you visit or purchase digital software licenses through our marketplace.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>When you place an order or contact us, we collect necessary customer details to fulfill your digital software purchase, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, and telephone number.</li>
              <li><strong>Order Details:</strong> Purchased software products, device plan selections, and transaction timestamp.</li>
              <li><strong>Payment Information:</strong> Processed securely via encrypted gateway providers. We do not store unencrypted credit card numbers on our local servers.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>Your information is strictly utilized to:</p>
            <ul>
              <li>Deliver product activation keys and setup instructions to your email address.</li>
              <li>Provide customer digital helpdesk and email assistance.</li>
              <li>Prevent unauthorized transaction fraud and ensure SSL security compliance.</li>
              <li>Send transaction receipts and essential service updates.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We enforce 256-bit Secure Sockets Layer (SSL) encryption for all transaction data transmitted across <code>shop.getdigifort.com</code>. We do not sell or rent customer data to third-party marketing brokers.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Contact Information</h2>
            <p>
              If you have any questions regarding your personal data or wish to request data removal, please contact our support team at <strong>support@getdigifort.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
