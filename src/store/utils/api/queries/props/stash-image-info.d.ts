import { AllValues, Direction, Limit, QueryPropBase, Values } from '../query';

/** Returns file information for stashed files. */
export interface StashImageInfo extends QueryPropBase {
  prop: 'stashimageinfo' | 'sii';

  /** Key that identifies a previous upload that was stashed temporarily. */
  siiFileKey: Values<string>;

  /** Which file information to get. */
  siiProp?: Values<
    | 'timestamp'
    | 'canonicaltitle'
    | 'url'
    | 'size'
    | 'dimensions'
    | 'sha1'
    | 'mime'
    | 'thumbmime'
    | 'metadata'
    | 'commonmetadata'
    | 'extmetadata'
    | 'bitdepth'
    | 'badfile'
  >;

  /**
   * If siiprop=url is set, a URL to an image scaled to this width will be returned.
   * For performance reasons if this option is used,
   * no more than 50 scaled images will be returned.
   */
  siiUrlWidth?: number;

  /** Similar to siiurlwidth. */
  siiUrlHeight: number;

  /**
   * A handler specific parameter string.
   * For example, PDFs might use page15-100px.
   * siiurlwidth must be used and be consistent with siiurlparam.
   */
  siiUrlParam?: string;
}
