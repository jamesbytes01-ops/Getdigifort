'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { CheckoutFormData, OrderDetails } from '@/types';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, Phone, ShoppingBag, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, savings, total, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '123 Main Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '123',
    agreeTerms: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid email address is required for digital key delivery';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms to proceed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    setIsProcessing(true);

    // Simulate order processing & generate order details
    setTimeout(() => {
      const randomOrderNum = `DIGI-${Math.floor(100000 + Math.random() * 900000)}`;

      const orderData: OrderDetails = {
        orderNumber: randomOrderNum,
        orderDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        items: [...cart],
        subtotal,
        tax: 0,
        total,
        paymentMethod: formData.paymentMethod === 'card' ? 'Credit Card (Visa/MC)' : 'PayPal Instant',
        licenseKeys: cart.map((item) => ({
          productName: item.productName,
          planName: item.planName,
          key: `${item.brandName.toUpperCase().slice(0, 4)}-${Math.random().toString(36).substr(2, 5).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
          instructionsUrl: `https://shop.getdigifort.com/activate/${item.brandId}`,
        })),
      };

      try {
        localStorage.setItem('digifort_latest_order', JSON.stringify(orderData));
      } catch (err) {
        console.error('Failed to save order to localStorage:', err);
      }

      clearCart();
      setIsProcessing(false);
      router.push('/order-confirmation');
    }, 1200);
  };

  if (cart.length === 0 && !isProcessing) {
    return (
      <div className="container section-padding text-center">
        <div className="card empty-checkout-card">
          <h2>No Items in Cart for Checkout</h2>
          <p>Please select an antivirus plan to proceed to checkout.</p>
          <Link href="/antivirus" className="btn btn-primary mt-16">
            Browse Antivirus Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page section-padding">
      <div className="container">
        <div className="checkout-header">
          <Link href="/cart" className="back-link">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
          <h1 className="checkout-title">Secure Checkout & License Delivery</h1>
          <div className="secure-pill">
            <Lock size={14} className="lock-icon" /> 256-Bit SSL Encrypted
          </div>
        </div>

        <form onSubmit={handleSubmitOrder} className="checkout-form-grid">
          {/* LEFT FORM FIELDS COLUMN */}
          <div className="checkout-fields-col">
            {/* STEP 1: CUSTOMER DETAILS */}
            <div className="card form-card">
              <h3 className="card-step-title">
                <span className="step-num">1</span> Customer Information
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jane"
                    className="form-input"
                  />
                  {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Smith"
                    className="form-input"
                  />
                  {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address for Key Delivery *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane.smith@example.com"
                  className="form-input"
                />
                <span className="form-hint">Your product activation key will be delivered instantly to this email.</span>
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            {/* STEP 2: PAYMENT METHOD ARCHITECTURE */}
            <div className="card form-card mt-24">
              <h3 className="card-step-title">
                <span className="step-num">2</span> Payment Method
              </h3>

              <div className="payment-options">
                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <CreditCard size={20} className="pay-icon" />
                  <div className="pay-label-wrap">
                    <span className="pay-title">Credit or Debit Card</span>
                    <span className="pay-sub">Visa, Mastercard, American Express, Discover</span>
                  </div>
                </label>

                <label className={`payment-option ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                  />
                  <Lock size={20} className="pay-icon" />
                  <div className="pay-label-wrap">
                    <span className="pay-title">PayPal Checkout</span>
                    <span className="pay-sub">Fast, secure payment via PayPal account</span>
                  </div>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="card-inputs-box">
                  <div className="form-group">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Expiration Date</label>
                      <input
                        type="text"
                        name="cardExp"
                        value={formData.cardExp}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CVC Code</label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="form-terms-check">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <span>
                    I agree to the <Link href="/terms" target="_blank">Terms of Service</Link> and <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>. I understand this purchase is for digital delivery.
                  </span>
                </label>
                {errors.agreeTerms && <span className="form-error">{errors.agreeTerms}</span>}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn btn-primary btn-full btn-lg mt-20 submit-order-btn"
              >
                {isProcessing ? 'Processing Secure Order...' : `Complete Purchase • $${total.toFixed(2)}`}
              </button>
            </div>
          </div>

          {/* RIGHT SUMMARY SIDEBAR */}
          <div className="checkout-summary-col">
            <div className="card summary-card">
              <h3 className="summary-title">Order Items ({cart.length})</h3>

              <div className="order-items-list">
                {cart.map((item) => (
                  <div key={item.planId} className="summary-item-row">
                    <div>
                      <span className="summary-item-name">{item.planName}</span>
                      <span className="summary-item-meta">{item.deviceCount} Device • {item.billingPeriod}</span>
                    </div>
                    <span className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider" />

              <div className="summary-calc-line">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {savings > 0 && (
                <div className="summary-calc-line green">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-calc-line">
                <span>Digital Delivery Fee</span>
                <span className="green">FREE</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-calc-line total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="trust-callout">
                <div className="callout-header">
                  <Mail size={16} className="callout-icon" />
                  <span>Need Order Assistance?</span>
                </div>
                <p className="callout-desc">Contact support@getdigifort.com for instant billing or licensing help.</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        .checkout-page {
          background-color: var(--bg-main);
        }

        .checkout-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 16px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .checkout-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .secure-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          background-color: var(--success-bg);
          color: var(--success-green);
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          border: 1px solid #A7F3D0;
        }

        .checkout-form-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
        }

        @media (max-width: 960px) {
          .checkout-form-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 28px;
        }

        .card-step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--navy-primary);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--navy-primary);
          color: #ffffff;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .form-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .mt-24 {
          margin-top: 24px;
        }

        .mt-20 {
          margin-top: 20px;
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .payment-option.active {
          border-color: var(--navy-primary);
          background-color: var(--bg-alt);
        }

        .pay-icon {
          color: var(--navy-primary);
        }

        .pay-label-wrap {
          display: flex;
          flex-direction: column;
        }

        .pay-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--navy-primary);
        }

        .pay-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .card-inputs-box {
          background-color: var(--bg-alt);
          padding: 18px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .form-terms-check {
          margin-top: 16px;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .checkbox-label input {
          margin-top: 3px;
        }

        .submit-order-btn {
          font-weight: 800;
        }

        /* Summary Column */
        .summary-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: sticky;
          top: 96px;
        }

        .summary-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--navy-primary);
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .order-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .summary-item-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.88rem;
        }

        .summary-item-name {
          display: block;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .summary-item-meta {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .summary-item-price {
          font-weight: 800;
          color: var(--navy-primary);
        }

        .summary-calc-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .summary-calc-line.green {
          color: var(--success-green);
          font-weight: 600;
        }

        .summary-calc-line.total {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .trust-callout {
          margin-top: 12px;
          background-color: var(--bg-alt);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 14px;
        }

        .callout-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--navy-primary);
          margin-bottom: 4px;
        }

        .callout-icon {
          color: var(--accent-gold);
        }

        .callout-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .empty-checkout-card {
          padding: 48px;
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
        }

        .mt-16 {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}
