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

  append(value) {
    const node = new Node(value);
    let current = this.head;

    for(let i = 0; i < this.size - 1; i++) {
      current = current.next;
    }

    current ? current.next = node : this.head = node;
    this.size++;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;

    if(this.head.value === value) {
      node.next = this.head;
      this.head = node;
    }
    else {
      for(let i = 0; i < this.size; i++) {
        if(current.next.value === value) {
          node.next = current.next;
          current.next = node;
        }
        current = current.next;
      }
    }
    this.size++;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;

    for(let i = 0; i < this.size; i++) {
      if(current.value === value) {
        if(!current.next) {
          current.next = node;
        }
        else {
          node.next = current.next;
          current.next = node;
        }
      }
      current = current.next;
    }
    this.size++;
  }

  kthFromEnd(k) {
    if(k > this.size) {
      throw new Error('k cannot exceed size of list');
    }
    
  }
}

module.exports = {
  LinkedList,
  Node
};