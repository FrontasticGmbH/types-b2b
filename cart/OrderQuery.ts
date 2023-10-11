import { OrderState } from './Order';
import { PaginatedQuery, SortAttributes } from '../query';

export interface OrderQuery extends PaginatedQuery {
  accountId: string;
  orderIds?: string[];
  orderStates?: OrderState[];
  sortAttributes?: SortAttributes;
  businessUnitKey?: string;
  query?: string;
}
