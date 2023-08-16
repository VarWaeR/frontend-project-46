import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expected = readFileSync(path.resolve(process.cwd(), '__fixtures__/expected-json.txt'), 'utf-8');

const extensions = ['json', 'yml'];

test('flat files', () => {
  const file1 = getFixturePath(`file1.json`);
  const file2 = getFixturePath(`file2.json`);
  expect(genDiff(file1, file2)).toEqual(expected);
});
