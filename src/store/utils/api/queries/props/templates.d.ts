import { AllValues, Direction, Limit, QueryPropBase, Values } from '../query';

/** Returns all pages transcluded on the given pages. */
export interface Templates extends QueryPropBase {
  prop: 'templates' | 'tl';

  /** Show templates in these namespaces only. */
  tlNamespace: AllValues | Values<string>;

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
