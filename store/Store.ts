import { Store as B2BStore } from "cofe-ct-b2b-ecommerce/types/store/store";

export interface Store extends B2BStore {
    isPreBuyStore?: boolean;
    storeRootCategoryId?: string
}
