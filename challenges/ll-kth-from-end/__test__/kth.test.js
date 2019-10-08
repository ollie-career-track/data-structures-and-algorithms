const { LinkedList } = require('../kth');

describe('Linked List kth from the end', () => {

  describe('kthFromEnd method', () => {
    it('finds where k is greater than length of list', () => {
      const list = new LinkedList;
      list.insert('head');

      expect(() => {
        list.kthFromEnd(100);
      }).toThrow('k cannot exceed size of list');
    });

    it('finds where k and length of list are the same', () => {
      const list = new LinkedList;
      list.insert('head');

      expect(() => {
        list.kthFromEnd(1);
      }).toThrow('k cannot be same size as list');
    });
    
    it('finds where k is not a positive integer', () => {
      const list = new LinkedList;
      list.insert('head');

      expect(() => {
        list.kthFromEnd(-8);
      }).toThrow('k cannot be a negative integer');
    });

    it('finds where linked list is size of one', () => {
      const list = new LinkedList;
      list.insert('head');

      expect(list.kthFromEnd(0)).toBe(list.head.value);
      expect(() => {
        list.kthFromEnd(8);
      }).toThrow('k cannot exceed size of list');
    });

    it('finds where k is in middle of list', () => {
      const list = new LinkedList;

      list.insert('head');
      list.append('middle');
      list.append('end');

      expect(list.kthFromEnd(1)).toBe('middle');
    });
  });
});