import { Account } from '../account/Account';
import { BusinessUnit } from '../business-unit/BusinessUnit';
import { Cart } from '../cart/Cart';
import { QuoteRequestReference } from './QuoteRequest';

export interface StagedQuoteReference {
  id: string;
  typeId: 'staged-quote';
  obj?: StagedQuote;
}
export interface StagedQuote {
  readonly id: string;

  readonly version: number;

  readonly key?: string;

  readonly createdAt: string;

  readonly lastModifiedAt: string;

  readonly stagedQuoteState: string;

  readonly customer?: Account;

  readonly quoteRequest: QuoteRequestReference;

  readonly validTo?: string;

  readonly sellerComment?: string;

  readonly state?: string;

  readonly businessUnit?: BusinessUnit;

  quotationCart: Cart;
}