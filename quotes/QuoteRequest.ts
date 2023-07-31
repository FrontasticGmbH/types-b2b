import { LineItem } from '../cart/LineItem';
import { StagedQuote } from './StagedQuote';
import { Quote } from './Quote';
import { Account } from '../account/Account';
import { Store } from '../store/Store';
import { Money } from '../product/Money';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Address } from '../account/Address';

export interface QuoteRequestReference {
  id: string;
  typeId: 'quote-request';
  obj?: QuoteRequest;
}
export interface QuoteRequest {
  readonly id: string;

  readonly version: number;

  readonly key?: string;

  readonly createdAt: string;

  readonly lastModifiedAt: string;

  readonly quoteRequestState: string;

  readonly comment?: string;

  readonly customer: Account;

  readonly store?: Store;

  readonly lineItems: LineItem[];

  readonly totalPrice: Money;

  readonly shippingAddress?: Address;

  readonly billingAddress?: Address;

  readonly country?: string;

  readonly itemShippingAddresses?: Address[];

  readonly businessUnit?: BusinessUnit;
  staged?: StagedQuote;
  quoted?: Quote;
  highlight?: boolean;
}
