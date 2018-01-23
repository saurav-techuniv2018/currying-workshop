const delay = require('./delay');

describe('delay', () => {
  describe('should return undefined', () => {
    test('when inputs are not of the same type', () => {
      expect(delay(1)('hello-world')).toBe(undefined);
    });
    test('when inputs are not numbers', () => {
      expect(delay(Infinity)('there')).toBe(undefined);
    });
  });

  describe('should return the sum', () => {
    test('when both arguments are integers', () => {
      expect(delay(0)(0)).toBe(0);
    });
    test('when one argument is integer and the other is an are integers', () => {
      expect(delay(1)(1.5)).toBe(2.5);
    });
    test('when one argument is positive and the other is negative', () => {
      expect(delay(1)(-3)).toBe(-2);
    });
  });
});

