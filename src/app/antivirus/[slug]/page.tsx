import React from 'react';
import { getBrandBySlug, BRANDS_DATA } from '@/data/brands';
import { notFound } from 'next/navigation';
import { PlanCard } from '@/components/PlanCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { BrandLogo } from '@/components/BrandLogo';
import { ShieldCheck, Phone, CheckCircle2, Star, Monitor, Laptop, Smartphone, Lock, Key, Cloud, Eye, Zap, Cpu, Award } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BRANDS_DATA.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Brand Not Found | DIGIFORT' };

  return {
    title: `${brand.name} Antivirus & Security Plans | DIGIFORT Marketplace`,
    description: `Compare official ${brand.name} security software plans. Real-time malware protection, VPN, cloud backup, and multi-device coverage with instant digital delivery.`,
  };
}

const getBenefitIcon = (iconName?: string, title?: string) => {
  const lowerTitle = (title || '').toLowerCase();
  if (iconName === 'Lock' || lowerTitle.includes('vpn') || lowerTitle.includes('privacy')) return Lock;
  if (iconName === 'Key' || lowerTitle.includes('password') || lowerTitle.includes('vault') || lowerTitle.includes('identity')) return Key;
  if (iconName === 'Cloud' || lowerTitle.includes('backup') || lowerTitle.includes('storage')) return Cloud;
  if (iconName === 'Eye' || lowerTitle.includes('phishing') || lowerTitle.includes('web') || lowerTitle.includes('cam')) return Eye;
  if (iconName === 'Zap' || lowerTitle.includes('performance') || lowerTitle.includes('speed') || lowerTitle.includes('optimization')) return Zap;
  if (iconName === 'Cpu' || lowerTitle.includes('ai') || lowerTitle.includes('malware') || lowerTitle.includes('threat')) return Cpu;
  return ShieldCheck;
};

const getBenefitColorClass = (brandSlug: string, idx: number) => {
  if (brandSlug === 'norton') return idx % 2 === 0 ? 'gold' : 'blue';
  if (brandSlug === 'mcafee') return idx % 2 === 0 ? 'red' : 'purple';
  if (brandSlug === 'bitdefender') return idx % 2 === 0 ? 'blue' : 'gold';
  return idx % 2 === 0 ? 'green' : 'blue';
};

