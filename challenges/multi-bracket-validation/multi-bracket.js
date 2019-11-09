function bracketValidator(str) {
  let curlyCount = 0;
  let parenCount = 0;
  let squareCount = 0;

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

    if(str[i] === '[') {
      squareCount++;
    }

    if(str[i] === ']') {
      squareCount--;
    }
  }

  const sum = curlyCount + parenCount + squareCount;

  if(sum === 0) {
    return true;
  }

  return false;
}

module.exports = { bracketValidator };