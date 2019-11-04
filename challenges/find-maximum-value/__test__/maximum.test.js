const { BinaryTree } = require('../../tree/tree');
const findMaximumValue = require('../maximum');

describe('findMaximumValue function', () => {
  it('returns the maximum value in a binary tree', () => {
    const tree = new BinaryTree;

    tree.add(10);

    tree.add(6);
    tree.add(20);

    tree.add(5);
    tree.add(9);

    tree.add(15);
    tree.add(30);

    tree.add(3);
    tree.add(60);

    const result = findMaximumValue(tree);
    expect(result).toBe(60);
  });
});