const Hashtable = require('../hashtable');

describe('Hashtable class', () => {
  describe('Instantiation', () => {

    it('can instantiate an empty hashtable', () => {
      const hashtable = new Hashtable;
      expect(hashtable.arr.length).toBe(20);
    });
  });

  describe('Add method', () => {
    it('adds a value to the hashtable', () => {

    });

    it('can add multiple values to the hashtable', () => {

    });

    it('can handle a collision', () => {

    });
  });

  describe('Get method', () => {
    it('returns value from a bucket in hashtable based on key', () => {

    });

    it('can retrieve a value from a bucket that has a collision', () => {

    });

    it('returns null for value not stored in hashtable', () => {

    });
  });

  describe('Contains method', () => {
    it('returns true for key stored in hashtable', () => {

    });

    it('returns null for key not in hashtable', () => {

    });
  });

  describe('Hash method', () => {
    it.only('hashes a key to an in-range value', () => {
      const hashtable = new Hashtable;
      const key = hashtable.hash('key');

      expect(key < 21).toBe(true);
      expect(key > -1).toBe(true);
    });
  });
});