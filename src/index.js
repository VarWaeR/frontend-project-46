import _ from 'lodash';
console.log('started')
const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = fs.readFileSync(filePath, 'utf-8');
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
    if (!Object.hasOwn(obj1, key)) {
      return result[key] = 'added';
    }
    if (!Object.hasOwn(obj2, key)) {
      return result[key] = 'deleted';
    }
    if (obj1[key] !== obj2[key]) {
      return result[key] = 'changed';
    }
    return result[key] = 'unchanged';
  });
  console.log('before end step complit');
  return result;
};

export default genDiff;