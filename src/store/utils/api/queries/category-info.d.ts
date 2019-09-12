import { QueryBase, QueryPropBase } from '../query';

export interface CategoryInfo extends QueryPropBase<'categoryinfo' | 'ci'> {
  ciContinue?: string;
}
