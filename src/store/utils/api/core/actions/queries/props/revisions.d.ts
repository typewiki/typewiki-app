import { AllValues, Limit, QueryPropBase, Values } from '../../query';

/**
 * Get revision information.
 *
 * May be used in several ways:
 *
 * 1. Get data about a set of pages (last revision), by setting titles or pageids
 * 2. Get revisions for one given page, by using titles or pageids with start, end, or limit.
 * 3. Get data about a set of revisions by setting their IDs with revids.
 */
export interface Revisions extends QueryPropBase {
  prop: 'revisions' | 'rv';

  /** Which properties to get for each revision */
  rvProp: Values<
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
  rvSlots?: AllValues | Values<'main'>;

  /**
   * Limit how many revisions will be returned.
   *
   * May only be used with a single page (mode #2).
   */
  rvLimit?: Limit;

  /**
   * Start enumeration from this revision's timestamp.
   * The revision must exist, but need not belong to this page.
   *
   * May only be used with a single page (mode #2).
   */
  rvStartId?: number;

  /**
   * Stop enumeration at this revision's timestamp.
   * The revision must exist, but need not belong to this page.
   *
   * May only be used with a single page (mode #2).
   */
  rvEndId?: number;

  /**
   * From which revision timestamp to start enumeration.
   *
   * May only be used with a single page (mode #2).
   */
  rvStart?: string;

  /**
   * Enumerate up to this timestamp.
   *
   * May only be used with a single page (mode #2).
   */
  rvEnd?: string;

  /**
   * In which direction to enumerate.
   *
   * May only be used with a single page (mode #2).
   */
  rvDir?: 'newer' | 'older';

  /**
   * Only include revisions made by user.
   *
   * May only be used with a single page (mode #2).
   */
  rvUser?: string;

  /**
   * Exclude revisions made by user.
   *
   * May only be used with a single page (mode #2).
   */
  rvExcludeUser?: string;

  /** Only list revisions tagged with this tag. */
  rvTag?: string;

  /** When more results are available, use this to continue. */
  rvContinue?: string;
}
