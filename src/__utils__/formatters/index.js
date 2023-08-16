import stylish from './stylish.js';
import json from './json.js';

const getFormatData = (diff, formatName = 'stylish') => {
  switch (formatName) {
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error(`Format '${formatName}' is not suppported.`);
  }
};

export default getFormatData;
