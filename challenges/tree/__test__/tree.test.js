const { BinaryTree, BinarySearchTree } = require('../tree');

describe('Trees', () => {
  describe('Binary Tree', () => {

    describe('Binary Tree Instantiation', () => {
      it('instantiates an empty tree', () => {
        const bt = new BinaryTree;

        expect(bt.root).toBe(null);
      });

      it('can add single root node', () => {
        const bt = new BinaryTree;
        bt.add('root');

        expect(bt.root.value).toBe('root');
      });

      it('can add left and right child to root node', () => {
        const bt = new BinaryTree;

        bt.add(8);
        bt.add(4);
        bt.add(10);

        expect(bt.root.value).toBe(8);
        expect(bt.root.left.value).toBe(4);
        expect(bt.root.right.value).toBe(10);
      });
    });

    describe('depth first transversal', () => {
      it('preOrder transversal returns an ordered collection', () => {

      });

      it('inOrder transversal returns an ordered collection', () => {

      });

      it('postOrder transversal returns an ordered collection', () => {

      });
    });
  });
  
  describe('Binary Search Tree', () => {
    describe('Binary Search Tree Instantiation', () => {

      it('instantiates an empty tree', () => {
        const bst = new BinarySearchTree;

        expect(bst.root).toBe(null);
      });
      
      it('can add single root node', () => {
        const bst = new BinarySearchTree;
        bst.add('root');

        expect(bst.root.value).toBe('root');
      });

      it('can add left and right child to root node', () => {
        const bst = new BinarySearchTree;

        bst.add(5);
        bst.add(2);
        bst.add(8);

        expect(bst.root.value).toBe(5);
        expect(bst.root.left.value).toBe(2);
        expect(bst.root.right.value).toBe(8);
      });
    });

    describe('binary search tree contains method', () => {
      it('contains method returns true for value in tree', () => {
        const bst = new BinarySearchTree;

        bst.add(7);
        bst.add(3);
        bst.add(9);

        const result = bst.contains(9);

        expect(result).toBe(true);
      }); 

      it('contains method returns false for value not in tree', () => {
        const bst = new BinarySearchTree;

        bst.add(3);
        bst.add(1);
        bst.add(5);

        const result = bst.contains(8);

        expect(result).toBe(false);
      }); 
    });
  });
});