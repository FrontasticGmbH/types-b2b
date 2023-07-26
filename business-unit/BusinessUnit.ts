import { Money } from '../product/Money';
import { StoreKeyReference } from '../store/Store';
import { Address } from '../account/Address';
import { Associate } from './Associate';

export enum BusinessUnitType {
  Company = 'Company',
  Division = 'Division',
}

export enum BusinessUnitStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum StoreMode {
  Explicit = 'Explicit',
  FromParent = 'FromParent',
}

export interface BusinessUnitResourceIdentifier {
  id?: string;
  key: string;
  typeId: 'business-unit';
}

export interface BusinessUnit {
  key: string;
  status?: BusinessUnitStatus | string;
  createdAt?: string;
  stores?: StoreKeyReference[];
  storeMode?: StoreMode | string;
  unitType?: BusinessUnitType | string;
  name: string;
  contactEmail?: string;
  addresses?: (Address & { id?: string })[];
  shippingAddresses?: number[];
  billingAddresses?: number[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
  associates?: Associate[];
  parentUnit?: BusinessUnitResourceIdentifier;
  topLevelUnit?: BusinessUnitResourceIdentifier;
  version?: number;
  children?: BusinessUnit[];
  isRootAdmin?: boolean;
  isAdmin?: boolean;
  custom?: {
    fields?: {
      budget?: Money;
      workflows?: string;
    };
  };
}

export interface BusinessUnitPagedQueryResponse {
  total?: number;
  count: number;
  limit: number;
  offset: number;
  results: BusinessUnit[];
}
