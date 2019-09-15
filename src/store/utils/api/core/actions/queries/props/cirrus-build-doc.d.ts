import { QueryPropBase } from '../../query';

/** Dump of a CirrusSearch article document from the database servers */
export interface CirrusBuildDoc extends QueryPropBase {
  prop: 'cirrusbuilddoc' | 'cb';
}
