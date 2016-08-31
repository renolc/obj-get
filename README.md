# obj-get
Safely get nested properties on an object

### Installation

`npm i obj-get -S`

### Usage

```javascript
const get = require('obj-get')

const obj = {
  single: 1,
  nested: {
    node: {
      exists: 'abc'
    }
  }
}

get(obj, 'single') // => 1
get(obj, 'nested.node.exists') // => 'abc'
get(obj, 'nested.node', 'exists') // => 'abc'
get(obj, 'nested', 'node.exists') // => 'abc'
get(obj, 'nested', 'node', 'exists') // => 'abc'
get(obj, 'fake') // => undefined
get(obj, 'single.fake') // => undefined
get(obj, 'nested.fake') // => undefined
get(obj, 'nested.node.fake.morefake') // => undefined
```