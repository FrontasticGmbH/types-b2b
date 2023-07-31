import { ShippingMethod } from './ShippingMethod';
import { LineItem } from './LineItem';
import { Address } from '../account/Address';
import { Payment } from './Payment';
import { Discount } from './Discount';
import { Tax } from './Tax';
import { ShippingInfo } from './ShippingInfo';
import { Money } from '../product/Money';

export interface CartReference {
  id: string;
  typeId: 'cart';
  obj?: Cart;
}

export enum CartOrigin {
  Customer = 'Customer',
  Merchant = 'Merchant',
  Quote = 'Quote',
}

export interface Cart {
  cartId: string;
  cartVersion?: string;
  lineItems?: LineItem[];
  email?: string;
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
  origin?: CartOrigin | string;
  businessUnit?: string;
  customerId?: string;
  store?: string;
}
