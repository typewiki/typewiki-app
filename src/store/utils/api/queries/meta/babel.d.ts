import { QueryMetaBase } from '../../query';

/** Get information about what languages the user knows */
export interface Babel extends QueryMetaBase {
  meta: 'babel' | 'bab';

  /** User to get information about */
  babUser: string;
}
