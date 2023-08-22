import { readFileSync } from 'fs';
import path from 'path';
import getParcedData from './utils/parsers.js';
import getBuiltDiff from './utils/getBuiltDiff.js';
import getFormatData from './utils/formatters/index.js';

const getFileText = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const data = readFileSync(filePath, 'utf-8');
  return data;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getFileText(filepath1).slice(1);
  const data2 = getFileText(filepath2).slice(1);

  const fileExtension1 = path.extname(filepath1);
  const fileExtension2 = path.extname(filepath2);

  const parcedData1 = getParcedData(data1, fileExtension1);
  const parcedData2 = getParcedData(data2, fileExtension2);

  const diff = getBuiltDiff(parcedData1, parcedData2);

  return getFormatData(diff, formatName);
};

export default genDiff;
