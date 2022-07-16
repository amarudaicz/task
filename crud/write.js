const fs = require("fs")

const dataJson = fs.readFileSync("./dataTask.json", "utf-8")
let dataLiteral = JSON.parse(dataJson)

//WRITE
function write(array) {
    dataLiteralString = JSON.stringify(array)
    fs.writeFileSync("./dataTask.json", dataLiteralString)
    console.log(dataLiteral)
}


exports.write = write;
