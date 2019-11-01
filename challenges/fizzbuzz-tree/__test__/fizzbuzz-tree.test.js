const fizzBuzzTree = require('../fizzbuzz-tree');
const { BinaryTree } = require('../../tree/tree');

describe('fizzBuzzTree function', () => {
  describe('Values divisible by 3', () => {

    it('returns a tree with fizz values', () => {
      const tree = new BinaryTree;

      tree.add(6);
      tree.add(3);
      tree.add(9);

      const result = fizzBuzzTree(tree);

      expect(result.root.value).toBe('Fizz');
      expect(result.root.left.value).toBe('Fizz');
      expect(result.root.right.value).toBe('Fizz');
    });
  });

  describe('Values divisible by 5', () => {
    it('returns a tree with buzz values', () => {
      const tree = new BinaryTree;

      tree.add(10);
      tree.add(5);
      tree.add(20);

      const result = fizzBuzzTree(tree);

      expect(result.root.value).toBe('Buzz');
      expect(result.root.left.value).toBe('Buzz');
      expect(result.root.right.value).toBe('Buzz');
    });
  });

  describe('Values divisible by 3 and 5', () => {
    it('returns a tree with fizzbuzz values', () => {
      const tree = new BinaryTree;

      tree.add(30);
      tree.add(15);
      tree.add(60);

      const result = fizzBuzzTree(tree);

      expect(result.root.value).toBe('FizzBuzz');
      expect(result.root.left.value).toBe('FizzBuzz');
      expect(result.root.right.value).toBe('FizzBuzz');
    });
  });

  describe('Tree with multiple values', () => {
    it('returns tree with fizz, buzz, and fizzbuzz values', () => {
      
    });
  });
});