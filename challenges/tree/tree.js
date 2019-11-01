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

  // add(value) {
  //   const node = new Node(value);

  //   if(!this.root) {
  //     this.root = node;
  //   }
  //   else {
  //     let current = this.root;

  //     while(current) {
  //       if(node.value < current.value) {

  //         if(!current.left) {
  //           current.left = node;
  //           current = null;
  //         }
  //       }
  //       else if(node.value > current.value) {

  //         if(!current.right) {
  //           current.right = node;
  //           current = null;
  //         }
  //       }
  //     }
  //   }
  // }

  add(value) {
    const node = new Node(value);

    if(!this.root) {
      this.root = node;
    }

    const current = this.root;

    const recursive = currentNode => {
      if(node.value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = node;
        }

        recursive(currentNode.left);
      }
      else if(node.value > currentNode.value) {
        if(!currentNode.right) {
          currentNode.right = node;
        }

        recursive(currentNode.right);
      }
    };

    recursive(current);
  }

  contains(value) {
    let current = this.root;

    while(current) {
      if(current.value === value) {
        return true;
      }

      if(value < current.value) {
        if(!current.left) {
          return false;
        }

        current = current.left;
      }

      if(value > current.value) {
        if(!current.right) {
          return false;
        }

        current = current.right;
      }
    }
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