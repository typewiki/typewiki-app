import { Values, QueryPropBase } from '../../query';

export interface Info extends QueryPropBase<'info' | 'in'> {
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
  inTestActions: Values<string>;
  inTestActionsDetail?: Values<'boolean' | 'full' | 'quick'>;
  inContinue?: string;
}
