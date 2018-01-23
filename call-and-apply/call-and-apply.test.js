const callAndApply = require('./call-and-apply');

describe(callAndApply.name, () => {
  describe('should invoke mockFunction', () => {
    test('when it is passed as an argument to caller', () => {
      const mockFunction = jest.fn();
      callAndApply.caller(null, mockFunction);
      expect(mockFunction.mock.calls.length).toBe(1);
    });
    test('when it is passed as an argument to applier', () => {
      const mockFunction = jest.fn();
      callAndApply.applier(null, mockFunction);
      expect(mockFunction.mock.calls.length).toBe(1);
    });
  });

  describe('should invoke mockFunction with the right arguments', () => {
    test('when it is passed as an argument to caller', () => {
      const mockFunction = jest.fn();
      const inputArguments = ['Sahu', 21, 'M'];
      callAndApply.caller(null, mockFunction, ...inputArguments);

      expect(mockFunction).toHaveBeenCalledWith(...inputArguments);
    });
    test('when it is passed as an argument to applier', () => {
      const mockFunction = jest.fn();
      const inputArguments = ['Stevens', 34, 'L'];
      callAndApply.applier(null, mockFunction, inputArguments);
      expect(mockFunction).toHaveBeenCalledWith(...inputArguments);
    });
  });
});
