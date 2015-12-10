suite('example', () => {
	test('does a thing', () => {
		var foo = new window.Foo()
		assert.equal(foo.returnTrue(), true)
		assert.equal(foo.returnFalse(), false)
	})
})
