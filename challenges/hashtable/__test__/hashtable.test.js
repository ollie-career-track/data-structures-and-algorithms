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
      const hashtable = new Hashtable;
      hashtable.add('name', 'ollie');
      
      expect(hashtable.arr[3][0]).toEqual(['name', 'ollie']);
    });

    it.only('can add multiple values to the hashtable', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      hashtable.add('eyes', 'brown');
      hashtable.add('tired', true);

      expect(hashtable.contains('name')).toBe(true);
      expect(hashtable.contains('eyes')).toBe(true);
      expect(hashtable.contains('tired')).toBe(true);
    });

    it('can handle a collision by overwriting value assigned to key', () => {

    });
  });

  describe('Get method', () => {
    it('returns value from a bucket in hashtable based on key', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      const result = hashtable.get('name');

      expect(result).toBe('ollie');
    });

    it('can retrieve a value from a bucket that has a collision', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      hashtable.add('name', 'not ollie');

      console.log(hashtable.arr);

      const result = hashtable.get('name');
      expect(result).toBe('not ollie');
    });

    it('returns null for value not stored in hashtable', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      const result = hashtable.get('age');

      expect(result).toBe(null);
    });
  });

  describe('Contains method', () => {
    it('returns true for key stored in hashtable', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      const result = hashtable.contains('name');

      expect(result).toBe(true);
    });

    it('returns null for key not in hashtable', () => {
      const hashtable = new Hashtable;

      hashtable.add('name', 'ollie');
      const result = hashtable.contains('age');

      expect(result).toBe(false);
    });
  });

  describe('Hash method', () => {
    it('hashes a key to an in-range value', () => {
      const hashtable = new Hashtable;
      const key = hashtable.hash('key');

      expect(key < 19).toBe(true);
      expect(key > -1).toBe(true);
    });
  });
});