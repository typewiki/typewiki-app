import { Values, QueryPropBase, AllValues, Limit } from '../query';

/** Returns all redirects to the given pages. */
export interface Redirects extends QueryPropBase {
  prop: 'redirects' | 'rd';

  /** Which properties to get. */
  rdProp: Values<'pageid' | 'title' | 'fragment'>;

  /** Only include pages in these namespaces. */
  rdNamespace: AllValues | Values<string>;

  /** Show only items that meet these criteria */
  rdShow: Values<'fragment', '!fragment'>;

  /** How many redirects to return. */
  rdLimit?: Limit;

  /** When more results are available, use this to continue. */
  rdContinue?: string;
}
