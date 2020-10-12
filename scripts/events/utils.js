const deepmerge = require("deepmerge");
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

/**
 * Merge with override array
 * @param {*} target
 * @param {*} source
 */
function merge(target, source) {
  return deepmerge(target, source, overwriteMerge);
}

module.exports = {
  merge,
};
