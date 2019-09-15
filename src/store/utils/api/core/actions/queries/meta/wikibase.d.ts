import { QueryMetaBase, Values } from '../../query';

/** Get information about the Wikibase client and the associated Wikibase repository. */
export interface Wikibase extends QueryMetaBase {
  meta: 'wikibase' | 'wb';

  /** Which properties to get. */
  wbProp?: Values<'url' | 'siteid'>;
}
