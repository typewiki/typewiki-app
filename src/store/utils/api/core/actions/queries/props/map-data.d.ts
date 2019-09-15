import { Limit, QueryPropBase } from '../../query';

/** Find all pages that link to the given pages. */
export interface MapData extends QueryPropBase {
  prop: 'mapdata' | 'mpd';

  /** Pipe-separated groups to return data for */
  mpdGroups: string;

  /** Data for how many pages to return. */
  mpdLimit: Limit;

  /** When more results are available, use this to continue. */
  mpdContinue: string;
}
