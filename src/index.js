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
  console.log(data1);
  const keysData1 = Object.keys(data1);
  const keysData2 = Object.keys(data2);
  console.log(keysData1);
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
    console.log(key)
    return result[key] = 'unchanged';
  });
  console.log('before end step complit');
  return result;
};

export default genDiff;
