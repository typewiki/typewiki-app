import { QueryMetaBase } from '../../query';

/** Show information about global renames that are in progress. */
export interface GlobalRenameStatus extends QueryMetaBase {
  meta: 'globalrenamestatus' | 'grs';

  /** User that is being renamed. Can be either their old name or new name. */
  gprProp: string;
}
