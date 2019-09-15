import { Limit, QueryPropBase, Values } from '../../query';

/** Returns all external URLs (not interwikis) from the given pages. */
export interface ExtLinks extends QueryPropBase {
  prop: 'extlinks' | 'el';

  /** How many links to return. */
  elLimit?: Limit;

  /** When more results are available, use this to continue. */
  elContinue?: string;

  /**
   * Protocol of the URL. If empty and elquery is set, the protocol is http.
   * Leave both this and elquery empty to list all external links.
   */
  elProtocol?: Values<
    | 'bitcoin'
    | 'ftp'
    | 'ftps'
    | 'geo'
    | 'git'
    | 'gopher'
    | 'http'
    | 'https'
    | 'irc'
    | 'ircs'
    | 'magnet'
    | 'mailto'
    | 'mms'
    | 'news'
    | 'nntp'
    | 'redis'
    | 'sftp'
    | 'sip'
    | 'sips'
    | 'sms'
    | 'ssh'
    | 'svn'
    | 'tel'
    | 'telnet'
    | 'urn'
    | 'worldwind'
    | 'xmpp'
  >;

  /**
   * Search string without protocol.
   * Useful for checking whether a certain page contains a certain external url.
   */
  elQuery?: string;

  /**
   * Expand protocol-relative URLs with the canonical protocol.
   */
  elExpandUrl?: boolean;
}
