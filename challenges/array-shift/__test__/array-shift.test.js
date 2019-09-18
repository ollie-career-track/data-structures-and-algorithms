const shift = require('../array-shift');


describe('adds value to beginning of array', () => {
  const array = [2, 4, 6, 8];
  const value = 5;

  it('values', () => {
    expect(shift.insertShiftArray(array, value)).toBe([5, 2, 4, 6, 8]);
  });
});