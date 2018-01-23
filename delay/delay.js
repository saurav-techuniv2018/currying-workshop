const delay = firstArgument =>
  (secondArgument) => {
    if (typeof firstArgument === typeof secondArgument &&
      typeof firstArgument === 'number' &&
      firstArgument < Infinity &&
      firstArgument > -Infinity &&
      secondArgument < Infinity &&
      secondArgument > -Infinity) {
      return firstArgument + secondArgument;
    }

    return undefined;
  };

module.exports = delay;
