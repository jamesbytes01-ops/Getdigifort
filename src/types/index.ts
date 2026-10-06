export interface Plan {
  id: string;
  name: string;
  tagline: string;
  deviceCount: number;
  deviceLabel: string;
  price: number;
  originalPrice: number;
  billingPeriod: '1 Year' | '2 Years' | '3 Years';
  isPopular?: boolean;
  features: string[];
  osSupport: ('Windows' | 'macOS' | 'Android' | 'iOS')[];
}

export interface Product {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  logoUrl?: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  plans: Plan[];
  highlights: string[];
  osSupport: ('Windows' | 'macOS' | 'Android' | 'iOS')[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logoText: string;
  description: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  heroHeadline: string;
  heroSubheadline: string;
  keyBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  products: Product[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ComparisonFeature {
  id: string;
  name: string;
  category: 'Core Security' | 'Advanced Protection' | 'Privacy & Identity' | 'Performance & Extras' | 'Support & Delivery';
  tooltip?: string;
  brandValues: Record<string, string | boolean>;
}

export interface CartItem {
  id: string;
  brandId: string;
  brandName: string;
  productName: string;
  planId: string;
  planName: string;
  deviceCount: number;
  price: number;
  originalPrice: number;
  billingPeriod: string;
  quantity: number;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: 'card' | 'paypal';
  cardNumber?: string;
  cardExp?: string;
  cardCvc?: string;
  agreeTerms: boolean;
}

export interface OrderDetails {
  orderNumber: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  licenseKeys: {
    productName: string;
    planName: string;
    key: string;
    instructionsUrl: string;
  }[];
}
