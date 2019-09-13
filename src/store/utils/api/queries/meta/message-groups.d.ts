import { QueryMetaBase, Values } from '../../query';

/**
 * Return information about message groups.
 * Note that the uselang parameter affects the output
 * of language dependent parts.
 */
export interface MessageGroups extends QueryMetaBase {
  meta: 'messagegroups' | 'mg';

  /**
   * When using the tree format, limit the depth to this many levels.
   * Value 0 means that no subgroups are shown. If the limit is reached,
   * the output includes a "groupcount" value,
   * which states the number of direct children..
   */
  mgDepth?: number;

  /**
   * Only return messages with IDs that match one or more of the inputs given
   * (case-insensitive, separated by pipes, * wildcard).
   */
  mgFilter?: Values<string>;

  /**
   * In the tree format message groups can exist in multiple places in the tree.
   */
  mgFormat?: Values<'flat', 'tree'>;

  /**
   * Preferred size of rasterised group icon.
   */
  mgIconSize?: number;

  /**
   * What translation-related information to get.
   */
  mgProp?: Values<
    | 'id'
    | 'label'
    | 'description'
    | 'class'
    | 'namespace'
    | 'exists'
    | 'icon'
    | 'priority'
    | 'prioritylangs'
    | 'priorityforce'
    | 'workflowstates'
  >;

  /**
   * When using the tree format, instead of starting from top level start
   * from the given message group, which must be an aggregate message group.
   * When using flat format only the specified group is returned.
   */
  mgRoot?: string;
}
