import _ from 'lodash';

const genDiff = () => {
    const file1 = {
        "host": "hexlet.io",
        "timeout": 50,
        "proxy": "123.234.53.22",
        "follow": false
      };
    const file2 = {
        "timeout": 20,
        "verbose": true,
        "host": "hexlet.io"
      };
    const keysData1 = Object.keys(file1);
    const keysData2 = Object.keys(file2);
    const keys = _.sortBy(_.uniq([...keysData1, ...keysData2]));
    return keys.map((key) => {
        if (!Object.hasOwn(file1, key)) {
            return `+ ${key}: ${file2[key]}`;
          }
        if (!Object.hasOwn(file2, key)) {
            return `- ${key}: ${file1[key]}`;
          }
        if (_.isEqual(file1[key], file2[key])) {
            return `  ${key}: ${file1[key]}`;
          }
        return `- ${key}: ${file1[key]} \n +${key}: ${file2[key]}`;
    })
};

console.log(genDiff());