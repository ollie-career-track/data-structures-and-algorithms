const { LinkedList } = require('../linked-list');

describe('linked list', () => {

  describe('linked list', () => {
    it('creates an empty linked list', () => {
      const list = new LinkedList;
      expect(list.head).toBe(null);
      expect(list.size).toBe(0);
    });
  });

  describe('insert method', () => {
    it('adds node to beginning of list', () => {
      const list = new LinkedList;
      list.insert('random value');

      expect(list.size).toBe(1);
    });

    it('head property points to first node in linked list', () => {
      const pojo = {
        value: 'random value',
        next: null
      };
      
      const list = new LinkedList;
      list.insert('random value');

      expect(list.head).toEqual(pojo);
    });

    it('can insert multiple nodes into linked list', () => {
      const list = new LinkedList;

      list.insert('first value');
      list.insert('second value');
      list.insert('third value');

      expect(list.size).toBe(3);
    });
  });

  describe('includes method', () => {
    it('returns true if search value exists in list', () => {
      const list = new LinkedList;

      list.insert('first value');
      list.insert('second value');
      list.insert('third value');

      expect(list.includes('second value')).toBe(true);
    });

    it('returns false if search value does not exist in list', () => {
      const list = new LinkedList;

      list.insert('first value');
      list.insert('second value');
      list.insert('third value');

      expect(list.includes('random value')).toBe(false);
    });
  });

  describe('toString method', () => {
    it('returns a string of all values in linked list', () => {
      const list = new LinkedList;

      list.insert(0);
      list.insert(1);

      expect(list.toString()).toBe('10');
    });
  });
});