import { readFileSync } from 'fs';
import path from 'path';
import getParcedData from './__utils__/parsers.js';
import buildDiff from './__utils__/buildDiff.js';
import getFormatData from './__utils__/formatters/index.js';

const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = readFileSync(filePath, 'utf-8');
  return data;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getFileText(filepath1);
  const data2 = getFileText(filepath2);

  const fileExt1 = path.extname(filepath1);
  const fileExt2 = path.extname(filepath2);

  const parcedData1 = getParcedData(data1, fileExt1);  
  const parcedData2 = getParcedData(data2, fileExt2);

  const diff = buildDiff(parcedData1, parcedData2);

  return getFormatData(diff, formatName);
};

export default genDiff;
