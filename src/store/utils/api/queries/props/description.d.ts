import { QueryPropBase } from '../query';

/**
 * Get a short description a.k.a. subtitle explaining what the target page is about.
 *
 * The description is plain text, on a single line, but otherwise arbitrary
 * (potentially including raw HTML tags, which also should be interpreted as plain text).
 *
 * It must not be used in HTML unescaped!
 */
export interface Description extends QueryPropBase {
  prop: 'description' | 'desc';

  /** When more results are available, use this to continue. */
  descContinue: number;

  /** Which description source to prefer if present. */
  descPreferSource: 'local' | 'central';
}
