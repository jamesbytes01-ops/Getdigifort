import React from 'react';
import { ComparisonTable } from '@/components/ComparisonTable';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Antivirus Comparison Matrix | Norton vs McAfee vs Bitdefender vs Webroot | DIGIFORT',
  description: 'Side-by-side comparison of major antivirus software brands. Compare price per device, malware detection engines, VPN features, and ransomware defenses.',
};

export default function AntivirusComparePage() {
  return (
    <div className="compare-page">
      {/* COMPARE HERO */}
      <div className="compare-hero">
        <div className="container">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Objective Software Matrix
          </div>
          <h1 className="hero-title">Side-by-Side Antivirus Brand Comparison</h1>
          <p className="hero-desc">
            Compare features, multi-device licenses, real-time shields, identity protection, and annual costs across Norton, McAfee, Bitdefender, and Webroot.
          </p>
        </div>
      </div>

      {/* MATRIX TABLE CONTAINER */}
      <div className="container section-padding">
        <ComparisonTable />

        <div className="mt-56">
          <CallToActionBanner />
        </div>
      </div>

      {/* FAQ */}
      <div className="section-padding bg-main border-t">
        <div className="container">
          <FAQAccordion
            title="Comparison & Selection FAQs"
            subtitle="Guidance on choosing between antivirus engines, device counts, and operating systems."
          />
        </div>
      </div>
    </div>
  );
}
