import { QueryPropBase } from '../../query';

/** Dump of a CirrusSearch article document from the search servers */
export interface CirrusDoc extends QueryPropBase {
  prop: 'cirrusdoc' | 'cd';
}
