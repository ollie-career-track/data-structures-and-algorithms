class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);

    if(!this.top) {
      this.top = node;
    }

    node.next = this.top;
    this.top = node;
  }

  pop() {
    return this.peek();
  }

  peek() {
    return this.top.value ? this.top.value : null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);
    let current = this.front;

    if(!current) {
      this.front = node;
    }
    else {
      while(current.next) {
        current = current.next;
      }
  
      current.next = node;
    }
  }

  // removes node from front of queue
  // returns value of removed node
  dequeue() {
    const node = this.peek();
    // let current = this.front;

    return node;
  }

  peek() {
    return this.front.value ? this.front.value : null;
  }
}

module.exports = {
  Node,
  Stack,
  Queue
};