/* BESPOKE HERO VISUAL WIDGETS FOR EACH BRAND */
const renderBrandHeroVisual = (slug: string, brandName: string) => {
  if (slug === 'norton') {
    return (
      <div className="card brand-visual-card norton-visual">
        <div className="visual-badge-header">
          <BrandLogo slug="norton" size={42} />
          <div>
            <span className="visual-title">Norton 360 Command Center</span>
            <span className="visual-subtitle"><span className="pulse-dot gold" /> Active Protection Shield</span>
          </div>
        </div>

        <div className="widget-box gold-tint">
          <div className="widget-row">
            <span className="widget-lbl">AI Threat Detection</span>
            <span className="widget-val text-gold">99.9% Defended</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill gold" style={{ width: '99.9%' }} />
          </div>
        </div>

        <div className="widget-box">
          <div className="widget-row">
            <div className="icon-text">
              <Cloud size={15} className="text-gold" />
              <span>PC Cloud Backup Vault</span>
            </div>
            <span className="widget-val">50 GB Encrypted</span>
          </div>
        </div>

        <div className="widget-grid-2">
          <div className="mini-spec-box">
            <Eye size={14} className="text-gold" />
            <div>
              <span className="mini-title">SafeCam Alert</span>
              <span className="mini-status">Armed</span>
            </div>
          </div>
          <div className="mini-spec-box">
            <Lock size={14} className="text-gold" />
            <div>
              <span className="mini-title">No-Logs VPN</span>
              <span className="mini-status">Active</span>
            </div>
          </div>
        </div>

        <div className="supported-os-box">
          <span className="os-box-label">Supported Operating Systems:</span>
          <div className="os-chips">
            <span className="chip"><Monitor size={13} /> Windows 11/10</span>
            <span className="chip"><Laptop size={13} /> macOS</span>
            <span className="chip"><Smartphone size={13} /> Android / iOS</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'mcafee') {
    return (
      <div className="card brand-visual-card mcafee-visual">
        <div className="visual-badge-header">
          <BrandLogo slug="mcafee" size={42} />
          <div>
            <span className="visual-title">McAfee Protection Center</span>
            <span className="visual-subtitle"><span className="pulse-dot red" /> Real-time Defense Active</span>
          </div>
        </div>

        <div className="mcafee-score-card">
          <div className="score-badge-circle">
            <span className="score-big">98</span>
            <span className="score-small">/ 100</span>
          </div>
          <div className="score-info">
            <h4 className="score-headline">Excellent Protection Score</h4>
            <p className="score-sub">Guided actions active across all devices</p>
          </div>
        </div>

        <div className="widget-box red-tint">
          <div className="widget-row">
            <div className="icon-text">
              <ShieldCheck size={15} className="text-red" />
              <span>Personal Data Cleanup</span>
            </div>
            <span className="widget-val text-red">12 Brokers Cleared</span>
          </div>
        </div>

        <div className="widget-grid-2">
          <div className="mini-spec-box">
            <Lock size={14} className="text-red" />
            <div>
              <span className="mini-title">Automated VPN</span>
              <span className="mini-status">Bank-Grade</span>
            </div>
          </div>
          <div className="mini-spec-box">
            <Award size={14} className="text-red" />
            <div>
              <span className="mini-title">Device Limit</span>
              <span className="mini-status">Unlimited</span>
            </div>
          </div>
        </div>

        <div className="supported-os-box">
          <span className="os-box-label">Supported Operating Systems:</span>
          <div className="os-chips">
            <span className="chip"><Monitor size={13} /> Windows</span>
            <span className="chip"><Laptop size={13} /> macOS</span>
            <span className="chip"><Smartphone size={13} /> Android / iOS</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'bitdefender') {
    return (
      <div className="card brand-visual-card bitdefender-visual">
        <div className="visual-badge-header">
          <BrandLogo slug="bitdefender" size={42} />
          <div>
            <span className="visual-title">Bitdefender Photon™ Dashboard</span>
            <span className="visual-subtitle"><span className="pulse-dot blue" /> Autopilot Mode ON</span>
          </div>
        </div>

        <div className="bitdefender-metrics-grid">
          <div className="bd-metric-box">
            <span className="bd-metric-val">0.2s</span>
            <span className="bd-metric-lbl">Response Speed</span>
          </div>
          <div className="bd-metric-box">
            <span className="bd-metric-val">&lt; 1%</span>
            <span className="bd-metric-lbl">CPU Impact</span>
          </div>
          <div className="bd-metric-box">
            <span className="bd-metric-val">100%</span>
            <span className="bd-metric-lbl">Ransomware Shield</span>
          </div>
        </div>

        <div className="widget-box blue-tint">
          <div className="widget-row">
            <div className="icon-text">
              <Lock size={15} className="text-blue" />
              <span>Bitdefender Safepay™ Banking Shield</span>
            </div>
            <span className="widget-val text-blue">Secured</span>
          </div>
        </div>

        <div className="supported-os-box">
          <span className="os-box-label">Supported Operating Systems:</span>
          <div className="os-chips">
            <span className="chip"><Monitor size={13} /> Windows</span>
            <span className="chip"><Laptop size={13} /> macOS</span>
            <span className="chip"><Smartphone size={13} /> Android / iOS</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card brand-visual-card webroot-visual">
      <div className="visual-badge-header">
        <BrandLogo slug={slug} size={42} />
        <div>
          <span className="visual-title">{brandName} Protection</span>
          <span className="visual-subtitle"><span className="pulse-dot blue" /> Active</span>
        </div>
      </div>
    </div>
  );
};

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const themeClass = `${brand.slug}-theme`;

  return (
    <div className={`brand-landing-page ${themeClass}`}>
      {/* BRAND HERO */}
      <section className="brand-hero">
        <div className="container brand-hero-grid">
          <div className="brand-hero-content">
            <div className="brand-pill">
              <BrandLogo slug={brand.slug} size={20} /> Official {brand.name} Digital Partner
            </div>
            <h1 className="brand-hero-title">{brand.heroHeadline}</h1>
            <p className="brand-hero-subheadline">{brand.heroSubheadline}</p>

            <div className="brand-hero-meta">
              <div className="meta-rating">
                <Star size={16} className="star-gold" />
                <span>{brand.rating} / 5.0</span>
                <span className="meta-count">({brand.reviewCount.toLocaleString()} Verified Customer Reviews)</span>
              </div>
              <div className="meta-price">
                <span>Plans starting at <strong>${brand.startingPrice.toFixed(2)} / yr</strong></span>
              </div>
            </div>

            <div className="brand-hero-actions">
              <a href="#plans-section" className="btn btn-primary btn-lg">
                View {brand.name} Plans
              </a>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Support Desk
              </Link>
            </div>
          </div>

          <div className="brand-hero-visual">
            {renderBrandHeroVisual(brand.slug, brand.name)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS BRAND / KEY BENEFITS */}
      <section className="section-padding benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Key Advantages</span>
            <h2 className="section-title">Why Choose {brand.name} Protection?</h2>
            <p className="section-subtitle">
              Engineered with multi-layered threat intelligence to keep your devices, bank credentials, and family safe.
            </p>
          </div>

          <div className="benefits-grid">
            {brand.keyBenefits.map((benefit, i) => {
              const BenefitIcon = getBenefitIcon(benefit.icon, benefit.title);
              const colorTheme = getBenefitColorClass(brand.slug, i);
              return (
                <div key={i} className="card benefit-card">
                  <div className="benefit-card-top">
                    <div className={`benefit-icon-box b-icon-${colorTheme}`}>
                      <BenefitIcon size={24} />
                    </div>
                    <span className={`benefit-chip chip-${colorTheme}`}>
                      {benefit.title.includes('VPN') ? 'Encrypted VPN' : benefit.title.includes('Backup') ? 'Cloud Vault' : benefit.title.includes('Score') ? 'Identity Score' : benefit.title.includes('Password') ? '256-Bit Vault' : 'Active Shield'}
                    </span>
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS & PRICING */}
      <section id="plans-section" className="section-padding plans-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Plans & Pricing</span>
            <h2 className="section-title">Select Your {brand.name} License</h2>
            <p className="section-subtitle">
              Choose the coverage tier that matches your device count and security preferences.
            </p>
          </div>

          <div className="brand-plans-grid">
            {brand.products.flatMap((prod) =>
              prod.plans.map((plan) => (
                <PlanCard key={`${prod.id}-${plan.id}`} product={prod} plan={plan} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding cta-section">
        <div className="container">
          <CallToActionBanner />
        </div>
      </section>

      {/* BRAND FAQ */}
      <section className="section-padding faq-section">
        <div className="container">
          <FAQAccordion
            items={brand.faqs}
            title={`${brand.name} Frequently Asked Questions`}
            subtitle={`Common questions regarding ${brand.name} licensing, installation, and renewals.`}
          />
        </div>
      </section>
    </div>
  );
}
