module.exports = function fizzBuzzTree(tree) {
  const inOrderRecursion = root => {

    if(root !== null) {
      inOrderRecursion(root.left);

      if(root.value % 3 === 0 && root.value % 5 === 0) {
        root.value = 'FizzBuzz';
      }
      else if(root.value % 3 === 0) {
        root.value = 'Fizz';
      }
      else if(root.value % 5 === 0) {
        root.value = 'Buzz';
      }

      inOrderRecursion(root.right);
    }
  };

  inOrderRecursion(tree.root);
  return tree;
};
