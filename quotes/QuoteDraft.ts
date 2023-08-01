import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { Store } from '../store/Store';
import { LineItem } from '../cart/LineItem';
import { QuoteRequestReference } from './QuoteRequest';
import { StagedQuoteReference } from './StagedQuote';

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
  version?: number;
  createdAt?: Date;
  lastModifiedAt?: Date;
  // quoteRequest?: QuoteRequestReference;
  // stagedQuote: StagedQuoteReference;
  account?: Account;
  sellerComment?: string;
  buyerComment?: string;
  store?: Store;
  businessUnit?: BusinessUnit;
  lineItems?: LineItem[];
  sum?: Money;
  shippingAddress?: Address;
  billingAddress?: Address;
  // country?: string;
  quoteDraftState?: QuoteDraftState;
  itemShippingAddresses?: Address[];
  expirationDate?: Date;
}
