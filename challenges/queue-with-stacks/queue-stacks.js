const { Stack, Node } = require('../stacks-and-queues/stacks-and-queues')

class PseudoQueue {
  constructor() {
    this.left = new Stack();
    this.right = new Stack();
  }

  enqueue(value) {
    const node = new Node(value);

    if(!this.left.top && !this.right.top) {
      this.left.top = node;
      this.right.top = node;
    }
    else {
      let left = this.left.top;
      let right = this.right.top;

      while(left.next && right.next) {
        left = left.next;
        right = right.next;
      }

      left.next = node;
      right.next = node;
    }
  }

  dequeue() {
    let left = this.left.top;
    let right = this.right.top;

    if(!left && !right) {
      return null;
    }
    else {
      const value = this.right.top.value;

      this.right.top = this.right.top.next;
      this.left.top = this.left.top.next;

      return value;
    }
  }
}

module.exports = {
  PseudoQueue
};