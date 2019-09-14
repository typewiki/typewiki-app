import { Limit, QueryMetaBase, Values } from '../query';

/** Get pages for which there are unread notifications for the current user. */
export interface UnreadNotificationPages extends QueryMetaBase {
  meta: 'unreadnotificationpages' | 'unp';

  /**
   * List of wikis to fetch pages with unread notifications from
   * (defaults to only current wiki).
   */
  unpWikis?: Values<string>;

  /**
   * Group talk pages together with their subject page, and group notifications
   * not associated with a page together with the current user's user page.
   */
  unpGroupPages?: boolean;

  /** The maximum number of pages to return. */
  unpLimit?: Limit;
}
