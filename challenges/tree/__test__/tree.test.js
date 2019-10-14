const { BinaryTree, BinarySearchTree } = require('../tree');

describe('Trees', () => {
  describe('Binary Tree', () => {

    describe('Binary Tree Instantiation', () => {
      it('instantiates an empty tree', () => {
        const bt = new BinaryTree;

        expect(bt.root).toBe(null);
      });

      it('can add single root node', () => {
        
      });

      it('can add left and right child to root node', () => {

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
        
      });

      it('can add left and right child to root node', () => {

      });
    });

    describe('binary search tree methods', () => {
      it('add method adds node in correct location', () => {

      }); 

      it('contains method returns true for value in tree', () => {

      }); 

      it('contains method returns false for value not in tree', () => {

      }); 
    });
  });
});