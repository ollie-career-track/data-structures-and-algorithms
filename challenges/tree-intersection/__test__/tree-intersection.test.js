const { BinaryTree } = require('../../tree/tree');
const treeIntersection = require('../tree-intersection');

describe('Tree Intersection function', () => {
  it('returns an array of values for trees with all common values', () => {
    const one = new BinaryTree;

    one.add(8);
    one.add(4);
    one.add(12);

    one.add(2);
    one.add(16);

    const two = new BinaryTree;

    two.add(8);
    two.add(4);
    two.add(12);
    two.add(2);
    two.add(16);

    const result = treeIntersection(one, two);
    expect(result).toEqual([8, 4, 12, 2, 16]);
  });

  it('returns an array of values for trees with some common values', () => {
    const one = new BinaryTree;

    one.add(8);
    one.add(4);
    one.add(12);

    one.add(2);
    one.add(16);

    const two = new BinaryTree;

    two.add(4);
    two.add(2);
    two.add(6);

    two.add(8);
    two.add(12);

    const result = treeIntersection(one, two);
    expect(result).toEqual([8, 4, 12, 2]);
  });

  it('return null if no intersections', () => {
    const one = new BinaryTree;

    one.add(8);
    one.add(4);
    one.add(12);

    one.add(2);
    one.add(16);

    const two = new BinaryTree;

    two.add(15);
    two.add(10);
    two.add(30);

    two.add(5);
    two.add(45);

    const result = treeIntersection(one, two);
    expect(result).toBe(null);
  });
});
