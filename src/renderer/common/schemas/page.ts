import { schema } from 'normalizr';
import { revisionSchema } from './revision';

export const pageSchema = new schema.Entity(
  'page',
  {
    revisions: [revisionSchema]
  },
  {
    idAttribute: 'pageid',
  }
);