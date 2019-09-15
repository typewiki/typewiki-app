import { ActionBase } from '../action-base';
import { Values } from './query';

/** Check the validity of a token from action=query&meta=tokens. */
export interface CheckToken extends ActionBase {
  /** Type of token being tested. */
  type: Values<
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

  /** Token to test. */
  token: string;

  /** Maximum allowed age of the token, in seconds. */
  maxTokenAge?: number;
}
