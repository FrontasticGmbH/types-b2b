import { Order } from "cofe-ct-b2b-ecommerce/types/cart/Order";
import { Product } from "@commercetools/frontend-domain-types/product/Product";
import { Cart as B2BCart } from "cofe-ct-b2b-ecommerce/types/cart/Cart";
export interface Subscription {
    order?: Order;
    product?: Product;
    sku?: string;
    nextDeliveryDate?: string;
    isActive?: boolean;
}

export interface Cart extends B2BCart {
    subscription?: Subscription;
}
