import { QueryBase, Values } from '../../query';

export interface PageTerms extends QueryBase<'pageterms' | 'wbpt'> {
  wbPtContinue?: number;
  wbPtTerms?: Values<'alias' | 'description' | 'label'>;
}
