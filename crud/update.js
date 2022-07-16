const {write} = require("./write")
const fs = require("fs")


const dataJson = fs.readFileSync("./dataTask.json", "utf-8")
let dataLiteral = JSON.parse(dataJson)

//UPDATE
function update(title, desc) {
    for (let i = 0; i < dataLiteral.length; i++) {
        let newListado = dataLiteral
        if (title === dataLiteral[i].title) {
            dataLiteral[i].desc = desc
            write(newListado)

            console.log(dataLiteral)
            
        }
    }
}
  

exports.update=update;