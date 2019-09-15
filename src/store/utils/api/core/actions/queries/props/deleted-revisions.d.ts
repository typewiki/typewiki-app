import { AllValues, Limit, QueryPropBase, Values } from '../../query';

/**
 * Get deleted revision information.
 *
 * May be used in several ways:
 *
 * 1. Get deleted revisions for a set of pages, by setting titles or pageids. Ordered by title and timestamp.
 * 2. Get data about a set of deleted revisions by setting their IDs with revids. Ordered by revision ID.
 */
export interface DeletedRevisions extends QueryPropBase {
  prop: 'deletedrevisions' | 'drv';

  /** Which properties to get for each revision */
  drvProp: Values<
    | 'ids'
    | 'flags'
    | 'timestamp'
    | 'user'
    | 'userid'
    | 'size'
    | 'slotsize'
    | 'sha1'
    | 'slotsha1'
    | 'contentmodel'
    | 'comment'
    | 'parsedcomment'
    | 'content'
    | 'tags'
    | 'roles'
  >;

  /**
   * Which revision slots to return data for,
   * when slot-related properties are included in rvprops.
   * If omitted, data from the main slot will be returned
   * in a backwards-compatible format.
   * */
  drvSlots?: AllValues | Values<'main'>;

  /**
   * Limit how many revisions will be returned.
   *
   * May only be used with a single page (mode #2).
   */
  drvLimit?: Limit;

  /**
   * Start enumeration from this revision's timestamp.
   * The revision must exist, but need not belong to this page.
   *
   * May only be used with a single page (mode #2).
   */
  drvStartId?: number;

  /**
   * Stop enumeration at this revision's timestamp.
   * The revision must exist, but need not belong to this page.
   *
   * May only be used with a single page (mode #2).
   */
  drvEndId?: number;

  /**
   * From which revision timestamp to start enumeration.
   *
   * May only be used with a single page (mode #2).
   */
  drvStart?: string;

  /**
   * Enumerate up to this timestamp.
   *
   * May only be used with a single page (mode #2).
   */
  drvEnd?: string;

  /**
   * In which direction to enumerate.
   *
   * May only be used with a single page (mode #2).
   */
  drvDir?: 'newer' | 'older';

  /**
   * Only include revisions made by user.
   *
   * May only be used with a single page (mode #2).
   */
  drvUser?: string;

  /**
   * Exclude revisions made by user.
   *
   * May only be used with a single page (mode #2).
   */
  drvExcludeUser?: string;

  /** Only list revisions tagged with this tag. */
  drvTag?: string;

  /** When more results are available, use this to continue. */
  drvContinue?: string;
}
