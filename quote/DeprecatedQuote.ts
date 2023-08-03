import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { Store } from '../store/Store';
import { LineItem } from '../cart/LineItem';
import { QuoteRequestReference } from './DeprecatedQuoteRequest';
import { StagedQuoteReference } from './StagedQuote';

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
}
