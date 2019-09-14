import { QueryMetaBase, Values } from '../query';

/** Return meta information about image repositories configured on the wiki. */
export interface FileRepoInfo extends QueryMetaBase {
  meta: 'filerepoinfo' | 'fri';

  /** Which repository properties to get (properties available may vary on other wikis). */
  friProp: Values<
    | 'canUpload'
    | 'descBaseUrl'
    | 'descriptionCacheExpiry'
    | 'displayname'
    | 'favicon'
    | 'fetchDescription'
    | 'initialCapital'
    | 'local'
    | 'name'
    | 'rootUrl'
    | 'scriptDirUrl'
    | 'thumbUrl'
    | 'url'
  >;
}
