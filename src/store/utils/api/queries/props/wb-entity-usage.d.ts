import { Limit, QueryPropBase, Values } from '../query';

/** Returns all entity IDs used in the given pages. */
export interface WBEntityUsage extends QueryPropBase {
  prop: 'wbentityusage' | 'wbeu';

  /** Properties to add to the result. */
  wbeuProp: Values<'url'>;

  /** Only return entity IDs that used this aspect. */
  wbeuAspect?: Values<'S' | 'L' | 'D' | 'T' | 'C' | 'X' | 'O'>;

  /** Only return page that used these entities. */
  wbeuEntities: Values<string>;

  /** How many entity usages to return. */
  wbeuLimit?: Limit;

  /** When more results are available, use this to continue. */
  wbeuContinue?: string;
}
