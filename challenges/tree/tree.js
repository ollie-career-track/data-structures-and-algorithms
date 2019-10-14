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
    else {
      let current = this.root;

      while(current) {
        if(node.value < current.value) {

          if(!current.left) {
            current.left = node;
            current = null;
          }
        }
        else if(node.value > current.value) {
    
          if(!current.right) {
            current.right = node;
            current = null;
          }
        }
      }
    }
  }

  // screenshot(node) {
  //   if(node.value < this.value) {

  //     if(this.left) {
  //       this.left.add(node);
  //     }
  //     else {
  //       this.left = node;
  //     }
  //   }
  //   else if(node.value > this.value) {

  //     if(this.right) {
  //       this.right.add(node);
  //     }
  //     else {
  //       this.right = node;
  //     }
  //   }
  // }

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