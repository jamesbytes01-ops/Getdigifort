'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    category: 'Purchases & Delivery',
    question: 'What happens after I purchase my antivirus software?',
    answer: 'Immediately after your order is confirmed, your official product license key, activation URL, and step-by-step setup guide are displayed on your confirmation screen and emailed to your provided email address.'
  },
  {
    category: 'Purchases & Delivery',
    question: 'How is the digital software delivered?',
    answer: 'All products are delivered digitally via email and on-screen order summary. There are no physical boxes or shipping waiting periods.'
  },
  {
    category: 'Licensing & Devices',
    question: 'How many devices can I protect with my subscription?',
    answer: 'Device coverage depends on the specific plan you choose. Single-device plans cover 1 PC or Mac. Multi-device plans cover 3 to 5 devices including Windows, Mac, Android, and iOS.'
  },
  {
    category: 'Licensing & Devices',
    question: 'Can I transfer my license to a new computer later?',
    answer: 'Yes! Most developers allow you to deactivate your key on an old computer and activate it on a new computer via their official user portal.'
  },
  {
    category: 'Compatibility',
    question: 'Which operating systems are supported?',
    answer: 'Supported platforms vary by brand. Most major plans support Windows 11/10, macOS Ventura/Sonoma/Sequoia, Android smartphones/tablets, and iOS devices.'
  },
  {
    category: 'Activation & Support',
    question: 'How do I activate my product key?',
    answer: 'Follow the official developer link included in your confirmation email, enter your unique 25-character product key, download the installer, and sign in to activate.'
  },
  {
    category: 'Activation & Support',
    question: 'What happens if I need assistance with setup or choosing a plan?',
    answer: 'Our customer support team is available 24/7 via email at support@getdigifort.com or our online contact form to help you choose or activate your plan.'
  },
  {
    category: 'Refunds & Guarantee',
    question: 'What is your refund policy?',
    answer: 'DIGIFORT provides a transparent 30-day money-back guarantee for unredeemed digital license keys if you encounter technical incompatibility or change your mind.'
  }
];

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = DEFAULT_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our marketplace, digital delivery, and licensing.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      {title && (
        <div className="section-header">
          <span className="eyebrow">Customer Support & FAQs</span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                className="faq-question-btn"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <div className="question-left">
                  <HelpCircle size={18} className="q-icon" />
                  <span className="question-text">{item.question}</span>
                </div>
                <ChevronDown size={18} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
              </button>

              {isOpen && (
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .faq-container {
          width: 100%;
          max-width: 840px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .faq-item.open {
          border-color: var(--navy-primary);
          box-shadow: var(--shadow-sm);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .question-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .q-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .question-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--navy-primary);
        }

        .chevron-icon {
          color: var(--text-muted);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
          color: var(--navy-primary);
        }

        .faq-answer-content {
          padding: 0 22px 20px 52px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
        }
      `}</style>
    </div>
  );
};
