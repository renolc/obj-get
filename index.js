module.exports = (value, ...props) => props
  .reduce((arr, prop) => arr.concat(prop.split('.')), [])
  .reduce((arr, prop) => {
    const arrayAccess = prop.match(/(.*)\[(.*)\]/)
    return arr.concat((arrayAccess) ? [arrayAccess[1], arrayAccess[2]] : prop)
  }, [])
  .reduce((obj, prop) => (obj) ? obj[prop] : undefined, value)
