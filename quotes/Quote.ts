import { QuoteDraft } from './QuoteDraft';

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
}
