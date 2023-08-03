import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { Store } from '../store/Store';
import { LineItem } from '../cart/LineItem';
import { Tax } from '../cart/Tax';

export enum QuoteDraftState {
  Accepted = 'Accepted', // Accepted by the seller.
  Cancelled = 'Cancelled', // Cancelled / Withdrawn by the buyer.
  Closed = 'Closed', // No further action that can be performed by any party.
  Rejected = 'Rejected', // Rejected by the seller.
  Submitted = 'Submitted', // Submitted by the buyer.
  InProgress = 'InProgress', // The seller is preparing the Quote.
  Sent = 'Sent', // Sent by the seller.
}

export interface QuoteDraft {
  quoteDraftId?: string;
  key?: string;
  quoteDraftCreatedAt?: Date;
  quoteDraftLastModifiedAt?: Date;
  account?: Account;
  sellerComment?: string;
  buyerComment?: string;
  store?: Store;
  businessUnit?: BusinessUnit;
  quoteDraftLineItems?: LineItem[];
  quoteDraftSum?: Money;
  quoteDraftTax?: Tax;
  shippingAddress?: Address;
  billingAddress?: Address;
  quoteDraftState?: QuoteDraftState;
  itemShippingAddresses?: Address[];
  quoteDraftExpirationDate?: Date;
}
