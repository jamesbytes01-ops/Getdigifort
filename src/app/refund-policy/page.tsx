import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';

export const metadata = {
  title: 'Refund & Cancellation Policy | DIGIFORT Marketplace',
  description: 'Understand the 30-day money-back guarantee and refund guidelines for digital software purchases at DIGIFORT.',
};

export default function RefundPolicyPage() {
  return (
    <div className="policy-page section-padding">
      <div className="container policy-container">
        <div className="policy-header">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Customer Guarantee
          </div>
          <h1 className="policy-title">Refund & Cancellation Policy</h1>
          <span className="policy-date">Last Updated: September 2026</span>
        </div>

        <div className="card policy-body-card">
          <section className="policy-section">
            <h2>1. 30-Day Satisfaction Guarantee</h2>
            <p>
              DIGIFORT provides a transparent <strong>30-day money-back guarantee</strong> for software licenses purchased through <code>shop.getdigifort.com</code>. Your satisfaction and device security are our top priorities.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Refund Eligibility Criteria</h2>
            <p>You may request a full refund within 30 days of purchase under the following conditions:</p>
            <ul>
              <li>The digital activation key has not been redeemed or registered on the software developer's servers.</li>
              <li>You experienced an unresolvable hardware incompatibility confirmed by our support team.</li>
              <li>You were mistakenly charged multiple times for the same transaction.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How to Request a Refund</h2>
            <p>To initiate a refund request, please contact customer support with your Order Number (e.g. DIGI-XXXXXX):</p>
            <ul>
              <li><strong>Online Desk:</strong> Submit a support request via support@getdigifort.com</li>
              <li><strong>Email:</strong> Send a request to <strong>support@getdigifort.com</strong></li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Processing Timeframe</h2>
            <p>
              Approved refunds are credited back to your original payment method (Credit Card or PayPal) within 3 to 5 business days, depending on your card issuer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
