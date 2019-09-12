import { All, Limit, QueryPropBase, Values } from '../../query';

export interface FileUsage extends QueryPropBase {
  prop: 'fileusage' | 'fu';
  fuProp: Values<'pageid' | 'title' | 'redirect'>;
  fuNamespace: All | Values<0>;
  fuShow: Values<'redirect' | '!redirect'>;
  fuLimit: Limit;
  fuContinue: string;
}
