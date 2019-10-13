const { bracketValidator } = require('../multi-bracket');

describe('Multi-bracket Validator Function', () => {
  describe.only('curly braces', () => {

    it('returns true for balanced curly braces', () => {
      const input = '{}';
      const result = bracketValidator(input);

      expect(result).toBe(true);
    });

    it('returns false for unbalanced curly braces', () => {
      const input = '{';
      const result = bracketValidator(input);

      expect(result).toBe(false);
    });
  });

  describe('parenthesis', () => {
    it('returns true for balanced parenthesis', () => {

    });

    it('returns false for unbalanced parenthesis', () => {

    });
  });

  describe('square brackets', () => {
    it('returns true for balanced square brackets', () => {

    });

    it('returns false for unbalanced square brackets', () => {

    });
  });

  describe('multiple types of brackets', () => {
    it('returns true for multiple balanced brackets', () => {
    
    });

    it('returns true for balanced nested brackets', () => {

    });
    
    it('returns true for a string with extra characters', () => {

    });

    it('returns false for multiple types of unbalanced brackets', () => {

    });
  });
});