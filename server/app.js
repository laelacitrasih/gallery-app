if (process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const express = require('express')
const app = express()
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/',router)


app.use(errorHandler)

app.listen(PORT, () => {
    console.log('gallery-app running at port ', PORT)
})

// module.exports = app

