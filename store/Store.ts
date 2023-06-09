import { ChannelResourceIdentifier } from '../channel/channel';

export interface Store {
  key: string;
  name: string;
  id?: string;
  distributionChannels?: ChannelResourceIdentifier[];
  supplyChannels?: ChannelResourceIdentifier[];
  isPreBuyStore?: boolean;
  storeRootCategoryId?: string
}

export interface StoreKeyReference {
  key?: string;
  id?: string;
  typeId: 'store';
  name?: string;
}
