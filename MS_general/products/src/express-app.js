const express= require('express')
const cors= require('cors')
const compression = require("compression")

const {customer}= require('./api')


module.exports= async(app)=>{
    app.use(express.json())
    app.use(cors())
    app.use(compression())


    customer(app)

}