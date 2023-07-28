import { Channel } from './Channel';

export interface Store {
  key: string;
  name?: string;
  id?: string;
  distributionChannels?: Channel[];
  supplyChannels?: Channel[];
}
