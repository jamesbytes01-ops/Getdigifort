import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { BrandShowcase } from '@/components/BrandShowcase';
import { PlanCard } from '@/components/PlanCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { getFeaturedPlans } from '@/data/brands';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featured = getFeaturedPlans();

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* TRUST / VALUE PROPOSITION SECTION */}
      <TrustSection />

      {/* BRAND SHOWCASE */}
      <BrandShowcase />

      {/* FEATURED PLANS SECTION */}
      <section className="section-padding featured-plans-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Popular Plans</span>
            <h2 className="section-title">Most-Selected Antivirus Packages</h2>
            <p className="section-subtitle">
              Compare our highest-rated multi-device protection plans with clear annual pricing and instant key activation.
            </p>
          </div>

          <div className="featured-plans-grid">
            {featured.slice(0, 3).map(({ product, plan }) => (
              <PlanCard key={plan.id} product={product} plan={plan} />
            ))}
          </div>

          <div className="catalog-link-box">
            <Link href="/antivirus" className="btn btn-secondary btn-lg">
              Explore All Antivirus Plans & Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SIDE-BY-SIDE COMPARISON MATRIX SECTION */}
      <section className="section-padding comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Side-by-Side Comparison</span>
            <h2 className="section-title">Antivirus Brand Feature Comparison</h2>
            <p className="section-subtitle">
              Detailed breakdown of malware detection features, device coverage, VPN allowances, and price points.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="section-padding cta-banner-section">
        <div className="container">
          <CallToActionBanner />
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="section-padding home-faq-section">
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
