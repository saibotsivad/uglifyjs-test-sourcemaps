var fs = require('fs')

var input = fs.readFileSync('./build/out/out.js.map', 'utf8')
var sources = JSON.parse(input)

var sourcesContent = require('./temp-sources.json')

sources.sourcesContent = sourcesContent

fs.writeFileSync('./build/out/out.js.map', JSON.stringify(sources), 'utf8')
