const shift = require('../array-shift');

describe('adds value to beginning of array', () => {
  const array = [2, 4, 6, 8];
  const value = 5;
  const anotherArray = [4, 8, 25, 23, 42];
  const anotherValue = 16;
  const strArr = ['are', 'a', 'few', 'strings'];
  const strVal = 'these';

  it('values', () => {
    expect(shift.insertShiftArray(array, value)).toEqual([5, 2, 4, 6, 8]);
  });

  it('values', () => {
    expect(shift.insertShiftArray(anotherArray, anotherValue)).toEqual([16, 4, 8, 25, 23, 42]);
  });
  
  it('values', () => {
    expect(shift.insertShiftArray(strArr, strVal)).toEqual(['these', 'are', 'a', 'few', 'strings']);
  });
});