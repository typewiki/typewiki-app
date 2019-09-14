import { QueryPropBase, Values } from '../query';

/** Get various page properties defined in the page content. */
export interface PageProps extends QueryPropBase {
  prop: 'pageprops' | 'pp';

  /** When more results are available, use this to continue. */
  ppContinue: string;

  /**
   * Only list these page properties
   * (action=query&list=pagepropnames returns page property names in use).
   * Useful for checking whether pages use a certain page property.
   */
  ppProp: Values<string>;
}
