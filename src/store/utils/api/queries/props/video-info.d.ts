import { Limit, QueryPropBase, Values } from '../../query';

/** Extends imageinfo to include video source (derivatives) information. */
export interface VideoInfo extends QueryPropBase {
  prop: 'videoinfo' | 'vi';

  /** Which file information to get. */
  viProp?: Values<
    | 'timestamp'
    | 'user'
    | 'userid'
    | 'comment'
    | 'parsedcomment'
    | 'canonicaltitle'
    | 'url'
    | 'size'
    | 'dimensions'
    | 'sha1'
    | 'mime'
    | 'thumbmime'
    | 'mediatype'
    | 'metadata'
    | 'commonmetadata'
    | 'extmetadata'
    | 'archivename'
    | 'bitdepth'
    | 'uploadwarning'
    | 'badfile'
    | 'derivatives'
    | 'timedtext'
  >;

  /** How many file revisions to return per file. */
  viLimit?: Limit;

  /** When more results are available, use this to continue. */
  tiContinue?: string;

  /** Timestamp to start listing from. */
  viStart?: string;

  /** Timestamp to stop listing at. */
  viEnd?: string;

  /**
   * If viprop=url is set, a URL to an image scaled to this width will be returned.
   * For performance reasons if this option is used,
   * no more than 50 scaled images will be returned. */
  viUrlWidth: number;

  /** Similar to iiurlwidth. */
  viUrlHeight?: number;

  /**
   * Version of metadata to use.
   * If latest is specified, use latest version.
   * Defaults to 1 for backwards compatibility.
   */
  viMetadataVersion?: number;

  /**
   * What language to fetch extmetadata in.
   * This affects both which translation to fetch, if multiple are available,
   * as well as how things like numbers and various values are formatted.
   */
  viExtMetadataLanguage?: string;

  /**
   * If translations for extmetadata property are available, fetch all of them.
   */
  viExtMetadataMultiLang?: boolean;

  /**
   * If specified and non-empty,
   * only these keys will be returned for iiprop=extmetadata.
   */
  viExtMetadataFilter?: Values<string>;

  /**
   * A handler specific parameter string. For example, PDFs might use page15-100px.
   * iiurlwidth must be used and be consistent with viurlparam.
   */
  viUrlParam?: string;

  /**
   * If badfilecontexttitleprop=badfile is set,
   * this is the page title used when evaluating the MediaWiki:Bad image list
   */
  viBadFileContextTitle?: string;

  /** When more results are available, use this to continue. */
  viContinue?: string;

  /** Look only for files in the local repository. */
  viLocalOnly?: boolean;
}
