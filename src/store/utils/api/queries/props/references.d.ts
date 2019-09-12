import { QueryPropBase } from '../../query';

export interface References extends QueryPropBase<'references' | 'rf'> {
  rfContinue: string;
}
