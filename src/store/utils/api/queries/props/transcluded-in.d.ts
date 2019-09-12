import { All, Limit, QueryPropBase, Values } from '../../query';

export interface TranscludedIn extends QueryPropBase {
  prop: 'transcludedin' | 'ti';
  tiProp: Values<'pageid' | 'title' | 'redirect'>;
  tiNamespace:
    | All
    | Values<
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        90,
        91,
        92,
        93,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        486,
        487,
        828,
        829,
        1198,
        1199,
        2300,
        2301,
        2302,
        2303,
        2600,
        5500,
        5501
      >;
  tiShow: Values<'redirect' | '!redirect'>;
  tiLimit: Limit;
  tiContinue: string;
}
