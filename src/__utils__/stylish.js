const stylish = (diff) => {
  const stylished = diff.map((obj) => {
    const {
      key, value, newValue, oldValue, type,
    } = obj;
    switch (type) {
      case 'added':
        return `  + ${key}: ${value}`;
      case 'deleted':
        return `  - ${key}: ${value}`;
      case 'unchanged':
        return `    ${key}: ${value}`;
      case 'changed':
        return `  - ${key}: ${oldValue}\n  + ${key}: ${newValue}`;
      default:
        throw new Error(`Type '${type}' is not supported.`);
    }
  }).join('\n');
  return `{\n${stylished}\n}`;
};

export default stylish;
