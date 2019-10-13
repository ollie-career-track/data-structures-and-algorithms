const { Stack, Node } = require('../stacks-and-queues/stacks-and-queues')

class PseudoQueue {
  constructor() {
    this.left = new Stack();
    this.right = new Stack();
  }

  enqueue(value) {
    const node = new Node(value);

    return node;
  }

  dequeue() {

  }
}

module.exports = {
  PseudoQueue
};