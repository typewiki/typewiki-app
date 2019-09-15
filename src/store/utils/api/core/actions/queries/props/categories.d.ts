import { Limit, Values, QueryPropBase, Direction } from '../../query';

/** List all categories the pages belong to. */
export interface Categories extends QueryPropBase {
  prop: 'categories' | 'cl';

  /** Which additional properties to get for each category. */
  clProp: Values<'sortkey' | 'timestamp' | 'hidden'>;

  /** Which kind of categories to show. */
  clShow: Values<'hidden' | '!hidden'>;

  /** How many categories to return. */
  clLimit?: Limit;

  /** When more results are available, use this to continue. */
  clContinue?: string;

  /**
   * Only list these categories. Useful for checking whether
   * a certain page is in a certain category.
   */
  clCategories: Values<string>;

  /** The direction in which to list. */
  clDir?: Direction;
}
