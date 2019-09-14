import { Values, QueryPropBase } from '../query';

/** Get basic page information. */
export interface Info extends QueryPropBase {
  prop: 'info' | 'in';

  /** Which additional properties to get */
  inProp: Values<
    | 'protection'
    | 'talkid'
    | 'watched'
    | 'watchers'
    | 'visitingwatchers'
    | 'notificationtimestamp'
    | 'subjectid'
    | 'url'
    | 'preload'
    | 'displaytitle'
    | 'varianttitles'
  >;

  /** Test whether the current user can perform certain actions on the page. */
  inTestActions: Values<string>;

  /**
   * Detail level for intestactions.
   * Use the main module's errorformat and errorlang parameters
   * to control the format of the messages returned.
   */
  inTestActionsDetail?: Values<'boolean' | 'full' | 'quick'>;

  /** When more results are available, use this to continue. */
  inContinue?: string;
}
