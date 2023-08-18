import stylish from './stylish.js';
import json from './json.js';
import plain from './plain.js';

const getFormatData = (diff, formatName) => {
  switch (formatName) {
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    default:
      throw new Error(`Format '${formatName}' is not supported.`);
  }
};

export default getFormatData;
