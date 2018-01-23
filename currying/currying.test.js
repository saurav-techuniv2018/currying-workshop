const currying = require('./currying');

describe(currying.name, () => {
  describe('should return curried version of the function', () => {
    test('when any function is passed', () => {
      const mockFunction = jest.fn();
      expect(typeof currying(mockFunction)).toBe('function');
    });
  });
  describe('should return the same value', () => {
    test('when called using comma separated arguments or curried', () => {
      const concat = (firstString, secondString, thirdString) => firstString + secondString + thirdString;
      const curried = currying(concat);

      const input1 = 'One';
      const input2 = 'Two';
      const input3 = 'Three';
      const expectedOutput = 'OneTwoThree';
      expect(curried(input1, input2, input3)).toBe(expectedOutput);
      expect(curried(input1, input2)(input3)).toBe(expectedOutput);
      expect(curried(input1)(input2, input3)).toBe(expectedOutput);
    });
  });
});
