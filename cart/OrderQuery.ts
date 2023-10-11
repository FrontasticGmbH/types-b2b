import { OrderState } from './Order';
import { PaginatedQuery, SortAttributes } from '../query';

export interface OrderQuery extends PaginatedQuery {
  accountId: string;
  orderIds?: string[];
  orderState?: OrderState[];
  sortAttributes?: SortAttributes;
  businessUnitKey?: string;
  query?: string;
}
