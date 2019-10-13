function bracketValidator(str) {
  let curlyCount = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{') {
      curlyCount++;
    }

    if(str[i] === '}') {
      curlyCount--;
    }
  }

  if(curlyCount === 0) {
    return true;
  }

  return false;
}

module.exports = { bracketValidator };