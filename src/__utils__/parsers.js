import yaml from 'js-yaml';

const getParcedData = (data, ext) => {
  const extension = ext.slice(1);
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Extension ${ext} is not supported.`);
  }
};

export default getParcedData;
