import { Values, QueryPropBase, Direction } from '../query';

/** Returns all interwiki links from the given pages. */
export interface IwLinks extends QueryPropBase {
  prop: 'iwlinks' | 'iw';

  /** Returns all interwiki links from the given pages. */
  iwProp: Values<'url'>;

  /** Only return interwiki links with this prefix. */
  iwPrefix: string;

  /**
   * Interwiki link to search for.
   * Must be used with iwprefix.
   */
  iwTitle?: string;

  /** The direction in which to list. */
  iwDir?: Direction;

  /**
   * When more results are available, use this to continue.
   */
  iwContinue?: string;
}
