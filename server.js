require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db');
const routes = require('./routes')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000;

connectDB()

const server = app.listen(PORT, () => { console.log(`port ${PORT}`) })

routes(app)

module.exports =  {app , server}