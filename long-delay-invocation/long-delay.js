const longDelay = (arg) => {
  let sum = 0;
  const currySum = (inputNumber) => {
    if (inputNumber === undefined) { return sum; }

    if (typeof inputNumber === 'number' &&
      inputNumber < Infinity &&
      inputNumber > -Infinity) {
      sum += inputNumber;
      return currySum;
    }

    return undefined;
  };

  return currySum(arg);
};

module.exports = longDelay;
