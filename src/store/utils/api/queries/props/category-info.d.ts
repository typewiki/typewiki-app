import { QueryPropBase } from '../../query';

export interface CategoryInfo extends QueryPropBase {
  prop: 'categoryinfo' | 'ci';
  ciContinue?: string;
}
