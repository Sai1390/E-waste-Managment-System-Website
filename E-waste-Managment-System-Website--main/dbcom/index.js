let express = require("express")

let app = express()

app.listen(3000, () => {
    console.log('server is connected.... ')
})

let connectdb = require("./connection/connectdb.js")
connectdb()
let saveMultipleDoc = require("./model/model.js")
saveDoc()

let readData = require("./model/model.js")
readData()