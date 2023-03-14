import { CategoryQuery as ApiCategoryQuery } from "cofe-ct-ecommerce/interfaces/CategoryQuery";

export interface CategoryQuery extends ApiCategoryQuery {
    rootCategoryId?: string;
    parentId?: string;
    path?: string;
    slug?: string;
}
