import { QueryMetaBase, Values } from '../../query';

/** Gets tokens for data-modifying actions. */
export interface Tokens extends QueryMetaBase {
  meta: 'tokens';

  /** Types of token to request. */
  type?: Values<
    | 'createaccount'
    | 'csrf'
    | 'deleteglobalaccount'
    | 'login'
    | 'patrol'
    | 'rollback'
    | 'setglobalaccountstatus'
    | 'userrights'
    | 'watch'
  >;
}
