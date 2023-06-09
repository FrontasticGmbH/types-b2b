import { CustomerReference } from '../account/Account';
import { Address } from '../account/Address';
import { BusinessUnitResourceIdentifier } from '../business-unit/BusinessUnit';
import { Money } from '../product/Money';
import { StoreKeyReference } from '../store/Store';
import { LineItem } from '../cart/LineItem';
import { QuoteRequestReference } from './QuoteRequest';
import { StagedQuoteReference } from './StagedQuote';

export interface Quote {
  readonly id: string;
  readonly version: number;
  readonly key?: string;
  readonly createdAt: string;
  readonly lastModifiedAt: string;
  readonly quoteRequest?: QuoteRequestReference;
  readonly stagedQuote: StagedQuoteReference;
  readonly customer?: CustomerReference;
  readonly sellerComment?: string;
  readonly buyerComment?: string;
  readonly store?: StoreKeyReference;
  readonly lineItems: LineItem[];
  readonly totalPrice: Money;
  readonly shippingAddress?: Address;
  readonly billingAddress?: Address;
  readonly country?: string;
  readonly itemShippingAddresses?: Address[];
  readonly directDiscounts?: any[];
  quoteState?: string;
  readonly businessUnit?: BusinessUnitResourceIdentifier;
}
