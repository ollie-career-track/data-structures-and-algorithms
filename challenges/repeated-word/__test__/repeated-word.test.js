const repeatedWord = require('../repeated-word');

describe('RepeatedWord Function', () => {
  it('returns the first repeated word in a string', () => {
    const str = 'Once upon a time, there was a brave princess who';
    const result = repeatedWord(str);

    expect(result).toBe('a');
  });

  it.only('returns null if no repeat words', () => {
    const str = 'This is a sentence with no repeating words';
    const result = repeatedWord(str);

    expect(result).toBe(null);
  });

  it('', () => {

  });

  it('', () => {

  });
});
