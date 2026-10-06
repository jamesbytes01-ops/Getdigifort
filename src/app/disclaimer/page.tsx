import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Reseller & Brand Disclaimer | DIGIFORT Marketplace',
  description: 'Disclaimer regarding brand ownership, reseller relationships, and independent software distribution at DIGIFORT (shop.getdigifort.com).',
};

export default function DisclaimerPage() {
  return (
    <div className="policy-page section-padding">
      <div className="container policy-container">
        <div className="policy-header">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Partner & Trademark Notice
          </div>
          <h1 className="policy-title">Reseller & Brand Disclaimer</h1>
          <span className="policy-date">Last Updated: September 2026</span>
        </div>

        <div className="card policy-body-card">
          <section className="policy-section">
            <h2>1. Independent Software Marketplace</h2>
            <p>
              DIGIFORT (operating at <code>shop.getdigifort.com</code> and <code>getdigifort.com</code>) is an independent digital software marketplace and reseller. We distribute authentic software licenses purchased through authorized distributor channels.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Trademarks & Brand Ownership</h2>
            <p>
              All product names, brand logos, and registered trademarks featured on this website—including but not limited to <strong>Norton</strong>, <strong>McAfee</strong>, <strong>Bitdefender</strong>, and <strong>Webroot</strong>—are the sole property of their respective trademark owners. Their reference on this website is for descriptive and identification purposes only and does not imply direct affiliation or endorsement unless explicitly stated.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Genuine License Fulfillment</h2>
            <p>
              All digital product keys provided by DIGIFORT activate directly through official software publisher servers and download channels. We do not distribute unauthorized, cracked, or pirated software packages.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Questions & Support</h2>
            <p>
              If you represent a brand owner or have questions regarding trademark usage, please contact our legal desk at <strong>support@getdigifort.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
