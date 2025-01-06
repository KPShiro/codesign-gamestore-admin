export const randomizeNumber = (min: number, max: number, type: 'int' | 'float' = 'int') => {
    if (min > max) {
        [min, max] = [max, min];
    }

    if (type === 'float') {
        return Math.random() * (max - min) + min;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};
