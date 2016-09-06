module.exports = function (value) {
  return Array.prototype.slice.call(arguments, 1)
    .reduce(function (arr, prop) { return arr.concat(prop.replace(/\]/g, '').split(/[\.\[]/)) }, [])
    .reduce(function (obj, prop) { return (obj) ? obj[prop] : undefined }, value)
}