import _ from 'lodash';

const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  return data;
};

const genDiff = (filepath1, filepath2) => {

  const data1 = getFileText(filepath1);
  const data2 = getFileText(filepath2);

  const obj1 = getFileData(data1, extension1);
  const obj2 = getFileData(data2, extension2);

  return makeTree(obj1, obj2);

};


const genDiff = (filepath1, filepath2) => {

  const data1 = getFileText(filepath1);
  const data2 = getFileText(filepath2);

  const keysData1 = Object.keys(data1);
  const keysData2 = Object.keys(data2);

  const result = {};

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
  return result;
};

export default genDiff;
export default genDiff;