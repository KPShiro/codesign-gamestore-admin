import { randomizeString } from './randomize-string';

describe('randomizeString', () => {
    it('should return string of specified length when valid length provided', () => {
        const length = 8;
        const result = randomizeString(length);
        expect(result).toHaveLength(length);
        expect(typeof result).toBe('string');
    });

    it('should return empty string when length is 0', () => {
        expect(() => randomizeString(0)).toThrowError();
    });

    it('should throw error when length is negative', () => {
        expect(() => randomizeString(-5)).toThrowError();
    });
});
