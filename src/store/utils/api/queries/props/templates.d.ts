import { Limit, QueryPropBase } from '../../query';

export interface Templates extends QueryPropBase<'templates' | 'tl'> {
  tlNamespace:
    | '*'
    | '-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 90, 91, 92, 93, 100, 101, 102, 103, 104, 105, 106, 107, 486, 487, 828, 829, 1198, 1199, 2300, 2301, 2302, 2303, 2600, 5500, 5501';
  tlLimit: Limit;
  tlContinue: string[];
  tlTemplates: string;
}