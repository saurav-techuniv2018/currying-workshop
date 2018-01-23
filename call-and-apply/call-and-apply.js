const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    method.apply(method, argumentsArr);
  },
};

module.exports = callAndApply;
