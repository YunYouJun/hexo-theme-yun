/**
 * Is a object?
 * typeof [] === "object"
 * @param {*} item
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Merge with override array (modify target object)
 * @param {*} target
 * @param {*} source
 */
function merge(target, source) {
  for (const key in source) {
    if (isObject(target[key]) && isObject(source[key]))
      merge(target[key], source[key])
    else
      target[key] = source[key]
  }
  return target
}

module.exports = {
  merge,
}
