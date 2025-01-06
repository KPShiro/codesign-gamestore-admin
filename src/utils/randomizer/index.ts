import { randomizeArrayItem, randomizeArrayItems } from './randomize-array-items';
import { randomizeNumber } from './randomize-number';
import { randomizeString } from './randomize-string';

export const Randomize = {
    number: randomizeNumber,
    string: randomizeString,
    arrayItem: randomizeArrayItem,
    arrayItems: randomizeArrayItems,
};
