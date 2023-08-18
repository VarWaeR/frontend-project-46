import _ from 'lodash';

const getBuiltDiff = (parcedData1, parcedData2) => {
  const keys = _.sortBy(_.union(_.keys(parcedData1), _.keys(parcedData2)));
  const diff = keys.map((key) => {
    if (!Object.hasOwn(parcedData1, key)) {
      return { key, type: 'added', value: parcedData2[key] };
    }
    if (!Object.hasOwn(parcedData2, key)) {
      return { key, type: 'deleted', value: parcedData1[key] };
    }
    if (_.isObject(parcedData1[key]) && _.isObject(parcedData2[key])) {
      return { key, type: 'nested', children: getBuiltDiff(parcedData1[key], parcedData2[key]) };
    }
    if (parcedData1[key] !== parcedData2[key]) {
      return {
        key, type: 'changed', oldValue: parcedData1[key], newValue: parcedData2[key],
      };
    }
    return { key, type: 'unchanged', value: parcedData1[key] };
  });

  return diff;
};

export default getBuiltDiff;
