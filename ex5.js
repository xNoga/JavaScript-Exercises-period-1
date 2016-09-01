var fs =  require('fs')

var path = require('path')

var result = undefined


fs.readdir(process.argv[2], function (err, list) {
    //console.log(list)
    for(var i = 0; i < list.length; i++){ // brug evt forEach().
        if (path.extname(list[i]) === ( "." + process.argv[3]) ){
            console.log(list[i])
       }
    }
})