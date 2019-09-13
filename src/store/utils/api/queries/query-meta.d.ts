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
  LanguageStats,
  LinterStats,
  MessageGroupStats,
  MessageGroups,
  MessageTranslations,
  Notifications,
  Oath,
  ReadingLists,
  SiteInfo,
  SiteViews,
  Tokens,
  UnreadNotificationPages,
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
  | LanguageStats
  | LinterStats
  | MessageGroupStats
  | MessageGroups
  | MessageTranslations
  | Notifications
  | Oath
  | ReadingLists
  | SiteInfo
  | SiteViews
  | Tokens
  | UnreadNotificationPages
  | UserInfo
  | Wikibase;
