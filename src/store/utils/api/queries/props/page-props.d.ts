import { QueryPropBase } from '../../query';

export interface PageProps extends QueryPropBase<'pageprops' | 'pp'> {
  ppContinue: string;
  ppProp: string[];
}
