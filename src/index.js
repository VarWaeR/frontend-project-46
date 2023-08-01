import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';

console.log('started')

const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = readFileSync(filePath, 'utf-8');
  return data;
};

const genDiff = (filepath1, filepath2) => {
  console.log('started');
  const data1 = getFileText(filepath1);
  const data2 = getFileText(filepath2);
  console.log('data step complit');
  const keysData1 = Object.keys(data1);
  const keysData2 = Object.keys(data2);
  console.log('keys step complit');
  const result = {};
  console.log('result step complit');
  const keys = _.sortBy(_.uniq([...keysData1, ...keysData2]));
  keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return result[key] = 'added';
    }
    if (!Object.hasOwn(data2, key)) {
      return result[key] = 'deleted';
    }
    if (data1[key] !== data2[key]) {
      return result[key] = 'changed';
    }
    console.log(key)
    return result[key] = 'unchanged';
  });
  console.log('before end step complit');
  return result;
};

export default genDiff;
