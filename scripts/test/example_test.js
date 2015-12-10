var exampleClass = require('../js/example')
var assert = require('assert')

suite('example', () => {
	test('does a thing', () => {
		var foo = new exampleClass()
		assert.equal(foo.returnTrue(), true)
		assert.equal(foo.returnFalse(), false)
	})
})
