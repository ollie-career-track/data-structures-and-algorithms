const binary = require('../array-binary-search');

describe.skip('searches array for search key', () => { 
  const sortedArray = [4, 8, 15, 16, 23, 42];
  const searchKey = 15;	
  const anotherSortedArray = [11, 22, 33, 44, 55, 66, 77];
  const anotherSearchKey = 90;	

  it('returns index of search key', () => {
    expect(binary.binarySearch(sortedArray, searchKey)).toEqual(2);
  });

  it(`returns -1 if array doesn't contain search key`, () => { 
    expect(binary.binarySearch(anotherSortedArray, anotherSearchKey)).toEqual(-1);
  });
});