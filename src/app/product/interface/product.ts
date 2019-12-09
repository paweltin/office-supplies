import {ProductImage} from './productImage';

export interface Product {
  id: number;
  images: ProductImage[];
  activeImage?: number;
}
