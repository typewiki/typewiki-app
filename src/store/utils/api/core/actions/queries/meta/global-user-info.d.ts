import { QueryMetaBase, Values } from '../../query';

/** Show information about a global user. */
export interface GlobalUserInfo extends QueryMetaBase {
  meta: 'globaluserinfo' | 'gui';

  /**
   * User to get information about. If guiuser and guiid both are omitted,
   * it defaults to the current user.
   */
  guiUser: string;

  /**
   * Global user ID to get information about. If guiuser and guiid both are omitted,
   * it defaults to the current user.
   */
  guiId: number;

  /** Which properties to get */
  guiProp: Values<'groups' | 'rights' | 'merged' | 'unattached' | 'editcount'>;
}
