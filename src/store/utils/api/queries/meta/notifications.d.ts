import { Limit, QueryMetaBase, Values } from '../query';

/** Get notifications waiting for the current user. */
export interface Notifications extends QueryMetaBase {
  meta: 'notifications' | 'not';

  /** List of wikis to fetch notifications from (defaults to only current wiki). */
  notWikis?: Values<string>;

  /** Filter notifications returned. */
  notFilter?: Values<'read' | '!read'>;

  /** Details to request. */
  notProp?: Values<'list' | 'count' | 'seenTime'>;

  /**
   * The notification sections to query
   * (i.e. some combination of 'alert' and 'message').
   */
  notSections?: Values<string>;

  /**
   * Whether to group the result by section.
   * Each section is fetched separately if set.
   */
  notGroupBySection?: boolean;

  /** If specified, notifications will be returned formatted this way. */
  notFormat?: 'model' | 'special';

  /** The maximum number of notifications to return. */
  notLimit?: Limit;

  /** When more results are available, use this to continue. */
  notContinue?: string;

  /**
   * Whether to show unread notifications first
   * (only used if groupbysection is not set).
   */
  notUnreadFirst?: boolean;

  /**
   * Only return notifications for these pages.
   * To get notifications not associated with any page, use [] as a title.
   */
  notTitles?: Values<string>;

  /**
   * Whether to show bundle compatible unread notifications according
   * to notification types bundling rules.
   */
  notBundle?: boolean;

  /** When more alert results are available, use this to continue. */
  notAlertContinue?: string;

  /**
   * Whether to show unread message notifications first
   * (only used if groupbysection is set).
   */
  notAlertUnreadFirst?: boolean;

  /** When more message results are available, use this to continue. */
  notMessageContinue?: string;

  /**
   * Whether to show unread alert notifications first
   * (only used if groupbysection is set).
   */
  notMessageUnreadFirst?: boolean;

  /** True to opt in to a summary notification of notifications on foreign wikis. */
  notCrossWikiSummary?: boolean;
}
