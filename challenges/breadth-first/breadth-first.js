module.exports = function breadthFirstTransversal(tree) {
  const queue = [];
  const rootValues = [];

  queue.push(tree.root);

  while(queue.length > 0) {
    // console.log(queue[0].value);
    rootValues.push(queue[0].value);
    
    if(queue[0].left) {
      queue.push(queue[0].left);
    }

    if(queue[0].right) {
      queue.push(queue[0].right);
    }

    queue.shift();
  }

  return rootValues;
};