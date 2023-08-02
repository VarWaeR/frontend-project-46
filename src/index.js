import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';
import stylish from './stylish.js';

const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = readFileSync(filePath, 'utf-8');
  return data;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getFileText(filepath1);
  const data2 = getFileText(filepath2);
  const parcedData1 = JSON.parse(data1);
  const parcedData2 = JSON.parse(data2);
  const keys = _.sortBy(_.union(_.keys(parcedData1), _.keys(parcedData2)));
  const diff = keys.map((key) => {
    if (!Object.hasOwn(parcedData1, key)) {
      return { key, type: 'added', value: parcedData2[key] };
    }
    if (!Object.hasOwn(parcedData2, key)) {
      return { key, type: 'deleted', value: parcedData1[key] };
    }
    if (parcedData1[key] !== parcedData2[key]) {
      return {
        key, type: 'changed', oldValue: parcedData1[key], newValue: parcedData2[key],
      };
    }
    return { key, type: 'unchanged', value: parcedData1[key] };
  });

  return stylish(diff);
};

export default genDiff;
