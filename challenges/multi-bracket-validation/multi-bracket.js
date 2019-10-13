function bracketValidator(str) {
  let curlyCount = 0;
  let parenCount = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{') {
      curlyCount++;
    }

    if(str[i] === '}') {
      curlyCount--;
    }

    if(str[i] === '(') {
      parenCount++;
    }

    if(str[i] === ')') {
      parenCount--;
    }
  }

  if(curlyCount === 0 && parenCount === 0) {
    return true;
  }

  return false;
}

module.exports = { bracketValidator };