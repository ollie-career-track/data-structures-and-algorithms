class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;
  }

  includes(value) {
    let current = this.head;

    for(let i = 0; i < this.size; i++) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let values = '';

    for(let i = 0; i < this.size; i++) {
      values += current.value;
      current = current.next;
    }
    return values;
  }
}

module.exports = {
  LinkedList,
  Node
};