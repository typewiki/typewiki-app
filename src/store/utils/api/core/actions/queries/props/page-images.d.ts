import { Limit, QueryPropBase, Values } from '../../query';

/**
 * Returns information about images on the page,
 * such as thumbnail and presence of photos.
 */
export interface PageImages extends QueryPropBase {
  prop: 'pageimages' | 'pi';

  /** Pipe-separated groups to return data for */
  piProp: Values<'thumbnail' | 'name' | 'original'>;

  /** Maximum width in pixels of thumbnail images. */
  piThumbSize: number;

  /** Properties of how many pages to return. */
  piLimit: Limit;

  /** Limit page images to a certain license type */
  piLicense?: 'free' | 'any';

  /** When more results are available, use this to continue. */
  piContinue: string;
}
