var fs = require('fs')

var input = fs.readFileSync('./build/out/out.js.map', 'utf8')

var sources = JSON.parse(input)

fs.writeFileSync('temp-sources.json', JSON.stringify(sources.sourcesContent), 'utf8')
