const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

module.exports = app => {
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());  
    app.use('/auth', require('./auth'))
    app.use('/dislike', require('./dislike'))
    app.use('/education', require('./education'))
    app.use('/friends', require('./friendship'))
    app.use('/like', require('./like'))
    app.use('/post', require('./post'))
    app.use('/topic', require('./topic'))
    app.use('/user', require('./user'))

    
}