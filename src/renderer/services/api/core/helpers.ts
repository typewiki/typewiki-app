import omitBy from 'lodash-es/omitBy';
import isUndefined from 'lodash-es/isUndefined';
import mapKeys from 'lodash-es/mapKeys';
import isString from 'lodash-es/isString';

export function transformParams(params: Object) {
  const pickedData = omitBy(params, isUndefined);
  return mapKeys(pickedData, (v, k) => (isString(k) ? k.toLowerCase() : k));
}
