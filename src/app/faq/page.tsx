import React from 'react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | DIGIFORT Digital Marketplace',
  description: 'Find answers about digital license keys, instant delivery, device compatibility, activation guides, and refund policies at DIGIFORT.',
};

export default function FAQPage() {
  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Knowledge & Help Center
          </div>
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-desc">
            Find answers to common questions about purchasing antivirus software, instant digital key delivery, device coverage, and technical activation.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <FAQAccordion
          title=""
          subtitle=""
        />

        <div className="mt-56">
          <CallToActionBanner />
        </div>
      </div>
    </div>
  );
}
