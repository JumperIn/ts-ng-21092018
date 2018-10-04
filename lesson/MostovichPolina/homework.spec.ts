import { isInArray } from './homework';
import { summator } from './homework';
import { getUnique } from './homework';
import { toMatrix } from './homework';

describe('test functions ', () => {
    it('isInArray should work', () => {
        const result = isInArray([1, 4, 5], 1, 4, 5);
        expect(result)
            .toEqual(true);
    });
});

describe('test functions ', () => {
    it('summator should return 6', () => {
        const result = summator(1, 2, 3);
        expect(result)
            .toEqual(6);
    });
});

describe('test functions ', () => {
    it('summator should return 6', () => {
        const result = getUnique('a', 1, 'a', 2, '1');
        expect(result)
            .toEqual(['a', 1, 2, '1']);
    });
});
describe('test functions ', () => {
    it('summator should return 6', () => {
        const result = toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
        expect(result)
            .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });
});