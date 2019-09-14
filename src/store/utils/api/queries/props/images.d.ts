import { Direction, Limit, QueryPropBase, Values } from '../query';

/** Returns all files contained on the given pages. */
export interface Images extends QueryPropBase {
  prop: 'images' | 'im';

  /**
   * How many files to return.
   */
  imLimit?: Limit;

  /** When more results are available, use this to continue. */
  imContinue?: string;

  /**
   * Only list these files.
   * Useful for checking whether a certain page has a certain file.
   */
  imImages?: Values<string>;

  /** The direction in which to list. */
  imDir?: Direction;
}
