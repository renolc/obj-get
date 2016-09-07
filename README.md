# obj-get [![npm version](https://badge.fury.io/js/obj-get.svg)](https://badge.fury.io/js/obj-get)
Safely get nested properties on an object. Compatible with Node 0.10.0+ and browsers as far back as IE9.

### Installation

`npm i obj-get -S`

### Usage

```javascript
const assert = require('assert')
const get = require('./index.js')

const obj = {
  single: 1,
  nested: {
    array: [
      'first',
      {
        name: 'second'
      }
    ],
    node: {
      exists: 'abc'
    }
  }
}

// direct access
assert.equal(get(obj, 'single'), 1)
assert.equal(get(obj, 'nested.node.exists'), 'abc')

// mixed dot-notation and param access
assert.equal(get(obj, 'nested.node', 'exists'), 'abc')
assert.equal(get(obj, 'nested', 'node.exists'), 'abc')
assert.equal(get(obj, 'nested', 'node', 'exists'), 'abc')

// access to non-existent nodes
assert.equal(get(obj, 'fake'), undefined)
assert.equal(get(obj, 'single.fake'), undefined)
assert.equal(get(obj, 'nested.fake'), undefined)
assert.equal(get(obj, 'nested.node.fake.morefake'), undefined)

// array access
assert.equal(get(obj, 'nested.array[0]'), 'first')
assert.equal(get(obj, 'nested.array[1].name'), 'second')
assert.equal(get(obj, 'nested.array[2].thing'), undefined)
assert.equal(get(obj, 'nested[node].exists'), 'abc')
```
