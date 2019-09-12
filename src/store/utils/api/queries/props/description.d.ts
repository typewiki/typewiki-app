import { QueryPropBase } from '../../query';

export interface Description extends QueryPropBase<'description' | 'desc'> {
  descContinue: number;
  descPreferSource: 'local' | 'central';
}
