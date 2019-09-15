import { AllValues, Limit, QueryPropBase, Values } from '../../query';

/** Returns global image usage for a certain image. */
export interface GlobalUsage extends QueryPropBase {
  prop: 'globalusage' | 'gu';

  /**
   * Which properties to return
   */
  guProp: Values<'url' | 'pageid' | 'namespace'>;

  /**
   * How many links to return.
   */
  guLimit?: Limit;

  /**
   * Limit results to these namespaces.
   */
  guNamespace?: AllValues | Values<string>;

  /** Limit results to these sites. */
  guSite: Values<string>;

  /** When more results are available, use this to continue. */
  guContinue?: string;

  /** Filter local usage of the file. */
  guFilterLocal?: boolean;
}
