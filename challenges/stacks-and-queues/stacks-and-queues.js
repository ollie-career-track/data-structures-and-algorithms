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

  // adds new node to top of stack
  push(value) {
    const node = new Node(value);

    if(!this.top) {
      this.top = node;
    }

    node.next = this.top;
    this.top = node;
  }

  // removes node from top of stack
  // returns value of removed node
  pop() {

  }

  // returns value of node on top of stack
  peek() {

  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  // adds node to back of queue
  enqueue(value) {
    return value;
  }

  // removes node from front of queue
  // returns value of removed node
  dequeue() {

  }

  // return value of node in front
  peek() {

  }
}

module.exports = {
  Node,
  Stack,
  Queue
};