import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';

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
  console.log(data1);
  const keysData1 = Object.keys(parcedData1);
  const keysData2 = Object.keys(parcedData2);
  const result = {};
  const keys = _.sortBy(_.uniq([...keysData1, ...keysData2]));
  keys.map((key) => {
    if (!Object.hasOwn(keysData1, key)) {
      return result[key] = 'added';
    }
    if (!Object.hasOwn(keysData2, key)) {
      return result[key] = 'deleted';
    }
    if (keysData1[key] !== keysData2[key]) {
      return result[key] = 'changed';
    }
    return result[key] = 'unchanged';
  });
  return result;
};

export default genDiff;
