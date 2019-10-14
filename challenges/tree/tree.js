class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {

  }

  postOrder() {

  }

  inOrder() {

  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    return value;
  }

  contains(value) {
    return value;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};