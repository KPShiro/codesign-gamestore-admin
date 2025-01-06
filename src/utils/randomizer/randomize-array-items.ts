import { randomizeNumber } from './randomize-number';

export const randomizeArrayItem = <T = unknown>(array: T[]): T => {
    const randomIndex = randomizeNumber(0, array.length - 1);

    return array[randomIndex];
};

export const randomizeArrayItems = <T = unknown>(
    array: T[],
    firstIndex: number = 0,
    lastIndex: number = array.length
): T[] => {
    const elements = new Set<T>();
    const count = lastIndex - firstIndex;

    for (let i = 0; i < count; i++) {
        const randomIndex = randomizeNumber(firstIndex, lastIndex);
        elements.add(array[randomIndex]);
    }

    return [...elements];
};
