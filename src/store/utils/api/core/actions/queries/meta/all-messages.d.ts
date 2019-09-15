import { AllValues, QueryMetaBase, Values } from '../../query';

/** Return messages from this site. */
export interface AllMessages extends QueryMetaBase {
  meta: 'allmessages' | 'am';

  /** Which messages to output. * (default) means all messages. */
  amMessages: AllValues | Values<string>;

  /** Which properties to get. */
  amProp: Values<string>;

  /**
   * Set to enable parser, will preprocess the wikitext of message
   * (substitute magic words, handle templates, etc.).
   */
  amEnableParser: boolean;

  /** If set, do not include the content of the messages in the output. */
  amNoContent: boolean;

  /**
   * Also include local messages, i.e. messages that don't exist in the software
   * but do exist as in the MediaWiki namespace. This lists all MediaWiki-namespace
   * pages, so it will also list those that aren't really messages such as Common.js.
   */
  amIncludeLocal: boolean;

  /** Arguments to be substituted into message. */
  amArgs: Values<string>;

  /** Return only messages with names that contain this string. */
  amFilter: string;

  /** Return only messages in this customisation state.  */
  amCustomised: 'all' | 'modified' | 'unmodified';

  /** Return messages in this language. */
  amLang: string;

  /** Return messages starting at this message. */
  amFrom: string;

  /** Return messages ending at this message. */
  amTo: string;

  /** Page name to use as context when parsing message (for amenableparser option). */
  amTitle?: string;

  /** Return messages with this prefix. */
  amPrefix?: string;
}
