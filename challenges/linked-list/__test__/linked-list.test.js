const list = require('../linked-list');

describe('linked list', () => {

  it('creates an empty linked list upon instantiation', () => {
    const linkedList = new list.LinkedList(null, 0);
    expect(linkedList).toEqual({ head: null, size: 0 });
  });

  it('inserts a new node at beginning of list', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('first node');

    expect(linkedList.head).toEqual({ head: 'first node', size: 1 });
  });
  
  it('head property points to first node in list', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('this is the head');
  
    expect(linkedList.head).toEqual('this is the head');
  });
  
  it('can insert multiple nodes into list', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('first node');
    linkedList.insert('second node');
    linkedList.insert('third node');
    
    expect(linkedList.head).toEqual('third node');
    expect(linkedList.size).toBe(3);
  });

  it('returns true for value that exists within list', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('true value');
    linkedList.insert('another value');
    
    const value = 'true value';
    expect(linkedList.includes(value)).toBe(true);
  });
  
  it('returns false for value that is noexistent in list', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('true value');
    linkedList.insert('another value');
    
    const value = 'nonexistent value';
    expect(linkedList.includes(value)).toBe(false);
  });
  
  it('returns all values in list as string', () => {
    const linkedList = new list.LinkedList(null, 0);
    linkedList.insert('first value');
    linkedList.insert('second value');

    expect(linkedList.toString()).toBe('second value first value');
  });
});