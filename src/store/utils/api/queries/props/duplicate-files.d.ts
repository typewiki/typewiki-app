import { Direction, Limit, QueryPropBase } from '../query';

/**
 * List all files that are duplicates of the given files based on hash values.
 */
export interface DuplicateFiles extends QueryPropBase {
  prop: 'duplicatefiles' | 'df';

  /** How many duplicate files to return.. */
  dfLimit: Limit;

  /** When more results are available, use this to continue. */
  dfContinue: string;

  /** The direction in which to list. */
  dfDir: Direction;
}
