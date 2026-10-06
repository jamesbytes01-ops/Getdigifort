'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const DigifortLogo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 42 : 34;
  const titleFontSize = size === 'sm' ? '1.15rem' : size === 'lg' ? '1.6rem' : '1.35rem';
  const subFontSize = size === 'sm' ? '0.58rem' : size === 'lg' ? '0.68rem' : '0.62rem';

  return (
    <div className="digifort-logo-container" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="shieldGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#9A7B1C" />
          </linearGradient>
          <linearGradient id="shieldNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Outer Shield Path */}
        <path
          d="M24 4L8 10V22C8 32.5 14.8 42.1 24 44C33.2 42.1 40 32.5 40 22V10L24 4Z"
          fill={isLight ? "url(#shieldGoldGrad)" : "url(#shieldNavyGrad)"}
          stroke={isLight ? "#FFFFFF" : "url(#shieldGoldGrad)"}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Fort Castle Battlements Top */}
        <path
          d="M16 15H19V17H22V15H26V17H29V15H32V19H16V15Z"
          fill="url(#shieldGoldGrad)"
        />

        {/* Center Digital Keyhole / Shield Core */}
        <path
          d="M24 22C21.8 22 20 23.8 20 26C20 27.4 20.7 28.6 21.8 29.3L21 34H27L26.2 29.3C27.3 28.6 28 27.4 28 26C28 23.8 26.2 22 24 22Z"
          fill={isLight ? "#0F172A" : "url(#shieldGoldGrad)"}
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'inherit',
            fontWeight: 800,
            fontSize: titleFontSize,
            letterSpacing: '0.04em',
            color: isLight ? '#FFFFFF' : '#0F172A',
            textTransform: 'uppercase',
          }}
        >
          DIGIFORT
        </span>
        {showSubtitle && (
          <span
            style={{
              fontSize: subFontSize,
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: isLight ? '#CBD5E1' : '#64748B',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}
          >
            Digital Security Marketplace
          </span>
        )}
      </div>
    </div>
  );
};
