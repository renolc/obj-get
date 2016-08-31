const assert = require('assert')
const get = require('./index.js')

const obj = {
  single: 1,
  nested: {
    node: {
      exists: 'abc'
    }
  }
}

assert.equal(get(obj, 'single'), 1)
assert.equal(get(obj, 'nested.node.exists'), 'abc')
assert.equal(get(obj, 'nested.node', 'exists'), 'abc')
assert.equal(get(obj, 'nested', 'node.exists'), 'abc')
assert.equal(get(obj, 'nested', 'node', 'exists'), 'abc')
assert.equal(get(obj, 'fake'), undefined)
assert.equal(get(obj, 'single.fake'), undefined)
assert.equal(get(obj, 'nested.fake'), undefined)
assert.equal(get(obj, 'nested.node.fake.morefake'), undefined)