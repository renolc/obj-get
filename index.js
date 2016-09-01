module.exports = (value, ...props) => props
  .reduce((arr, prop) => arr.concat(prop.split('.')), [])
  .reduce((arr, prop) => {
    const arrayAccess = prop.match(/(.*)\[(.*)\]/)
    return arr.concat((arrayAccess) ? [arrayAccess[1], `[${arrayAccess[2]}]`] : prop)
  }, [])
  .reduce((obj, prop) => {
    if (prop.startsWith('[')) prop = prop.slice(1, prop.length-1)
    return (obj) ? obj[prop] : undefined
  }, value)
