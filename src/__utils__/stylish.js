import _ from 'lodash';

const stylish = (diff) => {
  const stylished = diff.map((obj) => {
    const {
      key, value, newValue, oldValue, type,
    } = obj;
    const str1 = `  - ${key}: ${oldValue}`;
    const str2 = `  + ${key}: ${newValue}`;
    switch (type) {
      case 'added':
        return `  + ${key}: ${value}`;
      case 'deleted':
        return `  - ${key}: ${value}`;
      case 'unchanged':
        return `    ${key}: ${value}`;
      case 'changed':
        return `${str1}\n${str2}`;
      default:
        throw new Error(`Type '${node.type}' is not supported.`);
    }

  })._.sortBy(stylished, key).join('\n');
  return `{\n${stylished}\n}`;
};

export default stylish;
