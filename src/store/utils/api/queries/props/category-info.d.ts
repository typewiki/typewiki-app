import { QueryPropBase } from '../query';

/** Returns information about the given categories. */
export interface CategoryInfo extends QueryPropBase {
  prop: 'categoryinfo' | 'ci';

  /** When more results are available, use this to continue. */
  ciContinue?: string;
}
