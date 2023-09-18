import { Filter } from './Filter';
import { PaginatedQuery } from './PaginatedQuery';
import { Facet } from './Facet';
import { QuoteState } from '../quote/Quote';
import { QuoteRequestState } from '../quote/QuoteRequest';

export enum SortOrder {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export interface SortAttributes {
  [key: string]: any;
}

export interface QuoteQuery extends PaginatedQuery {
  // category?: string;
  // productIds?: string[];
  // productType?: string;
  // skus?: string[];
  // query?: string;
  // filters?: Filter[];
  // facets?: Facet[];
  // sortAttributes?: SortAttributes;
  // storeKey?: string;
  accountId: string;
  quoteIds?: string[];
  quoteStates?: QuoteState[] | QuoteRequestState[];
  createdBefore?: Date;
}
