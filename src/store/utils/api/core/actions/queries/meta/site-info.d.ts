import { QueryMetaBase, Values } from '../../query';

/** Return general information about the site */
export interface SiteInfo extends QueryMetaBase {
  meta: 'siteinfo' | 'si';

  /** Which information to get: */
  siProp?: Values<
    | 'general'
    | 'namespaces'
    | 'namespacealiases'
    | 'specialpagealiases'
    | 'magicwords'
    | 'interwikimap'
    | 'dbrepllag'
    | 'statistics'
    | 'usergroups'
    | 'libraries'
    | 'extensions'
    | 'fileextensions'
    | 'rightsinfo'
    | 'restrictions'
    | 'languages'
    | 'languagevariants'
    | 'skins'
    | 'extensiontags'
    | 'functionhooks'
    | 'showhooks'
    | 'variables'
    | 'protocols'
    | 'defaultoptions'
    | 'uploaddialog'
  >;

  /** Return only local or only nonlocal entries of the interwiki map. */
  siFilterIw: Values<'local' | '!local'>;

  /** List all database servers, not just the one lagging the most. */
  siShowAllDb?: boolean;

  /** Lists the number of users in user groups. */
  siNumberInGroup?: boolean;

  /** Language code for localised language names (best effort) and skin names. */
  siInLanguageCode?: boolean;
}
