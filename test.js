const assert = require('assert')
const get = require('./index.js')

assert.equal(get({a:1}, 'a'), 1, 'single prop access')

assert.equal(get({a:{b:1}}, 'a.b'), 1, 'nested dot prop access')

assert.equal(get({a:{b:1}}, 'a', 'b'), 1, 'nested arg prop access')