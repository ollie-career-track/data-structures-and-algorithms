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
      const pq = new PseudoQueue;

      pq.enqueue('front');
      pq.enqueue('middle');
      pq.enqueue('back');

      expect(pq.left.top.value).toBe('front');
      expect(pq.left.top.next.value).toBe('middle');
      expect(pq.left.top.next.next.value).toBe('back');
    });
  });

  describe('PseudoQueue dequeue method', () => {
    it('removes a node from the front of pq', () => {
      const pq = new PseudoQueue;
      pq.enqueue('front');
      pq.enqueue('behind');

      const value = pq.dequeue();

      expect(pq.left.top.value).toBe('behind');
      expect(value).toBe('front');
    });

    it('can empty a pq of nodes', () => {

    });
  });
});