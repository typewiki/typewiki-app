import { QueryPropBase, Values } from '../../query';

/**
 * Get the Wikidata terms (typically labels, descriptions and aliases)
 * associated with a page via a sitelink. On the entity page itself,
 * the terms are used directly.
 *
 * Caveat: On a repo wiki, this module only works directly on entity pages,
 * not on pages connected to an entity via a sitelink.
 * This may change in the future.
 */
export interface PageTerms extends QueryPropBase {
  prop: 'pageterms' | 'wbpt';

  /** When more results are available, use this to continue. */
  wbPtContinue?: number;

  /**
   * The types of terms to get, e.g. 'description',
   * each returned as an array of strings keyed by their type,
   * e.g. {"description": ["foo"]}.
   * If not specified, all types are returned.
   */
  wbPtTerms?: Values<'alias' | 'description' | 'label'>;
}
