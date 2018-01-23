const longDelay = require('./long-delay');

describe('longDelay', () => {
  describe('should return undefined', () => {
    const expectedOutput = undefined;
    test('when an argument is not a number', () => {
      expect(longDelay(2)(3)([1, 2, 3])).toBe(expectedOutput);
    });
    test('when some call contains Infinity or -Infinity', () => {
      expect(longDelay(2)(4)(Infinity)).toBe(expectedOutput);
    });
  });
  describe('should return 0', () => {
    test('when no arguments are passed', () => {
      expect(longDelay()).toBe(0);
    });
  });

  describe('should return the valid sum', () => {
    test('when inputs are all positive integers', () => {
      expect(longDelay(1)(2)(4)(8)()).toBe(15);
    });
    test('when input contains both positive and negative integers with floating values', () => {
      expect(longDelay(1)(4.5)(-9)()).toBe(-3.5);
    });
  });

  describe('should return the internal currySum function', () => {
    test('when last input is not undefined', () => {
      expect(longDelay(1)(3)(9).name).toBe('currySum');
    });
  });
});
