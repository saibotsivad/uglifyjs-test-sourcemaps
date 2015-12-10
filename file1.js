/*

File 1

*/

function foo(thing) {
	console.log(thing)
}

function combiner(thing) {
	foo(thing + 'bar')
}

combiner('foo')
