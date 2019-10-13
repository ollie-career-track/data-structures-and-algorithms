const { Stack, Node } = require('../stacks-and-queues/stacks-and-queues')

class PseudoQueue {
  constructor() {
    this.left = new Stack();
    this.right = new Stack();
  }

  enqueue(value) {
    const node = new Node(value);

    if(!this.left.top) {
      this.left.top = node;
    }
    else {
      let current = this.left.top;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  dequeue() {

  }
}

module.exports = {
  PseudoQueue
};