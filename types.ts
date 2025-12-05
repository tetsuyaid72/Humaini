export type Category = 'ALL' | 'PERMATA' | 'PERAK' | 'EMAS';

export interface Product {
  id: number;
  name: string;
  category: Category;
  priceRange: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
