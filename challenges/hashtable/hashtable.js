module.exports = class Hashtable {
  constructor(buckets = 20) {
    this.hashSize = buckets;
    this.arr = new Array(buckets).fill([]);
  }

  add(key, value) {
    const index = this.hash(key);
    this.arr[index] = [[key, value]];
  }

  get(key) {
    const bucket = this.arr[this.hash(key)];
    
    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        return (bucket[i][1]);
      }
    }
    return null;
  }

  contains(key) {
    const bucket = this.arr[this.hash(key)];

    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  hash(key) {
    return key.split('')
      .reduce((acc, letter, i) => {
        return acc += letter.charCodeAt(0) + i;
      }, 0)
      % this.hashSize;
  }
};