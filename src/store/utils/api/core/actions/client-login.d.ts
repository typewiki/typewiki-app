import { ActionBase } from '../action-base';
import { Values } from './query';

/** Log in to the wiki using the interactive flow. */
export interface ClientLogin extends ActionBase {
  /**
   * Only use these authentication requests,
   * by the id returned from action=query&meta=authmanagerinfo
   * with amirequestsfor=login or from a previous response from this module.
   */
  loginRequests?: Values<string>;

  /** Format to use for returning messages. */
  loginMessageFormat?: 'html' | 'wikitext' | 'raw' | 'none';

  /**
   * Merge field information for all authentication requests into one array.
   */
  loginMergeRequestFields?: boolean;

  /**
   * Preserve state from a previous failed login attempt, if possible.
   */
  loginPreserveState?: boolean;

  /**
   * Return URL for third-party authentication flows, must be absolute.
   * Either this or logincontinue is required.
   */
  loginReturnUrl: string;

  /**
   * This request is a continuation after an earlier UI or REDIRECT response.
   * Either this or loginreturnurl is required.
   */
  loginContinue?: string;

  /** A "login" token retrieved from action=query&meta=tokens */
  loginToken?: string;

  // TODO: !
  username: string;
  password: string;
}
