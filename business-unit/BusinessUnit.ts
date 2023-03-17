import { Money } from '@commercetools/frontend-domain-types/product/Money';
import {BusinessUnit as B2BbusinessUnit} from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';

export interface BusinessUnit extends B2BbusinessUnit {
    custom?: {
        fields?: {
          budget?: Money;
          workflows?: string;
        };
      };
}
