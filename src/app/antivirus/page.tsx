'use client';

import React, { useState } from 'react';
import { BRANDS_DATA, getAllProducts } from '@/data/brands';
import { PlanCard } from '@/components/PlanCard';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { Search, Filter, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AntivirusCatalogPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [deviceFilter, setDeviceFilter] = useState<string>('all');

  const allProducts = getAllProducts();

  // Extract all plans with product context
  const allPlanItems = allProducts.flatMap((product) =>
    product.plans.map((plan) => ({ product, plan }))
  );

  const filteredPlans = allPlanItems.filter(({ product, plan }) => {
    const matchesBrand = selectedBrand === 'all' || product.brandId === selectedBrand;

    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDevice =
      deviceFilter === 'all' ||
      (deviceFilter === '1' && plan.deviceCount === 1) ||
      (deviceFilter === '3' && plan.deviceCount === 3) ||
      (deviceFilter === '5+' && plan.deviceCount >= 5);

    return matchesBrand && matchesSearch && matchesDevice;
  });

  return (
    <div className="antivirus-catalog-page">
      {/* CATALOG HERO */}
      <div className="catalog-hero">
        <div className="container">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Software Catalog
          </div>
          <h1 className="hero-title">Explore All Antivirus Protection Plans</h1>
          <p className="hero-desc">
            Compare genuine license plans from Norton, McAfee, Bitdefender, and Webroot. Select single-device or multi-device subscriptions with instant digital delivery.
          </p>

          {/* FILTER BAR */}
          <div className="filter-card">
            <div className="search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search brands, products, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters-group">
              <div className="filter-select-wrap">
                <span className="filter-label">Brand:</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="form-select filter-select"
                >
                  <option value="all">All Brands (4)</option>
                  {BRANDS_DATA.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-select-wrap">
                <span className="filter-label">Devices:</span>
                <select
                  value={deviceFilter}
                  onChange={(e) => setDeviceFilter(e.target.value)}
                  className="form-select filter-select"
                >
                  <option value="all">Any Devices</option>
                  <option value="1">1 Device</option>
                  <option value="3">3 Devices</option>
                  <option value="5+">5+ Devices</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATALOG GRID */}
      <div className="container section-padding">
        <div className="catalog-results-header">
          <span className="results-count">
            Showing <strong>{filteredPlans.length}</strong> available protection plans
          </span>

          <Link href="/compare/antivirus" className="compare-link-btn">
            View Full Matrix Comparison <ArrowRight size={14} />
          </Link>
        </div>

        {filteredPlans.length > 0 ? (
          <div className="catalog-grid">
            {filteredPlans.map(({ product, plan }) => (
              <PlanCard key={`${product.id}-${plan.id}`} product={product} plan={plan} />
            ))}
          </div>
        ) : (
          <div className="no-results-card">
            <h3>No plans match your current filters</h3>
            <p>Try resetting your search query or selecting a different brand filter.</p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSearchQuery('');
                setDeviceFilter('all');
              }}
              className="btn btn-secondary"
            >
              Reset All Filters
            </button>
          </div>
        )}

        <div className="mt-48">
          <CallToActionBanner />
        </div>
      </div>

      <style jsx>{`
        .catalog-hero {
          background-color: var(--bg-alt);
          padding-top: 56px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-dark);
          margin-bottom: 12px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--navy-primary);
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin-bottom: 32px;
        }

        .filter-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-input-wrap {
          position: relative;
          flex-grow: 1;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 10px 14px 10px 42px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
        }

        .filters-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .filter-select-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .filter-select {
          padding: 8px 14px;
          width: auto;
          font-size: 0.9rem;
        }

        .catalog-results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .results-count {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .compare-link-btn {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 992px) {
          .catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .catalog-grid {
            grid-template-columns: 1fr;
          }
        }

        .no-results-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 48px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .mt-48 {
          margin-top: 56px;
        }
      `}</style>
    </div>
  );
}
