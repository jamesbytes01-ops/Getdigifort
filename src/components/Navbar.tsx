'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ShoppingBag, Shield, ChevronDown, Menu, X, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { BRANDS_DATA } from '@/data/brands';

import { DigifortLogo } from './DigifortLogo';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareDropdownOpen, setCompareDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCompareDropdownOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* BRAND LOGO */}
        <Link href="/" className="brand-logo-link" aria-label="Digifort Security Marketplace Home">
          <DigifortLogo size="md" variant="dark" showSubtitle={true} />
        </Link>

        {/* DESKTOP CENTER NAVIGATION */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link href="/antivirus" className={`nav-link ${pathname === '/antivirus' ? 'active' : ''}`}>
            All Products
          </Link>

          {/* COMPARE DROPDOWN */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setCompareDropdownOpen(true)}
            onMouseLeave={() => setCompareDropdownOpen(false)}
          >
            <button
              className={`nav-link dropdown-trigger ${pathname.startsWith('/compare') || pathname.startsWith('/antivirus/') ? 'active' : ''}`}
              onClick={() => setCompareDropdownOpen(!compareDropdownOpen)}
              aria-expanded={compareDropdownOpen}
            >
              Compare <ChevronDown size={14} className={`chevron ${compareDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {compareDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-section-title">Antivirus Comparisons</div>
                <Link href="/compare/antivirus" className="dropdown-item highlighted">
                  <Shield size={16} className="dropdown-item-icon" />
                  <div>
                    <span className="dropdown-item-title">Full Antivirus Comparison</span>
                    <span className="dropdown-item-desc">Side-by-side feature & price matrix</span>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <div className="dropdown-section-title">Brand Pages</div>
                {BRANDS_DATA.map((brand) => (
                  <Link key={brand.id} href={`/antivirus/${brand.slug}`} className="dropdown-item">
                    <BrandLogo slug={brand.slug} size={22} />
                    <span>{brand.name} Security</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>

          <Link href="/faq" className={`nav-link ${pathname === '/faq' ? 'active' : ''}`}>
            FAQ
          </Link>
        </nav>

        {/* DESKTOP RIGHT ACTIONS: CART & SUPPORT */}
        <div className="desktop-right-actions">
          <Link href="tel:+18001234567" className="call-cta-btn" style={{ marginRight: '10px' }}>
            <Phone size={24} className="phone-icon-pulse" />
            <div className="call-btn-text">
              <span className="call-btn-label">24/7 Expert Support</span>
              <span className="call-btn-number">1-800-123-4567</span>
            </div>
          </Link>
          <Link href="/cart" className="btn btn-primary cart-pill-btn" aria-label={`View Cart with ${cartCount} items`}>
            <ShoppingBag size={18} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-pill-badge">{cartCount}</span>}
          </Link>
        </div>

        {/* MOBILE TOGGLE & ACTION BUTTONS */}
        <div className="mobile-actions">
          <Link href="/cart" className="cart-icon-btn mobile-cart-icon" aria-label="Cart">
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            <Link href="/" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/antivirus" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
              All Antivirus Products
            </Link>
            <Link href="/compare/antivirus" className="mobile-nav-item highlighted-mobile" onClick={() => setMobileMenuOpen(false)}>
              Side-by-Side Comparison
            </Link>
            <div className="mobile-nav-group-title">Brands</div>
            {BRANDS_DATA.map((brand) => (
              <Link key={brand.id} href={`/antivirus/${brand.slug}`} className="mobile-nav-subitem" onClick={() => setMobileMenuOpen(false)}>
                <BrandLogo slug={brand.slug} size={20} />
                <span>{brand.name} Antivirus</span>
              </Link>
            ))}
            <div className="mobile-nav-divider" />
            <Link href="/contact" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
            <Link href="/faq" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .sticky-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #ffffff;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.25s ease;
        }

        .sticky-navbar.scrolled {
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
          background-color: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          background-color: var(--navy-primary);
          color: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
        }

        .logo-title {
          display: block;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--navy-primary);
          line-height: 1;
        }

        .logo-subtitle {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          margin-top: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--navy-primary);
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .chevron {
          transition: transform 0.2s ease;
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          width: 270px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 100;
          animation: fadeIn 0.15s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .dropdown-section-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          padding: 4px 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: background-color 0.15s;
        }

        .dropdown-item:hover {
          background-color: var(--bg-alt);
          color: var(--navy-primary);
        }

        .dropdown-item.highlighted {
          background-color: #F1F5F9;
          border: 1px solid var(--border-color);
        }

        .dropdown-item-title {
          display: block;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy-primary);
        }

        .dropdown-item-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .dropdown-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 6px 0;
        }

        .dropdown-brand-icon {
          color: var(--accent-gold);
        }

        .desktop-right-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .cart-icon-btn {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: background-color 0.2s, color 0.2s;
          border: 1px solid transparent;
        }

        .cart-icon-btn:hover {
          background-color: var(--bg-alt);
          color: var(--navy-primary);
          border-color: var(--border-color);
        }

        .cart-badge-count {
          position: absolute;
          top: 2px;
          right: 2px;
          background-color: var(--accent-gold);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffffff;
        }

        .call-cta-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .call-btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }

        .call-btn-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94A3B8;
        }

        .call-btn-number {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .phone-icon-pulse {
          color: var(--accent-gold);
        }

        /* Mobile Layout */
        .mobile-actions {
          display: none;
          align-items: center;
          gap: 12px;
        }

        .mobile-phone-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--navy-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          color: var(--navy-primary);
          cursor: pointer;
          padding: 4px;
        }

        @media (max-width: 960px) {
          .desktop-nav, .desktop-right-actions {
            display: none;
          }

          .mobile-actions {
            display: flex;
          }
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 76px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ffffff;
          z-index: 999;
          overflow-y: auto;
          border-top: 1px solid var(--border-color);
        }

        .mobile-nav-content {
          padding: 24px 20px 40px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-nav-item {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy-primary);
          padding: 10px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .highlighted-mobile {
          color: var(--accent-gold-dark);
          background-color: var(--accent-gold-light);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--accent-gold-border);
        }

        .mobile-nav-group-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 10px;
        }

        .mobile-nav-subitem {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .mobile-nav-subitem:hover {
          background-color: var(--bg-alt);
        }

        .mobile-nav-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 12px 0;
        }

        .mobile-call-card {
          margin-top: 20px;
          background-color: var(--bg-alt);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-call-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
      `}</style>
    </header>
  );
};
