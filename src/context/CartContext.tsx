'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Plan, Product } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, plan: Plan) => void;
  removeFromCart: (planId: string) => void;
  updateQuantity: (planId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  savings: number;
  total: number;
  toastMessage: string | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'digifort_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on client side
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to parse cart from storage:', e);
    }
    setIsLoaded(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
      } catch (e) {
        console.error('Failed to save cart to storage:', e);
      }
    }
  }, [cart, isLoaded]);

  const addToCart = (product: Product, plan: Plan) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.planId === plan.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${plan.id}`,
          brandId: product.brandId,
          brandName: product.brandName,
          productName: product.name,
          planId: plan.id,
          planName: plan.name,
          deviceCount: plan.deviceCount,
          price: plan.price,
          originalPrice: plan.originalPrice,
          billingPeriod: plan.billingPeriod,
          quantity: 1,
        };
        return [...prevCart, newItem];
      }
    });

    setToastMessage(`Added ${plan.name} to your cart!`);

    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const removeFromCart = (planId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.planId !== planId));
  };

  const updateQuantity = (planId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(planId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.planId === planId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const dismissToast = () => {
    setToastMessage(null);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalOriginal = cart.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);

  const savings = Math.max(0, totalOriginal - subtotal);

  const total = subtotal;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        savings,
        total,
        toastMessage,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
