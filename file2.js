/*

File 2

*/

function moreThings(input) {
	if (!input) {
		throw new Error('test')
	}
}

function inHere(input) {
	moreThings(input)
}

inHere('stuff')
inHere()
