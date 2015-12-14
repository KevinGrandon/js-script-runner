var ExampleClass = require('../js/example')
var assert = require('assert')

suite('example', () => {
  test('does a thing', () => {
    var foo = new ExampleClass()
    assert.equal(foo.returnTrue(), true)
    assert.equal(foo.returnFalse(), false)
  })
})
