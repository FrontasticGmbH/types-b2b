import { CustomerReference } from 'cofe-ct-b2b-ecommerce/types//account/Account';
import { Widget } from '../widget/Widget';

export interface DashboardCustomObject extends DashboardCustomObjectDraft {
  id: string;
  createdAt: string;
  version?: number;
}

export interface DashboardCustomObjectDraft {
  version?: number;
  container: string;
  key: string;
  value: {
    customer: CustomerReference;
    widgets: Widget[];
  };
}
