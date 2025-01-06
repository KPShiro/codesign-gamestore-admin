export const randomizeString = (length: number = 16) => {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
};
