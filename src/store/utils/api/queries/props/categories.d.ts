import { Limit, Values, QueryPropBase, Direction } from '../../query';

export interface Categories extends QueryPropBase {
  prop: 'categories' | 'cl';
  clProp: Values<'sortkey' | 'timestamp' | 'hidden'>;
  clShow: Values<'hidden' | '!hidden'>;
  clLimit?: Limit;
  clContinue?: string;
  clCategories: Values<string>;
  clDir?: Direction;
}
