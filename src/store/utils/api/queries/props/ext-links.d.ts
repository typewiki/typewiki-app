import { Limit, QueryPropBase, Values } from '../../query';

export interface ExtLinks extends QueryPropBase {
  prop: 'extlinks' | 'el';
  elLimit?: Limit;
  elContinue?: string;
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
  elQuery?: string;
  elExpandUrl?: boolean;
}
