import { schema } from 'normalizr';

export const revisionSchema = new schema.Entity(
  'revisions',
  {},
  {
    idAttribute: 'revid'
  }
);
