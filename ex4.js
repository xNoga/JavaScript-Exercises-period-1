///

var number = 0;

function countNumber(callbackFunction) {
    fs.readFile(process.argv[2], 'utf8', function doneReading (err, fileContents) {
        number = fileContents.split('\n').length - 1;
        callbackFunction()
    })
}

function getResult() {
    console.log(number)
}

countNumber(getResult)