import { QueryMetaBase, Values } from '../query';

/** Get information about the current user. */
export interface UserInfo extends QueryMetaBase {
  meta: 'userinfo' | 'ui';

  /** Which pieces of information to include. */
  uiProp?: Values<
    | 'blockinfo'
    | 'hasmsg'
    | 'groups'
    | 'groupmemberships'
    | 'implicitgroups'
    | 'rights'
    | 'changeablegroups'
    | 'options'
    | 'editcount'
    | 'ratelimits'
    | 'email'
    | 'realname'
    | 'acceptlang'
    | 'registrationdate'
    | 'unreadcount'
    | 'centralids'
    | 'latestcontrib'
  >;

  /**
   * With uiprop=centralids, indicate whether the user is attached with
   * the wiki identified by this ID.
   */
  uiAttachedWiki?: string;
}
