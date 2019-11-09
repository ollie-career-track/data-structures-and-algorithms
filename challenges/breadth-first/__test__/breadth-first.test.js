const breadthFirstTransversal = require('../breadth-first');
const { BinaryTree } = require('../../tree/tree');

describe('breathFirstTransversal Function', () => {
  it('console logs tree values in correct order', () => {
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

    const result = breadthFirstTransversal(tree);

    expect(result).toEqual([10, 6, 20, 5, 9, 15, 30, 3, 60]);
  });
});
