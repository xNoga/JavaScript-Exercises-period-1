var http = require('http')


var server = http.createServer(function (req, res) {

    if(req.method != 'POST')
        return res.end("send me a Post\n")

    var map = require('through2-map')
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)


})

server.listen(process.argv[2])