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
    const preOrder = [];

    const preRecursion = root => {
      preOrder.push(root.value);

      if(root.left) {
        preRecursion(root.left);
      }
      
      if(root.right) {
        preRecursion(root.right);
      }
    };

    preRecursion(this.root);
    return preOrder;
  }

  postOrder() {
    const postOrder = [];

    return postOrder;
  }

  inOrder() {
    const inOrder = [];

    const inRecursion = root => {
      if(root !== null) {
        inRecursion(root.left);
        inOrder.push(root.value);
        inRecursion(root.right);
      }
    };

    inRecursion(this.root);
    return inOrder;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};