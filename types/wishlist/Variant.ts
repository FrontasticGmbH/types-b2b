import { Money } from '../product/Money';

export interface Variant {
  sku: string;
  images?: string[];
  price?: Money;
}
