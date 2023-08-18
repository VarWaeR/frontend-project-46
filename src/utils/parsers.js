import yaml from 'js-yaml';

const getExtension = (ext) => ext.slice(1);

const getParcedData = (data, ext) => {
  const extension = getExtension(ext);
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
