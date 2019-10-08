const { LinkedList } = require('../insertions');

describe('linked list insertions', () => {
  
  describe('append method', () => {
    it('adds a new node to end of list', () => {
      const list = new LinkedList;
      list.insert('second');
      list.insert('first');

      list.append('third');

      expect(list.size).toBe(3);
      expect(list.head.next.next.value).toEqual('third');
    });

    it('adds multiple nodes to end of list', () => {
      const list = new LinkedList;
      list.insert(0);

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.size).toBe(4);
      expect(list.head.next.value).toBe(1);
      expect(list.head.next.next.value).toBe(2);
      expect(list.head.next.next.next.value).toBe(3);
    });
  });

  describe('insertBefore method', () => {
    it('inserts a node before a node in middle of list', () => {
      const list = new LinkedList;
      list.insert('after head');
      list.insert('head');

      list.insertBefore('after head', 'new value');

      expect(list.size).toBe(3);
      expect(list.head.next.value).toBe('new value');
    });

    it('inserts a node before first node of linked list', () => {
      const list = new LinkedList;
      list.insert('after head');
      list.insert('head');

      list.insertBefore('head', 'new head');

      expect(list.size).toBe(3);
      expect(list.head.value).toEqual('new head');
    });
  });

  describe('insertAfter method', () => {
    it('inserts a node in middle of list', () => {
      const list = new LinkedList;
      list.insert('after head');
      list.insert('head');

      list.insertAfter('head', 'new value');

      expect(list.size).toBe(3);
      expect(list.head.next.value).toBe('new value');
    });

    it('inserts a node after last node in list', () => {
      const list = new LinkedList;
      list.insert('last');
      list.insert('head');

      list.insertAfter('last', 'new value');

      expect(list.size).toBe(3);
      expect(list.head.next.next.value).toBe('new value');
    });
  });
});