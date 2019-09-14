import { QueryMetaBase, Values } from '../query';

/**
 * Shows sitewide pageview data
 * (daily pageview totals for each of the last pvisdays days).
 * The result format is date (Ymd) => count.
 */
export interface SiteViews extends QueryMetaBase {
  meta: 'siteviews' | 'pvis';

  /** Types of token to request. */
  pvisMetric?: Values<'pageviews', 'uniques'>;

  /** The number of days to show. */
  pvisDays?: number;
}
