export interface Category {
  categoryId: string;
  parentId?: string;
  ancestors?: { id: string }[];
  children?: Category[];
  name?: string;
  depth?: number;
  path?: string;
  _url?: string;
  slug?: string;
}
