module.exports = function treeIntersection(treeOne, treeTwo) {
  const intersection = [];
  const queue = [];

  queue.push(treeOne.root);

  while(queue.length > 0) {
    if(treeTwo.contains(queue[0].value)) {
      intersection.push(queue[0].value);
    }

    if(queue[0].left) {
      queue.push(queue[0].left);
    }

    if(queue[0].right) {
      queue.push(queue[0].right);
    }

    queue.shift();
  }

  if(intersection.length < 1) {
    return null;
  }

  return intersection;
};
