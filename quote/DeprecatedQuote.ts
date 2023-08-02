<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/DeprecatedQuote.ts
import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { Store } from '../store/Store';
import { LineItem } from '../cart/LineItem';
import { QuoteRequestReference } from './QuoteRequest';
import { StagedQuoteReference } from './StagedQuote';

=======
import { QuoteDraft } from './QuoteDraft';

<<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/Quote.ts
export enum QuoteState {
  Accepted = 'Accepted', // Accepted by the buyer.
  Declined = 'Declined', // Declined by the buyer.
  DeclinedForRenegotiation = 'DeclinedForRenegotiation', // Declined by the buyer for renegotiation.
  Failed = 'Failed',
  Pending = 'Pending', // Pending for Acceptance / Decline by the buyer.
  Withdrawn = 'Withdrawn', // Withdrawn by the seller.
}

export interface Quote extends QuoteDraft {
  quoteId?: string;
  quoteState?: QuoteState;
========
>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/DeprecatedQuote.ts
export interface DeprecatedQuote {
  readonly id: string;
  readonly version: number;
  readonly key?: string;
  readonly createdAt: string;
  readonly lastModifiedAt: string;
  readonly quoteRequest?: QuoteRequestReference;
  readonly stagedQuote: StagedQuoteReference;
  readonly customer?: Account;
  readonly sellerComment?: string;
  readonly buyerComment?: string;
  readonly store?: Store;
  readonly lineItems: LineItem[];
  readonly totalPrice: Money;
  readonly shippingAddress?: Address;
  readonly billingAddress?: Address;
  readonly country?: string;
  readonly itemShippingAddresses?: Address[];
  quoteState?: string;
  readonly businessUnit?: BusinessUnit;
<<<<<<< Updated upstream:saas/project-libraries/b2b/types/quotes/DeprecatedQuote.ts
=======
>>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/DeprecatedQuote.ts
>>>>>>> Stashed changes:saas/project-libraries/b2b/types/quote/DeprecatedQuote.ts
}
