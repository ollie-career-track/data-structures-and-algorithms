function insertShiftArray(array, value) {
  let newArray = [value];

  for(let i = 0; i < array.length; i++) {
    newArray[(i + 1)] = array[i];
  }
  
  return newArray;
}

module.exports = { insertShiftArray };