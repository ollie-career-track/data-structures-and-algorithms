const { LinkedList } = require('../kth');

describe('Linked List kth from the end', () => {

  describe('kthFromEnd method', () => {
    it.only('finds where k is greater than length of list', () => {
      const list = new LinkedList;
      list.insert('head');

      expect(() => {
        list.kthFromEnd(100);
      }).toThrow('k cannot exceed size of list');
    });

    it('finds where k and length of list are the same', () => {
      
    });
    
    it('finds where k is not a positive integer', () => {
      
    });

    it('finds where linked list is size of one', () => {
      
    });

    it('finds where k is in middle of list', () => {
    
    });

  });
});

// kthFromEnd(k)
// k = a number
// returns node value that is k from end of ll