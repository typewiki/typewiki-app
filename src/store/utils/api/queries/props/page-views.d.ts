import { QueryBase } from '../../query';

export interface PageViews extends QueryBase {
  prop?: 'pageviews' | 'pvip';
  pvIpMetric?: 'pageviews';
  pvIpDays?: number;
  pvIpContinue?: string;
}
