import { ActionType } from './action-type';
import { AllValues } from './actions/query';

export interface ActionBase {
  /** Which action to perform **/
  action: ActionType;

  /** The format of the output. */
  format?: 'json' | 'jsonfm' | 'none' | 'php' | 'phpfm' | 'rawfm' | 'xml' | 'xmlfm';

  /**
   * Maximum lag can be used when MediaWiki is installed
   * on a database replicated cluster. To save actions causing
   * any more site replication lag, this parameter can make
   * the client wait until the replication lag is less
   * than the specified value. In case of excessive lag,
   * error code maxlag is returned with a message like
   * Waiting for $host: $lag seconds lagged.
   *
   * See Manual: Maxlag parameter for more information.
   */
  maxLag?: number;

  /**
   * Set the s-maxage HTTP cache control header to this many seconds.
   * Errors are never cached.
   */
  sMaxAge?: number;

  /**
   * Set the max-age HTTP cache control header to this many seconds.
   * Errors are never cached.
   */
  maxAge?: number;

  /**
   * Verify the user is logged in if set to user,
   * or has the bot user right if bot.
   */
  assert?: 'user' | 'bot';

  /** Verify the current user is the named user. */
  assertUser?: string;

  /**
   * Any value given here will be included in the response.
   * May be used to distinguish requests.
   */
  requestId?: boolean;

  /** Include the hostname that served the request in the results. */
  servedBy?: boolean;

  /** Include the current timestamp in the result. */
  curTimestamp?: boolean;

  /** Include the languages used for uselang and errorlang in the result. */
  responseLangInfo?: boolean;

  /**
   * When accessing the API using a cross-domain AJAX request (CORS),
   * set this to the originating domain. This must be included in any pre-flight request,
   * and therefore must be part of the request URI (not the POST body).
   *
   * For authenticated requests, this must match one of the origins
   * in the Origin header exactly, so it has to be set to something
   * like https://en.wikipedia.org or https://meta.wikimedia.org.
   * If this parameter does not match the Origin header, a 403 response will be returned.
   * If this parameter matches the Origin header and the origin is whitelisted,
   * the Access-Control-Allow-Origin and Access-Control-Allow-Credentials
   * headers will be set.
   *
   * For non-authenticated requests, specify the value *.
   * This will cause the Access-Control-Allow-Origin header to be set,
   * but Access-Control-Allow-Credentials will be false and
   * all user-specific data will be restricted.
   */
  origin?: AllValues | string;

  /**
   * Language to use for message translations. action=query&meta=siteinfo
   * with siprop=languages returns a list of language codes,
   * or specify user to use the current user's language preference,
   * or specify content to use this wiki's content language.
   */
  useLang?: string;

  /**
   * Format to use for warning and error text output.
   */
  errorFormat?: 'plaintext' | 'wikitext' | 'html' | 'raw' | 'none' | 'bc';

  /**
   * Language to use for warnings and errors. action=query&meta=siteinfo
   * with siprop=languages returns a list of language codes,
   * or specify content to use this wiki's content language,
   * or specify uselang to use the same value as the uselang parameter.
   */
  errorLang?: string;

  /**
   * If given, error texts will use locally-customized messages
   * from the MediaWiki namespace.
   */
  errorsUseLocal?: boolean;

  /**
   * When accessing the API using a cross-domain AJAX request (CORS),
   * use this to authenticate as the current SUL user.
   *
   * Use action=centralauthtoken on this wiki to retrieve the token,
   * before making the CORS request. Each token may only be used once,
   * and expires after 10 seconds. This should be included in any pre-flight request,
   * and therefore should be included in the request URI (not the POST body).
   */
  centralAuthToken?: string;
}
