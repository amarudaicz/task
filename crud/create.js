const {write} = require("./write")
const fs = require("fs")


const dataJson = fs.readFileSync("./dataTask.json", "utf-8")
let dataLiteral = JSON.parse(dataJson)


//CREATE
function create(title, desc) {
    let newTarea = {};
    let newListado= dataLiteral;
    newTarea.title = title;
    newTarea.desc = desc;
    newListado.push(newTarea)
    write(newListado)

    console.log(dataLiteral)
}

exports.create=create;
