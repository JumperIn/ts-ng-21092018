import { isInArray } from './homework-1';
import { summator } from './homework-1';
import { getUnique } from './homework-1';
import { toMatrix } from './homework-1';

import {} from 'jasmine';


describe('test functions ', () => {
    it('isInArray should work', () => {
        const source = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
        const other1 = [1, 5, 'b'];
        const other2 = [6, 2, 'd'];

        const result1 = isInArray(source, ...other1);
        expect(result1)
            .toBeTruthy();

        const result2 = isInArray(source, ...other2);
        expect(result1)
            .toBeFalsy();
    });
});

describe('test functions ', () => {
    it('summator should return sum of number', () => {
        const numberArgs = [1, 5, 10, 2, 4];
        const numberResult = summator(...numberArgs);
        expect(numberResult)
            .toEqual(22);
    });

    it('summator should return string', () => {
        const stringArgs = ['Привет', ' ', 'всем в этом ', 'чатике!'];
        const stringResult = summator(...stringArgs);
        expect(stringResult)
            .toEqual('Привет всем в этом чатике!');
    });
});

describe('test functions ', () => {
    it('getUnique should return array of unique value', () => {
        const source = [1, 5, 10, 2, 4, 3, 2, 1, 24];
        const result = getUnique(...source);
        expect(result)
            .toEqual([1, 5, 10, 2, 4, 3, 24]);
    });
});

describe('test functions ', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rowSize1 = 5;
    const rowSize2 = 3;

    it(`toMatrix should return array of array where row size = ${rowSize1}`, () => {
        const result1 = toMatrix(data, rowSize1);
        expect(result1)
            .toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
    });

    it(`toMatrix should return array of array where row size = ${rowSize1}`, () => {
        const result2 = toMatrix(data, rowSize2);
        expect(result2)
            .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });
});