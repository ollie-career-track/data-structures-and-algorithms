function binarySearch(sortedArray, searchKey) {
  let result;

  for(let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] === searchKey) {
      result = i;
    }
  }

  return result === undefined ? result = -1 : result;
}

module.exports = { binarySearch };