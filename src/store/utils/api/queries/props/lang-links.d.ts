import { All, Limit, QueryPropBase, Values } from '../../query';

export interface LangLinks extends QueryPropBase {
  prop: 'langlinks' | 'll';
  lhProp: Values<'pageid' | 'title' | 'redirect'>;
  lhNamespace: All | Values<0>;
  lhShow: Values<'redirect', '!redirect'>;
  lhLimit: Limit;
  lhContinue: string;
}
