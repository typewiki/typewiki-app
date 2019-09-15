import { QueryMetaBase, Values } from '../../query';

/**
 * Retrieve global preferences for the current user.
 * Can retrieve both global preferences and their local overrides.
 */
export interface GlobalPreferences extends QueryMetaBase {
  meta: 'globalpreferences' | 'gpr';

  /** Which prererences to include */
  gprProp: Values<'preferences' | 'localoverrides'>;
}
