import { LineItem as B2BLineItem } from "cofe-ct-b2b-ecommerce/types/cart/LineItem";

export interface LineItem extends B2BLineItem {
    parentId?: string;
}
