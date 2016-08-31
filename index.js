module.exports = (value, ...props) => props
  .reduce((arr, prop) => arr.concat(prop.split('.')), [])
  .reduce((obj, prop) => (obj) ? obj[prop] : undefined, value)
