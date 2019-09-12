import { Values, QueryPropBase } from '../../query';

export interface Redirects extends QueryPropBase<'redirects' | 'rd'> {
  rdProp: Values<'pageid' | 'title' | 'fragment'>;
  rdNamespace: number | 'max';
  tlContinue: string[];
  tlTemplates: string;
}
