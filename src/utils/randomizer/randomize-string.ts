export const randomizeString = (length: number = 16) => {
    if (length <= 0) {
        throw new Error('Length has to be a positive number');
    }

    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
};
