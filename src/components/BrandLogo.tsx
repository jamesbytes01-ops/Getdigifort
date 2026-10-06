'use client';

import React from 'react';

interface BrandLogoProps {
  slug: string;
  size?: number;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  slug,
  size = 36,
  className = '',
}) => {
  const normalizedSlug = slug ? slug.toLowerCase() : '';

  const badgeStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  if (normalizedSlug.includes('norton')) {
    return (
      <div className={`brand-logo-badge norton-badge ${className}`} style={badgeStyle}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#FACC15" />
          <circle cx="20" cy="20" r="17.2" stroke="#EAB308" strokeWidth="1.5" />
          <path
            d="M12.5 20.5L17.5 25.5L27.5 14.5"
            stroke="#0F172A"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (normalizedSlug.includes('mcafee')) {
    return (
      <div className={`brand-logo-badge mcafee-badge ${className}`} style={badgeStyle}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2.5L6 8.5V19.5C6 29.5 12 37 20 39C28 37 34 29.5 34 19.5V8.5L20 2.5Z"
            fill="#DC2626"
          />
          <path
            d="M12.5 14V26.5L20 22L27.5 26.5V14L20 18.5L12.5 14Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  if (normalizedSlug.includes('bitdefender')) {
    return (
      <div className={`brand-logo-badge bitdefender-badge ${className}`} style={badgeStyle}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2.5L6 8.5V19.5C6 29.5 12 37 20 39C28 37 34 29.5 34 19.5V8.5L20 2.5Z"
            fill="#0F172A"
            stroke="#E11D48"
            strokeWidth="1.5"
          />
          <path
            d="M12 12H21C24.5 12 27 14 27 17.5C27 21 24.5 23 21 23H12V12Z"
            fill="#E11D48"
          />
          <path
            d="M12 23H22.5C26.5 23 29 25 29 28.5C29 32 26.5 34 22.5 34H12V23Z"
            fill="#FB7185"
          />
        </svg>
      </div>
    );
  }

  if (normalizedSlug.includes('webroot')) {
    return (
      <div className={`brand-logo-badge webroot-badge ${className}`} style={badgeStyle}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2.5L6 8.5V19.5C6 29.5 12 37 20 39C28 37 34 29.5 34 19.5V8.5L20 2.5Z"
            fill="#16A34A"
          />
          <path
            d="M12.5 15.5L17 27L20 19.5L23 27L27.5 15.5"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Fallback generic shield icon
  return (
    <div className={`brand-logo-badge default-badge ${className}`} style={badgeStyle}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 2.5L6 8.5V19.5C6 29.5 12 37 20 39C28 37 34 29.5 34 19.5V8.5L20 2.5Z"
          fill="#0F172A"
          stroke="#C59B27"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
