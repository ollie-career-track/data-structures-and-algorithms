const { Stack, Queue } = require('../stacks-and-queues');

describe('Stacks and Queues', () => {
  describe('Stack and Queue instantiation', () => {

    it('creates empty stack upon instantiation', () => {
      const stack = new Stack;
      expect(stack.top).toBe(null);
    });

    it('creates empty queue upon instantiation', () => {
      const queue = new Queue;
      expect(queue.front).toBe(null);
    });
  });
  
  describe('Stack push method', () => {
    it('pushes onto top of stack', () => {
      const stack = new Stack;
      stack.push('top');

      expect(stack.top.value).toBe('top');
    });

    it('can push multiple nodes onto top of stack', () => {
      const stack = new Stack;

      stack.push(0);
      stack.push(1);
      stack.push(2);

      expect(stack.top.value).toBe(2);
    });
  });

  describe.skip('Stack pop method', () => {
    it('pops node off top of stack', () => {
      const stack = new Stack;

      stack.push('A');
      stack.push('B');
      stack.push('C');
      
      expect(stack.pop()).toBe('C');
      expect(stack.top.value).toBe('B');
    });

    it('can empty a stack of nodes', () => {
  
    });
  });

  describe('Stack peek method', () => {
    it('returns the next value in the stack', () => {
      const stack = new Stack;
      stack.push('top');

      expect(stack.peek()).toBe('top');
    });
  });

  describe('Queue enqueue method', () => {
    it('adds a node to back of queue', () => {
      const queue = new Queue;
      queue.enqueue('front');

      expect(queue.front.value).toBe('front');
    });

    it('can add multiple nodes to back of queue', () => {
      const queue = new Queue;

      queue.enqueue('front');
      queue.enqueue('middle');
      queue.enqueue('back');

      expect(queue.front.value).toBe('front');
      expect(queue.front.next.value).toBe('middle');
      expect(queue.front.next.next.value).toBe('back');
    });
  });

  describe('Queue dequeue method', () => {
    it('removes node from front of queue', () => {

    });

    it('can empty a queue', () => {

    });
  });

  describe('Queue peek method', () => {
    it('returns value of node in front', () => {
      const queue = new Queue;
      queue.enqueue('front');

      expect(queue.peek()).toBe('front');
    });
  });
});