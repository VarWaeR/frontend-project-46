import _ from 'lodash';

const stylish = (diff) => {
    const stylished = diff.map((obj) => {
        const {
            key, value, newValue, oldValue, type
        } = obj;
        switch(type) {
            case 'added':
                return `  + ${key}: ${value}`;
            case 'deleted':
                return `  - ${key}: ${value}`;
            case 'unchanged':
                return `    ${key}: ${value}`;
            case 'changed':
                return `  - ${key}: ${oldValue}\n  + ${key}: ${newValue}`;
        }
    })
    return _.sortBy(stylished, [key]);
}

export default stylish;