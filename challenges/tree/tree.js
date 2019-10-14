class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);

    if(!this.root) {
      this.root = node;
    }
  }

  contains(value) {
    return value;
  }
}

class BinaryTree extends BinarySearchTree {
  super() {
    this.root = null;
  }

  preOrder() {

  }

  postOrder() {

  }

  inOrder() {

  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};