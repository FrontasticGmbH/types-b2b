import { Store } from '@Types/store/Store';
import { Organization as B2Borganization } from 'cofe-ct-b2b-ecommerce/types/organization/organization';

export interface Organization extends B2Borganization {
    store: Store;
}
