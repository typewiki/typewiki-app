import { Limit, QueryPropBase, Values } from '../query';

/** Returns file information and upload history. */
export interface ImageInfo extends QueryPropBase {
  prop: 'imageinfo' | 'ii';

  /** Which file information to get. */
  iiProp: Values<
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
  >;

  /** How many file revisions to return per file. */
  iiLimit?: Limit;

  /** Timestamp to start listing from. */
  iiStart?: string;

  /** Timestamp to stop listing at. */
  iiEnd?: string;

  /**
   * If iiprop=url is set, a URL to an image scaled to this width will be returned.
   * For performance reasons if this option is used,
   * no more than 50 scaled images will be returned. */
  iiUrlWidth: number;

  /** Similar to iiurlwidth. */
  iiUrlHeight?: number;

  /**
   * Version of metadata to use.
   * If latest is specified, use latest version.
   * Defaults to 1 for backwards compatibility.
   */
  iiMetadataVersion?: number;

  /**
   * What language to fetch extmetadata in.
   * This affects both which translation to fetch, if multiple are available,
   * as well as how things like numbers and various values are formatted.
   */
  iiExtMetadataLanguage?: string;

  /**
   * If translations for extmetadata property are available, fetch all of them.
   */
  iiExtMetadataMultiLang?: boolean;

  /**
   * If specified and non-empty,
   * only these keys will be returned for iiprop=extmetadata.
   */
  iiExtMetadataFilter?: Values<string>;

  /**
   * A handler specific parameter string. For example, PDFs might use page15-100px.
   * iiurlwidth must be used and be consistent with iiurlparam.
   */
  iiUrlParam?: string;

  /**
   * If badfilecontexttitleprop=badfile is set,
   * this is the page title used when evaluating the MediaWiki:Bad image list
   */
  iiBadFileContextTitle?: string;

  /** When more results are available, use this to continue. */
  iiContinue?: string;

  /** Look only for files in the local repository. */
  iiLocalOnly?: boolean;
}
