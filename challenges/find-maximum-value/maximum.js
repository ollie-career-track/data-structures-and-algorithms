module.exports = function findMaximumValue(tree) {
  let maximum = 0;
  const queue = [];

  queue.push(tree.root);

  while(queue.length > 0) {
    if(queue[0].left) {
      queue.push(queue[0].left);
    }

    if(queue[0].right) {
      queue.push(queue[0].right);
    }

    if(queue[0].value > maximum) {
      maximum = queue[0].value;
    }

    queue.shift();
  }

  return maximum;
};