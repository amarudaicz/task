const {write} = require("./write")
const fs = require("fs")


const dataJson = fs.readFileSync("./dataTask.json", "utf-8")
let dataLiteral = JSON.parse(dataJson)


//DELETEAR
function deletear(title) {
    for (let i = 0; i < dataLiteral.length; i++) {
        if (title === dataLiteral[i].title ) {
            let index = i
            let newListado = dataLiteral;
            dataLiteral.splice(index, 1)
            write(newListado)

            console.log(dataLiteral)
        }
    }
}

exports.deletear=deletear;