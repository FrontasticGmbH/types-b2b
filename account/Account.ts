import { Group } from './Group';
import { Address } from './Address';
import { AccountToken } from "./AccountToken";

export interface Account {
  accountId?: string;
  email: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  birthday?: Date;
  password?: string; // TODO: should we use hash the password or use plain password?
  groups?: Group[];
  confirmationToken?: AccountToken;
  confirmed?: boolean;
  tokenValidUntil?: Date;
  addresses?: Address[];
  apiToken?: string;
}

export interface CustomerReference {
  obj?: any;
  id: string;
  typeId: 'customer';
}
