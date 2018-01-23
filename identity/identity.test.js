const identity = require('./identity');

describe('identity', () => {
  describe('should return result that is of the same type as the input', () => {
    test('when input is "saurav"', () => {
      expect(typeof (identity('saurav'))).toBe('string');
    });
  });

  describe('should return the same value as that of the input', () => {
    test('when the input is an array [1, 2, 4, 8]', () => {
      expect(identity([1, 2, 4, 8])).toEqual([1, 2, 4, 8]);
    });
  });
});

