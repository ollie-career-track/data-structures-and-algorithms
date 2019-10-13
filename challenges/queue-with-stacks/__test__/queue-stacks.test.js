const { PseudoQueue } = require('../queue-stacks');

describe('Queue with Stacks PseudoQueue', () => {
  describe('Empty instantiation', () => {
    it('creates an empty pq', () => {
      const pq = new PseudoQueue;
      
      expect(pq.left.top).toBe(null);
      expect(pq.right.top).toBe(null);
    });
  });

  describe('PseudoQueue enqueue method', () => {
    it('adds a node to the back of the pq', () => {
      const pq = new PseudoQueue;
      pq.enqueue('front');

      expect(pq.left.top.value).toBe('front');
    });

    it('can add multiple nodes to the back', () => {

    });
  });

  describe('PseudoQueue dequeue method', () => {
    it('removes a node from the front of pq', () => {

    });

    it('removes node from front of queue', () => {

    });
  });
});