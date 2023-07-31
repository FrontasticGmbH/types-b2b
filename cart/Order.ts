import { ReturnLineItem } from './LineItem';
import { Cart } from './Cart';

export interface ReturnInfoItem extends ReturnLineItem {
  createdAt?: string;
  returnInfoId: string;
}

export interface ReturnInfo {
  items: ReturnInfoItem[];
  returnDate?: string;
  returnTrackingId?: string;
}

export enum OrderState {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open',
}

export interface Order extends Cart {
  isPreBuyCart?: boolean;
  orderId?: string;
  orderVersion?: string;
  orderState?: OrderState | string;
  createdAt?: Date;
  businessUnitKey?: string;
  returnInfo?: ReturnInfo[];
  purchaseOrderNumber?: string;
  state?: any;
}
