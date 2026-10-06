'use client';

import React from 'react';
import { DollarSign, Sliders, Zap, PhoneCall, Layers, ShieldCheck, CheckCircle2, Key, Monitor, Laptop, Smartphone, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const valueProps = [
    {
      id: 'pricing',
      tag: 'Upfront Cost',
      title: 'Transparent Pricing',
      description: 'Clear, upfront annual pricing with no hidden checkout fees or deceptive recurring traps.',
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE047 100%)',
      borderColor: '#FACC15',
      iconColor: '#854D0E',
      badgeBg: 'rgba(250, 204, 21, 0.15)',
      badgeColor: '#A16207',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-graphic-pill">
            <span className="price-tag-badge">$0 Hidden Fees</span>
            <span className="visual-mini-check"><CheckCircle2 size={12} /> Verified</span>
          </div>
        </div>
      ),
      icon: DollarSign,
    },
    {
      id: 'comparison',
      tag: 'Side-by-Side',
      title: 'Side-by-Side Comparison',
      description: 'Filter and compare features, VPN limits, and ransomware protections across major brands.',
      gradient: 'linear-gradient(135deg, #E0E7FF 0%, #818CF8 100%)',
      borderColor: '#6366F1',
      iconColor: '#312E81',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
      badgeColor: '#4338CA',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-graphic-pill">
            <span className="matrix-chip">4 Brands</span>
            <span className="matrix-chip accent">Matrix Filter</span>
          </div>
        </div>
      ),
      icon: Sliders,
    },
    {
      id: 'delivery',
      tag: 'Instant Access',
      title: 'Digital Delivery',
      description: 'Receive your authentic product license keys and official installation instructions digitally.',
      gradient: 'linear-gradient(135deg, #E0F2FE 0%, #38BDF8 100%)',
      borderColor: '#0284C7',
      iconColor: '#075985',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      badgeColor: '#0369A1',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-graphic-pill">
            <Key size={13} className="key-icon" />
            <span>XXXX-XXXX-XXXX</span>
          </div>
        </div>
      ),
      icon: Zap,
    },
    {
      id: 'assistance',
      tag: 'Human Help Desk',
      title: 'Customer Assistance',
      description: 'Speak directly with our security specialists by phone to resolve questions before licensing.',
      gradient: 'linear-gradient(135deg, #DCFCE7 0%, #4ADE80 100%)',
      borderColor: '#22C55E',
      iconColor: '#14532D',
      badgeBg: 'rgba(34, 197, 94, 0.15)',
      badgeColor: '#15803D',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-graphic-pill">
            <span className="live-dot" />
            <span>Support Online</span>
          </div>
        </div>
      ),
      icon: PhoneCall,
    },
    {
      id: 'coverage',
      tag: 'PC / Mac / Mobile',
      title: 'Multi-Device Coverage',
      description: 'Know exactly whether your plan protects 1 PC, 3 PCs, or up to 5 multi-OS devices.',
      gradient: 'linear-gradient(135deg, #F3E8FF 0%, #C084FC 100%)',
      borderColor: '#A855F7',
      iconColor: '#581C87',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      badgeColor: '#7E22CE',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-device-chips">
            <Monitor size={13} title="Windows" />
            <Laptop size={13} title="macOS" />
            <Smartphone size={13} title="Android/iOS" />
          </div>
        </div>
      ),
      icon: Layers,
    },
    {
      id: 'security',
      tag: '256-Bit SSL',
      title: 'Secure Checkout',
      description: 'Shop with full confidence backed by 256-bit SSL encryption and strict privacy safeguards.',
      gradient: 'linear-gradient(135deg, #FEF9C3 0%, #F59E0B 100%)',
      borderColor: '#D97706',
      iconColor: '#78350F',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeColor: '#B45309',
      renderVisual: () => (
        <div className="box-visual-wrap">
          <div className="visual-graphic-pill">
            <Lock size={12} />
            <span>Encrypted SSL</span>
          </div>
        </div>
      ),
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="section-padding trust-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why Choose Digifort</span>
          <h2 className="section-title">The Independent Marketplace Built for Digital Security</h2>
          <p className="section-subtitle">
            We simplify software selection with clear data, objective brand comparisons, and accessible human phone support.
          </p>
        </div>

        <div className="trust-grid">
          {valueProps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="card trust-card-enhanced">
                <div className="trust-card-header">
                  <div
                    className="trust-icon-badge"
                    style={{
                      background: item.gradient,
                      boxShadow: `0 4px 14px ${item.badgeBg}`,
                      border: `1px solid ${item.borderColor}`,
                    }}
                  >
                    <IconComponent size={24} style={{ color: item.iconColor }} />
                  </div>
                  <span
                    className="trust-tag-chip"
                    style={{
                      backgroundColor: item.badgeBg,
                      color: item.badgeColor,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="trust-card-title">{item.title}</h3>
                <p className="trust-card-desc">{item.description}</p>

                {item.renderVisual()}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .trust-section {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        @media (max-width: 992px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }

        .trust-card-enhanced {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .trust-card-enhanced:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--navy-primary);
        }

        .trust-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .trust-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .trust-card-enhanced:hover .trust-icon-badge {
          transform: scale(1.08) rotate(-2deg);
        }

        .trust-tag-chip {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
        }

        .trust-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--navy-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .trust-card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .box-visual-wrap {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
        }

        .visual-graphic-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--navy-primary);
          background-color: var(--bg-alt);
          padding: 6px 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .price-tag-badge {
          color: #854D0E;
        }

        .visual-mini-check {
          display: flex;
          align-items: center;
          gap: 3px;
          color: var(--success-green);
        }

        .matrix-chip {
          padding: 2px 6px;
          border-radius: 4px;
          background: #ffffff;
          border: 1px solid var(--border-color);
        }

        .matrix-chip.accent {
          background: var(--navy-primary);
          color: #ffffff;
          border: none;
        }

        .key-icon {
          color: #0284C7;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 8px #22C55E;
          animation: pulseDot 1.8s infinite;
        }

        @keyframes pulseDot {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }

        .visual-device-chips {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--bg-alt);
          padding: 6px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          color: var(--navy-primary);
        }
      `}</style>
    </section>
  );
};
