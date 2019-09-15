import { Direction, Limit, QueryMetaBase } from '../../query';

/**
 * List or filter the user's reading lists and show metadata about them.
 *
 * This module has four modes of operation.
 *
 * With the rllist parameter, it returns information about the specified list.
 * With the rlchangedsince parameter, it returns all lists of the current user
 * which have been changed since the given date.
 * (This is meant for device sync and, unlike the other modes, includes deleted lists.
 * Only changes to list metadata are considered, not changes to list items.)
 * With the rlproject and rltitle parameters, it returns all lists that include that page.
 * Without any of those parameters, it returns all lists.
 */
export interface ReadingLists extends QueryMetaBase {
  meta: 'readinglists' | 'rl';

  /** List ID. */
  rlList?: number;

  /**
   * Project of the page to filter on. Must be used together with rltitle.
   * Will only return lists which include this project and title.
   */
  rlProject: string;

  /**
   * Title of the page to filter on. Must be used together with rlproject.
   * Will only return lists which include this project and title.
   */
  rlTitle: string;

  /**
   * Show lists that have been changed since this timestamp.
   *
   * Must be after 2019-08-13T20:40:09Z.
   *
   * Clients should use the timestamp returned in the readinglists-synctimestamp
   * field from an earlier call if they want to ensure that no changes are missed,
   * and should be prepared to receive changes that have already been returned
   * in an earlier response, and handle them in an idempotent way.
   */
  rlChangedSince?: string;

  /**
   * Property to sort by.
   * Ignored when rlproject and rltitle is set (results are returned in DB order).
   * Defaults to updated when rlchangedsince is set, and to name otherwise.
   */
  rlSort?: 'name' | 'updated';

  /**
   * Sort direction: ascending (A to Z, oldest to newest) or descending.
   * Ignored when rlproject and rltitle is set.
   */
  rlDir?: Direction;

  /**
   * Number of result items to return.
   */
  rlLimit?: Limit;

  /**
   * When more results are available, use this to continue.
   */
  rlContinue?: string;
}
