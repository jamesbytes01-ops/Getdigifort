'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Laptop, Smartphone, Monitor, Lock, Cpu, Eye, Key, Award, Zap } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { BrandLogo } from './BrandLogo';

export const HeroSection: React.FC = () => {
  const securityModules = [
    {
      id: 'malware',
      title: 'Malware & Ransomware',
      tagline: 'Real-time AI threat detection',
      badge: 'Active Shield',
      icon: Cpu,
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE047 100%)',
      borderColor: '#FACC15',
      iconColor: '#854D0E',
    },
    {
      id: 'privacy',
      title: 'Encrypted Privacy & VPN',
      tagline: 'Bank-grade Wi-Fi privacy',
      badge: 'Encrypted',
      icon: Lock,
      gradient: 'linear-gradient(135deg, #E0F2FE 0%, #38BDF8 100%)',
      borderColor: '#38BDF8',
      iconColor: '#0369A1',
    },
    {
      id: 'phishing',
      title: 'Phishing & Web Guard',
      tagline: 'Blocks malicious link scams',
      badge: 'Web Shield',
      icon: Eye,
      gradient: 'linear-gradient(135deg, #DCFCE7 0%, #4ADE80 100%)',
      borderColor: '#4ADE80',
      iconColor: '#15803D',
    },
    {
      id: 'identity',
      title: 'Identity & Credentials',
      tagline: 'Encrypted password vault',
      badge: 'Vault Locked',
      icon: Key,
      gradient: 'linear-gradient(135deg, #F3E8FF 0%, #C084FC 100%)',
      borderColor: '#C084FC',
      iconColor: '#7E22CE',
    },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* LEFT COLUMN: BALANCED HEADLINE, STATS & CTAS */}
        <div className="hero-content">
          <div className="hero-eyebrow-pill">
            <ShieldCheck size={16} className="eyebrow-icon" />
            <span>Digital Security Marketplace</span>
          </div>

          <h1 className="hero-headline">
            Find the right protection for <span className="text-highlight">every device.</span>
          </h1>

          <p className="hero-subtext">
            Compare trusted antivirus & security plans side-by-side. Understand device limits, feature coverage, and transparent annual pricing before licensing with instant digital delivery.
          </p>

          <div className="hero-ctas">
            <Link href="/compare/antivirus" className="btn btn-primary btn-lg">
              Compare Antivirus Plans <ArrowRight size={18} />
            </Link>
            <Link href="/antivirus" className="btn btn-secondary btn-lg">
              Browse All Products
            </Link>
          </div>

          {/* KEY MARKETPLACE METRICS ROW */}
          <div className="hero-metrics-grid">
            <div className="metric-box">
              <span className="metric-val">4 Major</span>
              <span className="metric-lbl">Top Brands</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-val">Instant</span>
              <span className="metric-lbl">Digital Delivery</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">Genuine License</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SLEEK BALANCED CYBERSECURITY MATRIX CARD */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            {/* TOP COMMAND BAR */}
            <div className="visual-top-bar">
              <div className="engine-status">
                <span className="pulse-green-dot" />
                <span className="engine-status-text">Digifort Cyber Defense Matrix</span>
              </div>
              <div className="encryption-pill">
                <ShieldCheck size={13} /> Active Protection
              </div>
            </div>

            {/* 2X2 SECURITY MODULES GRID */}
            <div className="hero-module-quad-grid">
              {securityModules.map((mod) => {
                const IconComp = mod.icon;
                return (
                  <div key={mod.id} className="quad-module-card">
                    <div className="quad-card-top">
                      <div
                        className="mod-icon-badge"
                        style={{
                          background: mod.gradient,
                          border: `1px solid ${mod.borderColor}`,
                        }}
                      >
                        <IconComp size={18} style={{ color: mod.iconColor }} />
                      </div>
                      <span className="mod-status-badge">{mod.badge}</span>
                    </div>

                    <h4 className="quad-mod-title">{mod.title}</h4>
                    <p className="quad-mod-desc">{mod.tagline}</p>
                  </div>
                );
              })}
            </div>

            {/* INTEGRATED BRAND PARTNERS & OS FOOTER STRIP */}
            <div className="visual-footer-strip">
              <div className="strip-brands">
                {BRANDS_DATA.map((b) => (
                  <div key={b.id} className="strip-logo-item" title={`${b.name} Security`}>
                    <BrandLogo slug={b.slug} size={22} />
                  </div>
                ))}
              </div>
              <div className="strip-os">
                <Monitor size={14} title="Windows" />
                <Laptop size={14} title="macOS" />
                <Smartphone size={14} title="Mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(180deg, var(--bg-main) 0%, var(--bg-alt) 100%);
          display: flex;
          align-items: center;
          min-height: calc(100vh - 76px);
          padding-top: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-color);
          position: relative;
          box-sizing: border-box;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero-section {
            min-height: auto;
            padding-top: 48px;
            padding-bottom: 56px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .hero-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: var(--accent-gold-light);
          border: 1px solid var(--accent-gold-border);
          border-radius: var(--radius-pill);
          color: var(--accent-gold-dark);
          font-size: 0.82rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .eyebrow-icon {
          color: var(--accent-gold-dark);
        }

        .hero-headline {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 22px;
        }

        .text-highlight {
          color: var(--navy-primary);
        }

        .hero-subtext {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 36px;
          max-width: 580px;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.2rem;
          }
          .hero-subtext {
            font-size: 1rem;
            margin-bottom: 28px;
          }
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-metrics-grid {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
        }

        .metric-box {
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--navy-primary);
        }

        .metric-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .metric-divider {
          width: 1px;
          height: 28px;
          background-color: var(--border-color);
        }

        /* HERO VISUAL SHOWCASE CARD - EXPANDED FRAME SIZE */
        .hero-visual {
          position: relative;
        }

        .hero-visual-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.07);
          padding: 28px 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 410px;
          justify-content: space-between;
        }

        .visual-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .engine-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 8px #22C55E;
        }

        .engine-status-text {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--navy-primary);
        }

        .encryption-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--success-green);
          background-color: var(--success-bg);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid #A7F3D0;
        }

        .hero-module-quad-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        @media (max-width: 480px) {
          .hero-module-quad-grid {
            grid-template-columns: 1fr;
          }
        }

        .quad-module-card {
          display: flex;
          flex-direction: column;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px 18px;
          transition: all 0.2s ease;
        }

        .quad-module-card:hover {
          background-color: #ffffff;
          border-color: var(--navy-primary);
          box-shadow: var(--shadow-sm);
        }

        .quad-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mod-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mod-status-badge {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--navy-primary);
          background-color: var(--bg-alt);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
        }

        .quad-mod-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--navy-primary);
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .quad-mod-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .visual-footer-strip {
          background-color: var(--bg-alt);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .strip-brands {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .strip-logo-item {
          display: flex;
          align-items: center;
        }

        .strip-os {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};
