const binary = require('./binary');

describe('binary', () => {
  describe('should return undefined', () => {
    test('when inputs are not of the same type', () => {
      expect(binary(1, 'abc')).toBe(undefined);
    });
    test('when inputs are not numbers', () => {
      expect(binary('hello', 'world')).toBe(undefined);
    });
  });

  describe('should return the sum', () => {
    test('when both arguments are integers', () => {
      expect(binary(1, 1)).toBe(2);
    });
    test('when one argument is integer and the other is an are integers', () => {
      expect(binary(1, 1.5)).toBe(2.5);
    });
    test('when one argument is positive and the other is negative', () => {
      expect(binary(1, -3)).toBe(-2);
    });
  });
});
