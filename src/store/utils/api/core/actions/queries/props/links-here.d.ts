import { AllValues, Limit, QueryPropBase, Values } from '../../query';

/** Find all pages that link to the given pages. */
export interface LinksHere extends QueryPropBase {
  prop: 'linkshere' | 'lh';

  /** Which properties to get */
  lhProp: Values<'pageid' | 'title' | 'redirect'>;

  /** Only include pages in these namespaces. */
  lhNamespace: AllValues | Values<string>;

  /** Show only items that meet these criteria. */
  lhShow: Values<'redirect', '!redirect'>;

  /** How many to return. */
  lhLimit: Limit;

  /** When more results are available, use this to continue. */
  lhContinue: string;
}
