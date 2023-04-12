export interface CategoryQuery {
  limit?: number;
  cursor?: string;
  rootCategoryId?: string;
  parentId?: string;
  path?: string;
  slug?: string;
}
