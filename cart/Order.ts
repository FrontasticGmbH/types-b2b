import { Order as B2BOrder } from 'cofe-ct-b2b-ecommerce/types/cart/Order';

export interface Order extends B2BOrder {
    isPreBuyCart?: boolean;
    state?: any;
}
