import { All, Limit, QueryPropBase, Values } from '../../query';

/** Find all pages that transclude the given pages. */
export interface TranscludedIn extends QueryPropBase {
  prop: 'transcludedin' | 'ti';

  /** Which properties to get. */
  tiProp?: Values<'pageid' | 'title' | 'redirect'>;

  /** Only include pages in these namespaces. */
  tiNamespace: All | Values<string>;

  /** Show only items that meet these criteria. */
  tiShow: Values<'redirect' | '!redirect'>;

  /** How many to return. */
  tiLimit?: Limit;

  /** When more results are available, use this to continue. */
  tiContinue?: string;
}
