const { LinkedList } = require('../../ll-kth-from-end/kth');
const mergeLists = require('../ll-merge');

describe('Linked List Merge Lists function', () => {
  describe('mergeLists function', () => {
    it('Merges two linked lists', () => {
      const one = new LinkedList;
      one.insert('head one');
      one.append('middle one');
      one.append('end one');

      const two = new LinkedList;
      two.insert('head two');
      two.append('middle two');
      two.append('end two');

      const zipped = mergeLists(one, two);
      expect(zipped).toBeDefined();
    });

    it('It returns a reference to the head of the zipped list', () => {
      const one = new LinkedList;
      one.insert('head one');
      one.append('end one');

      const two = new LinkedList;
      two.insert('head two');
      two.append('end two');

      const zipped = mergeLists(one, two);
      expect(zipped).toEqual({ 'next': { 'next': { 'next': { 'next': null, 'value': 'end two' }, 'value': 'end one' }, 'value': 'head two' }, 'value': 'head one' });
    });

    it('merges two linked lists of different lengths', () => {
      const one = new LinkedList;
      one.insert('head one');
      one.append('middle one');
      one.append('end one');

      const two = new LinkedList;
      two.insert('head two');
      two.append('end two');

      const zipped = mergeLists(one, two);
      expect(zipped).toEqual({ 'next': { 'next': { 'next': { 'next': { 'next': null, 'value': 'end one' }, 'value': 'end two' }, 'value': 'middle one' }, 'value': 'head two' }, 'value': 'head one' });
    });
  });
});