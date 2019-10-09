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

  describe('Stack pop method', () => {
    it('pops node off top of stack', () => {
      // const stack = new Stack;

      // stack.push(0);
      // stack.push(1);
      // stack.push(2);

      // console.log(stack);
    
      // stack.pop();
      // console.log(stack);

      // expect(stack.top).toBe(1);
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

    });

    it('can add multiple nodes to back of queue', () => {

    });
  });

  describe('Queue enqueue method', () => {
    it('removes node from front of queue', () => {

    });

    it('can empty a queue', () => {

    });
  });

  describe('Queue peek method', () => {
    it('returns value of node in front', () => {

    });
  });
});