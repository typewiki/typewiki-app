import { All, Limit, QueryPropBase, Values } from '../../query';

/** Find all pages that use the given files. */
export interface FileUsage extends QueryPropBase {
  prop: 'fileusage' | 'fu';

  /** Which properties to get */
  fuProp: Values<'pageid' | 'title' | 'redirect'>;

  /** Only include pages in these namespaces. */
  fuNamespace: All | Values<string>;

  /** Show only items that meet these criteria */
  fuShow: Values<'redirect' | '!redirect'>;

  /** How many to return. */
  fuLimit?: Limit;

  /** When more results are available, use this to continue. */
  fuContinue?: string;
}
