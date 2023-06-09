import { LineItemReturnItemDraft } from './LineItem';
import { Cart } from './Cart';

export interface ReturnInfoItem extends LineItemReturnItemDraft {
  createdAt?: string;
  returnInfoId: string;
}

export interface ReturnInfo {
  items: ReturnInfoItem[];
  returnDate?: string;
  returnTrackingId?: string;
}

export interface Order extends Cart {
  isPreBuyCart?: boolean;
  orderId?: string;
  orderVersion?: string;
  orderState?: string;
  createdAt?: string;
  businessUnit?: string;
  returnInfo?: ReturnInfo[];
  purchaseOrderNumber?: string;
  state?: any;
}
