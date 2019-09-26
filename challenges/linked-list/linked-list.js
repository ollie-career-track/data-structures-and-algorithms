class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head, size) {
    this.head = head;
    this.size = size;
  }

  insert(value) {
    // adds new node to head of list
    return value;
  }

  includes(value) {
    // returns true if value exists within list
    // returns false if value doesn't exist within the list
    return value;
  }

  toString() {
    // returns a string containing all values in linked list
  }
}

module.exports = {
  Node,
  LinkedList
};