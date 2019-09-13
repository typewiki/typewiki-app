import { All, Direction, Limit, QueryPropBase, Values } from '../../query';

/** Returns file information for stashed files. */
export interface StashImageInfo extends QueryPropBase {
  prop: 'stashimageinfo' | 'sii';

  /** Show templates in these namespaces only. */
  siiFileKey: All | Values<string>;

  /** How many templates to return. */
  tlLimit?: Limit;

  /** When more results are available, use this to continue. */
  tlContinue?: string;

  /**
   * Only list these templates.
   * Useful for checking whether a certain page uses a certain template.
   */
  tlTemplates: Values<string>;

  /** The direction in which to list. */
  tlDir?: Direction;
}
