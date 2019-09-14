import { QueryPropBase } from '../query';

/**
 * Return a data representation of references
 * associated with the given pages.
 */
export interface References extends QueryPropBase {
  prop: 'references' | 'rf';

  /** When more results are available, use this to continue. */
  rfContinue: string;
}
