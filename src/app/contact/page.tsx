'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-eyebrow">
            <ShieldCheck size={16} /> Customer Assistance
          </div>
          <h1 className="hero-title">Contact Digifort Support</h1>
          <p className="hero-desc">
            Have questions about software licensing, device compatibility, or digital key activation? Send our customer support team a message.
          </p>

          {/* FAST EMAIL SUPPORT BANNER */}
          <div className="card call-hero-card">
            <div className="call-hero-icon-wrap">
              <Mail size={28} className="phone-gold" />
            </div>
            <div className="call-hero-info">
              <span className="call-label">24/7 Email Support Helpdesk:</span>
              <a href="mailto:support@getdigifort.com" className="call-number-link">
                support@getdigifort.com
              </a>
              <span className="call-hours-text">Average response time: under 30 minutes</span>
            </div>
            <a href="mailto:support@getdigifort.com" className="btn btn-gold btn-lg call-now-btn">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FORM & INFO GRID */}
      <section className="section-padding bg-surface">
        <div className="container contact-grid">
          {/* LEFT: CONTACT FORM */}
          <div className="card form-card">
            <h2 className="form-title">Send a Message</h2>
            <p className="form-sub">Fill out the form below and a security representative will reply via email.</p>

            {submitted ? (
              <div className="submitted-success-box">
                <CheckCircle2 size={36} className="success-icon" />
                <h3>Thank You for Contacting Us</h3>
                <p>Your message has been received. Our team will review your inquiry and respond to <strong>{formData.email}</strong> shortly.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Question', message: '' });
                  }}
                  className="btn btn-secondary mt-16"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && <div className="form-error-alert">{error}</div>}

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-select"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Pre-Purchase Inquiry">Pre-Purchase Software Inquiry</option>
                    <option value="Activation Assistance">Key Activation Assistance</option>
                    <option value="Refund Request">Refund Request</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our support team assist you today?"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-lg">
                  <Send size={16} /> Send Support Inquiry
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: CONTACT INFORMATION */}
          <div className="info-column">
            <div className="card info-card">
              <h3 className="info-title">Contact Information</h3>

              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div>
                  <span className="info-label">Email Support</span>
                  <a href="mailto:support@getdigifort.com" className="info-val-link">
                    support@getdigifort.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <span className="info-label">Corporate Office</span>
                  <span className="info-val-text">
                    DIGIFORT Security Commerce<br />
                    100 Enterprise Way, Suite 400<br />
                    Austin, TX 78701
                  </span>
                </div>
              </div>

              <div className="info-item">
                <Clock size={20} className="info-icon" />
                <div>
                  <span className="info-label">Support Operating Hours</span>
                  <span className="info-val-text">
                    Monday – Friday: 8:00 AM – 8:00 PM EST<br />
                    Saturday: 9:00 AM – 5:00 PM EST<br />
                    Sunday: Email Helpdesk Only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          background-color: var(--bg-alt);
          padding-top: 56px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
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

        .call-hero-card {
          background-color: var(--navy-primary);
          color: #ffffff;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .call-hero-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #1E293B;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .phone-gold {
          color: var(--accent-gold);
        }

        .call-hero-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .call-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94A3B8;
        }

        .call-number-link {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .call-hours-text {
          font-size: 0.85rem;
          color: #CBD5E1;
        }

        .call-now-btn {
          font-weight: 800;
        }

        .bg-surface {
          background-color: var(--bg-surface);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 32px;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 4px;
        }

        .form-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-error-alert {
          background-color: #FEF2F2;
          color: var(--danger-red);
          border: 1px solid #FCA5A5;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
        }

        .submitted-success-box {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .success-icon {
          color: var(--success-green);
        }

        .info-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-primary);
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .info-icon {
          color: var(--accent-gold-dark);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .info-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .info-val-link {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .info-val-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .mt-16 {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}
