var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {

    var data = fs.createReadStream(process.argv[3])
    var result
    data.pipe(res)

})

server.listen(process.argv[2])