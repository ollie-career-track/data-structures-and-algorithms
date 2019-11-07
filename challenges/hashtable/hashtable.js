module.exports = class Hashtable {
  constructor(buckets = 20) {
    this.hashSize = buckets;
    this.arr = new Array(buckets).fill([]);
  }

  add(key, value) {
    return key + value;
    // hash key
    // add key and value to table
      // handles collisions
  }

  get(key) {
    return key;
    // returns value from table
  }

  contains(key) {
    return key;
    // returns boolean 
      // true if key is in table
      // false if key is not in table
  }

  // returns index in collection
  hash(key) {
    return key.split('')
      .reduce((acc, letter, i) => {
        return acc += letter.charCodeAt(0) + i;
      }, 0)
      % this.hashSize;
  }
};