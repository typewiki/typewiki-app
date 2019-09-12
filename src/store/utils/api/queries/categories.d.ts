import { QueryBase, QueryPropBase } from '../query';

export interface Categories extends QueryPropBase<'categories' | 'cl'> {
  clProp: ('sortkey' | 'timestamp' | 'hidden')[];
  clShow: ('hidden' | '!hidden')[];
  clLimit?: number | 'max';
  clContinue?: string;
  clCategories: string[];
  clDir?: 'ascending' | 'descending';
}
