import { Limit, QueryPropBase, Values } from '../../query';

export interface Extracts extends QueryPropBase<'extracts' | 'ex'> {
  exChars: number;
  exSentences: number;
  exLimit?: Limit;
  exIntro: boolean;
  exPlainText: boolean;
  exSectionFormat?: Values<'plain' | 'wiki' | 'raw'>;
  exContinue: number;
}
