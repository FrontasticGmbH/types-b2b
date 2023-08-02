import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { Store } from '../store/Store';
import { LineItem } from '../cart/LineItem';
<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/QuoteDraft.ts
import { QuoteRequestReference } from './QuoteRequest';
import { StagedQuoteReference } from './StagedQuote';
=======
import { Tax } from '../cart/Tax';
>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/QuoteDraft.ts

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
<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/QuoteDraft.ts
  version?: number;
  createdAt?: Date;
  lastModifiedAt?: Date;
  // quoteRequest?: QuoteRequestReference;
  // stagedQuote: StagedQuoteReference;
=======
  createdAt?: Date;
  lastModifiedAt?: Date;
>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/QuoteDraft.ts
  account?: Account;
  sellerComment?: string;
  buyerComment?: string;
  store?: Store;
  businessUnit?: BusinessUnit;
  lineItems?: LineItem[];
  sum?: Money;
<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/QuoteDraft.ts
  shippingAddress?: Address;
  billingAddress?: Address;
  // country?: string;
=======
  taxed?: Tax;
  shippingAddress?: Address;
  billingAddress?: Address;
>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/QuoteDraft.ts
  quoteDraftState?: QuoteDraftState;
  itemShippingAddresses?: Address[];
  expirationDate?: Date;
}
