import { All, Direction, Limit, QueryPropBase, Values } from '../../query';

export interface Links extends QueryPropBase<'links' | 'pl'> {
  plNamespace: All | Values<1>;
  plLimit?: Limit;
  plContinue?: string;
  plTitles: Values<string>;
  plDir?: Direction;
}
