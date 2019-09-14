import { QueryMetaBase, Values } from '../query';

/** Retrieve information about the current authentication status. */
export interface AuthManagerInfo extends QueryMetaBase {
  meta: 'authmanagerinfo' | 'ami';

  /**
   * Test whether the user's current authentication status is sufficient
   * for the specified security-sensitive operation.
   */
  amiSecuritySensitiveOperation: string;

  /** Merge field information for all authentication requests into one array. */
  amiMergeRequestFields: boolean;

  /** Format to use for returning messages. */
  amiMessageFormat?: Values<'html', 'wikitext', 'raw', 'none'>;
}
