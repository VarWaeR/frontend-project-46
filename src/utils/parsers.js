import yaml from 'js-yaml';

const getParcedData = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Extension ${extension} is not supported.`);
  }
};

export default getParcedData;
