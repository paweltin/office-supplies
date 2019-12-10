import {ProductImage} from './productImage';

export interface Product {
  id: number;
  name: string;
  price: number;
  priceOld: number;
  images: ProductImage[];
  activeImage?: number;
  variants: string[];
  desc: string;
  features: string[];
}

export const formatPrice = (price: number): string => price !== null ? `${price.toFixed(2)} kr` : '';
