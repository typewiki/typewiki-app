import omitBy from 'lodash-es/omitBy';
import isUndefined from 'lodash-es/isUndefined';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import mapKeys from 'lodash-es/mapKeys';

export const transformParams = (params: any) => {
  const pickedData = omitBy(params, isUndefined);
  // TODO: refactoring
  mapKeys(pickedData, (value, key) => {
    if (isArray(value)) {
      pickedData[key] = value.join('|');
    }
  });
  return mapKeys(pickedData, (v, k) => (isString(k) ? k.toLowerCase() : k));
};
