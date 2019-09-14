import { QueryBase } from '../query';

/**
 * Shows per-page pageview data
 * (the number of daily pageviews for each of the last pvipdays days).
 * The result format is page title (with underscores) => date (Ymd) => count.
 */
export interface PageViews extends QueryBase {
  prop?: 'pageviews' | 'pvip';

  /**
   * The metric to use for counting views.
   * Depending on what backend is used, not all metrics might be supported.
   * You can use the siteinfo API (action=query&meta=siteinfo) to check,
   * under pageviewservice-supported-metrics / <module name>
   */
  pvIpMetric?: 'pageviews';

  /** The number of days to show. */
  pvIpDays?: number;

  /** When more results are available, use this to continue. */
  pvIpContinue?: string;
}
