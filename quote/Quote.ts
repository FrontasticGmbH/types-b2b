import { QuoteRequest } from './QuoteRequest';
import { LineItem } from '../cart/LineItem';
import { Money } from '../product/Money';
import { Tax } from '../cart/Tax';

export enum QuoteState {
  Accepted = 'Accepted', // Accepted by the buyer.
  Declined = 'Declined', // Declined by the buyer.
  DeclinedForRenegotiation = 'DeclinedForRenegotiation', // Declined by the buyer for renegotiation.
  Failed = 'Failed',
  Pending = 'Pending', // Pending for Acceptance / Decline by the buyer.
  Withdrawn = 'Withdrawn', // Withdrawn by the seller.
}

export interface Quote extends QuoteRequest {
  quoteId?: string;
  key?: string;
  quoteState?: QuoteState;
  quoteCreatedAt?: Date;
  quoteLastModifiedAt?: Date;
  quoteLineItems?: LineItem[];
  quoteSum?: Money;
  quoteTax?: Tax;
  quoteExpirationDate?: Date;
  quotedRequested?: QuoteRequest;
}
