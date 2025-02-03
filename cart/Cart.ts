import { ShippingMethod } from './ShippingMethod';
import { LineItem } from './LineItem';
import { Address } from '../account/Address';
import { Payment } from './Payment';
import { Discount } from './Discount';
import { Tax } from './Tax';
import { ShippingInfo } from './ShippingInfo';
import { Money } from '../product/Money';
import { AccountGroup } from '../account';

export enum CartOrigin {
  Customer = 'Customer',
  Merchant = 'Merchant',
  Quote = 'Quote',
}

export enum CartState {
  Active = 'Active',
  Frozen = 'Frozen',
  Merged = 'Merged',
  Ordered = 'Ordered',
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
  taxed?: Tax;
  discountedAmount?: Money;
  origin?: CartOrigin;
  cartState?: CartState;
  accountId?: string;
  businessUnitKey?: string;
  storeKey?: string;
  accountGroup?: AccountGroup;
}
