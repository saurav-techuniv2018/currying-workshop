const curryFunc = (normalFunction) => {
  const requiredArgsCount = normalFunction.length;

  const innerFunction = (...inputArguments) => {
    if (inputArguments.length > requiredArgsCount) {
      return undefined;
    }

    if (inputArguments.length === requiredArgsCount) {
      return normalFunction(...inputArguments);
    }
    return (...inner) => innerFunction(...inputArguments.concat(inner));
  };

  return innerFunction;
};

module.exports = curryFunc;
