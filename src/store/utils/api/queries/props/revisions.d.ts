import { All, Limit, QueryPropBase, Values } from '../../query';

export interface Revisions extends QueryPropBase<'revisions' | 'rv'> {
  rvProp: Values<
    | 'ids'
    | 'flags'
    | 'timestamp'
    | 'user'
    | 'userid'
    | 'size'
    | 'slotsize'
    | 'sha1'
    | 'slotsha1'
    | 'contentmodel'
    | 'comment'
    | 'parsedcomment'
    | 'content'
    | 'tags'
    | 'roles'
  >;
  rvSlots?: All | Values<'main'>;
  rvLimit?: Limit;
  rvStartId?: number;
  rvEndId?: number;
  rvStart?: string;
  rvEnd?: string;
  rvDir?: 'newer' | 'older';
  rvUser?: string;
  rvExcludeUser?: string;
  rvTag?: string;
  rvContinue?: string;
}
