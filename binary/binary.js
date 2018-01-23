const binary = (firstArg, secArg) => {
  if (typeof firstArg === typeof secArg &&
    typeof firstArg === 'number' &&
    firstArg < Infinity &&
    firstArg > -Infinity &&
    secArg < Infinity &&
    secArg > -Infinity) {
    return firstArg + secArg;
  }

  return undefined;
};

module.exports = binary;
