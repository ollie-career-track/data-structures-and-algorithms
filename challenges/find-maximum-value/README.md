# Find Maximum Value

## Challenge
Write a function that takes a tree and returns the largest value in the tree;

## Approach & Efficiency
I didn't realise the binary tree was unsorted and the binary search tree is sorted. My binary tree class extends the search tree's add method, so it will always sort values correctly when it adds a new node. Rather than create an unsorted class, I wrote the `findMaximumValue` so that it should work on any tree... hopefully. I used the logic from the previous breadth first traversal in this function.

## API

### `findMaximumValue(tree)`
Takes a tree and returns the maximum value in the tree.

