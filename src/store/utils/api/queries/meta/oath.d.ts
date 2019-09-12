import { QueryMetaBase } from '../../query';

/** Check to see if two-factor authentication (OATH) is enabled for a user. */
export interface Oath extends QueryMetaBase {
  meta: 'oath';

  /** User to get information about. Defaults to the current user. */
  oathUser: string;
}
