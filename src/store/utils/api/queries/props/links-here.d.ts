import { All, Limit, QueryPropBase, Values } from '../../query';

export interface LinksHere extends QueryPropBase {
  prop: 'linkshere' | 'lh';
  lhProp: Values<'pageid' | 'title' | 'redirect'>;
  lhNamespace: All | Values<0>;
  lhShow: Values<'redirect', '!redirect'>;
  lhLimit: Limit;
  lhContinue: string;
}
