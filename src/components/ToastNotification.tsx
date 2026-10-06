'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';

export const ToastNotification: React.FC = () => {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-banner">
      <ShoppingBag size={18} />
      <span>{toastMessage}</span>
      <Link href="/cart" className="toast-link">
        View Cart
      </Link>
      <button onClick={dismissToast} className="toast-close" aria-label="Close notification">
        <X size={16} />
      </button>

      <style jsx>{`
        .toast-link {
          color: var(--accent-gold);
          font-weight: 700;
          text-decoration: underline;
          margin-left: 6px;
        }
        .toast-close {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          margin-left: 8px;
          display: flex;
          align-items: center;
        }
        .toast-close:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};
