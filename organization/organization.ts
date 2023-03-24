import { Store } from '../store/Store';
import { ChannelResourceIdentifier } from '../channel/channel';
import { BusinessUnit } from '../business-unit/BusinessUnit';

export interface Organization {
  businessUnit: BusinessUnit;
  distributionChannel: ChannelResourceIdentifier;
  store: Store;
  superUserBusinessUnitKey?: string;
}
