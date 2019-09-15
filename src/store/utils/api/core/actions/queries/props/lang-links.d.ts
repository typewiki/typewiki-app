import { Direction, Limit, QueryPropBase, Values } from '../../query';

/** Returns all interlanguage links from the given pages. */
export interface LangLinks extends QueryPropBase {
  prop: 'langlinks' | 'll';

  /** Which additional properties to get for each interlanguage link: */
  llProp: Values<'url' | 'langname' | 'autonym'>;

  /** Only return language links with this language code. */
  llLang: string;

  /** The direction in which to list. */
  llDir?: Direction;

  /** Language code for localised language names. */
  llInLanguageCode: string;

  /** How many langlinks to return. */
  llLimit: Limit;

  /** When more results are available, use this to continue. */
  llContinue: string;
}
