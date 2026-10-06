import React from 'react';
import { ShieldCheck, Phone, Users, CheckCircle2, Lock, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Digifort | Independent Digital Security Software Marketplace',
  description: 'Learn about DIGIFORT mission to help consumers compare and license authentic antivirus software with transparent pricing and expert human assistance.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Our Marketplace Mission
          </div>
          <h1 className="hero-title">Empowering Consumers with Clear, Honest Digital Security</h1>
          <p className="hero-subtext">
            DIGIFORT was founded to eliminate confusion in the consumer cybersecurity market. We combine side-by-side product data with direct phone support so you can protect your devices with full confidence.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-content">
              <span className="eyebrow">Who We Are</span>
              <h2 className="story-title">An Independent Commercial Security Hub</h2>
              <p className="story-p">
                Navigating software protection shouldn’t require reading dozens of confusing fine-print pages. Consumers need clear facts: <em>How many devices are covered? Does this include a VPN? Will it slow down my computer? What is the actual renewal cost?</em>
              </p>
              <p className="story-p">
                At DIGIFORT (<code>shop.getdigifort.com</code>), we curate genuine licenses from established cybersecurity developers including Norton, McAfee, Bitdefender, and Webroot into an easy-to-use comparison platform.
              </p>
            </div>

            <div className="story-stats-card card">
              <h3 className="stats-card-title">The Digifort Difference</h3>
              <div className="stat-row">
                <div className="stat-number">100%</div>
                <div className="stat-label">Authentic Developer Digital Licenses</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-row">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Phone & Online Assistance Ready</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-row">
                <div className="stat-number">30 Days</div>
                <div className="stat-label">Full Money-Back Customer Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILLARS OF OUR MARKETPLACE */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Core Pillars</span>
            <h2 className="section-title">How the Digifort Platform Works</h2>
          </div>

          <div className="pillars-grid">
            <div className="card pillar-card">
              <div className="pillar-icon pillar-icon-gold">
                <Award size={26} className="text-gold-icon" />
              </div>
              <div className="pillar-visual-chip">Independent Audit</div>
              <h3>1. Objective Brand Catalog</h3>
              <p>We present side-by-side feature matrices so you can evaluate Norton, McAfee, Bitdefender, and Webroot without bias.</p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-icon pillar-icon-blue">
                <Lock size={26} className="text-blue-icon" />
              </div>
              <div className="pillar-visual-chip blue">Instant License</div>
              <h3>2. Instant Digital Keys</h3>
              <p>Skip physical shipping delays. Your product activation key is issued on-screen and via email immediately upon checkout.</p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-icon pillar-icon-green">
                <Users size={26} className="text-green-icon" />
              </div>
              <div className="pillar-visual-chip green">Human Experts</div>
              <h3>3. Dedicated Support Desk</h3>
              <p>Have questions about compatibility? Contact our support specialists directly at support@getdigifort.com.</p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-icon pillar-icon-purple">
                <ShieldCheck size={26} className="text-purple-icon" />
              </div>
              <div className="pillar-visual-chip purple">Official Publishers</div>
              <h3>4. Genuine Guarantee</h3>
              <p>Every license key connects directly to official publisher download servers for official updates and database protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding bg-surface">
        <div className="container text-center">
          <div className="card callout-card">
            <h2>Ready to Protect Your Devices?</h2>
            <p>Compare plans now or contact our support team for personalized software guidance.</p>
            <div className="callout-btns">
              <Link href="/compare/antivirus" className="btn btn-primary btn-lg">
                Compare Antivirus Plans
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Support Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
