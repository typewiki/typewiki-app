import { Limit, QueryPropBase, Values } from '../../query';
import { Group } from '../../groups';
import { Right } from '../../rights';

/**
 * Get the list of logged-in contributors
 * and the count of anonymous contributors to a page.
 */
export interface Contributors extends QueryPropBase {
  prop: 'contributors' | 'pc';

  /**
   * Only include users in the given groups.
   * Does not include implicit
   * or auto-promoted groups like *, user, or autoconfirmed.
   */
  pcGroup?: Values<Group>;

  /**
   * Exclude users in the given groups.
   * Does not include implicit
   * or auto-promoted groups like *, user, or autoconfirmed.
   */
  pcExcludeGroup?: Values<Group>;

  /**
   * Only include users having the given rights.
   * Does not include rights granted by implicit
   * or auto-promoted groups like *, user, or autoconfirmed.
   */
  pcRights?: Values<Right>;

  /**
   * Exclude users having the given rights.
   * Does not include rights granted by implicit
   * or auto-promoted groups like *, user, or autoconfirmed.
   */
  pcExcludeRights?: Values<Right>;

  /** How many contributors to return. */
  pcLimit?: Limit;

  /** When more results are available, use this to continue. */
  pcContinue?: string;
}
