import {
  AllMessages,
  AuthManagerInfo,
  Babel,
  FeatureUsage,
  FileRepoInfo,
  GlobalPreferences,
  GlobalRenameStatus,
  GlobalUserInfo,
  LanguageInfo,
  MessageGroupStats,
  MessageTranslations,
  Notifications,
  Oath,
  ReadingLists,
  SiteInfo,
  Tokens,
  UserInfo,
  Wikibase,
} from './meta';

export type QueryMeta =
  | AllMessages
  | AuthManagerInfo
  | Babel
  | FeatureUsage
  | FileRepoInfo
  | GlobalPreferences
  | GlobalRenameStatus
  | GlobalUserInfo
  | LanguageInfo
  | MessageGroupStats
  | MessageTranslations
  | Notifications
  | Oath
  | ReadingLists
  | SiteInfo
  | Tokens
  | UserInfo
  | Wikibase;
