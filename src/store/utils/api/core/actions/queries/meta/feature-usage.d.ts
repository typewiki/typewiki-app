import { QueryMetaBase, Values } from '../../query';

/** Get a summary of logged API feature usages for a user agent. */
export interface FeatureUsage extends QueryMetaBase {
  meta: 'featureusage' | 'afu';

  /** Start of date range to query. */
  afuStart: string;

  /** End of date range to query. */
  afuEnd: string;

  /** User agent to query. If not specified, the agent in the request will be queried. */
  afuAgent: string;

  /** If specified, return details on only these features. */
  afuFeatures: Values<string>;
}
