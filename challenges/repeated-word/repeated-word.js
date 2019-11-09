module.exports = function RepeatedWord(lengthyString) {
  let word = '';
  const counter = {};

  for(let i = 0; i < lengthyString.length; i++) {
    if(lengthyString[i] !== ' ') {
      word = word + lengthyString[i];
    } 

    if(lengthyString[i] === ' ') {
      !counter[word] ? counter[word] = 1 : counter[word] = 2;

      if(counter[word] === 2) return word;

      word = '';
    }
  }

  return null;
};
