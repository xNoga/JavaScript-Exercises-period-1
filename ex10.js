var net = require('net')
var date = new Date()
var server = net.createServer(function (socket) {
    socket.end(""+

        date.getFullYear()+"-0"+(
            date.getMonth()+1)+"-"+
            date.getDate()+" "+
            date.getHours()+":"+
            date.getMinutes()+"\n"

    )
})
server.listen(process.argv[2])