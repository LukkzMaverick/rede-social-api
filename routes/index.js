const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

module.exports = app => {
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());  
    app.get('/', (req, res) => {
        res.send({res: 'teste'})
    })
    
}