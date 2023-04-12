import { ShippingMethod } from './ShippingMethod';
import { LineItem } from './LineItem';
import { Address } from '../account/Address';
import { Payment } from './Payment';
import { Discount } from './Discount';
import { Tax } from './Tax';
import { ShippingInfo } from './ShippingInfo';
import { Money } from '../product/Money';
import { Order } from './Order';
import { Product } from '../product/Product';

export interface Subscription {
  order?: Order;
  product?: Product;
  sku?: string;
  nextDeliveryDate?: string;
  isActive?: boolean;
}

export interface CartReference {
  id: string;
  typeId: 'cart';
  obj?: Cart;
}

export interface Cart {
  cartId: string;
  cartVersion?: string;
  lineItems?: LineItem[];
  email?: string;
  birthday?: Date;
  shippingInfo?: ShippingInfo; // Info of the shipping method selected by the customer
  availableShippingMethods?: ShippingMethod[]; // Available shipping methods for this cart
  shippingAddress?: Address;
  billingAddress?: Address;
  itemShippingAddresses?: Address[];
  sum?: Money;
  payments?: Payment[];
  discountCodes?: Discount[];
  directDiscounts?: number | undefined;
  taxed?: Tax;
  origin?: string;
  businessUnit?: string;
  isPreBuyCart?: boolean;
  subscription?: Subscription;
  customerId: string;
  store?: string;
  // TODO: import the logic from Cart.php
}
