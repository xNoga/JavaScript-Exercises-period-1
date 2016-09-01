var folder = process.argv[2]
var ext = process.argv[3]
var mymodule = require('./ex6-moduleFile')

mymodule(folder, ext, getResult)

function getResult(err, data) {
    for(i = 0; i < data.length; i++){
        console.log(data[i])
    }
}

