const fs  = require("fs")
const {create} = require("./crud/create.js")
const {update} = require("./crud/update.js")
const {deletear} = require("./crud/delete.js")
const {write} = require("./crud/write.js")

//READ
const dataJson = fs.readFileSync("./dataTask.json", "utf-8")
let dataLiteral = JSON.parse(dataJson)

switch (process.argv[2]) {
    case "list":
            console.log(dataLiteral)
        break;

    case "add":
            create(process.argv[3], process.argv[4])
        break;

    case "edit":
            update(process.argv[3], process.argv[4])
        break;

    case "delete":
            deletear(process.argv[3])
        break;

    default:
        console.log("A ocurrido un error")
        break;
}


exports.dataLiteral=dataLiteral;
