const Movie = require('../models/movies');
const mongoose = require('mongoose')
const connectDB = require('../config/db')
const config = require('config')
const db = config.get('mongoURI')

beforeAll(async () => {
    // Connect Database
    connectDB(db)
});

const data = {
    year : 2020,
    type : "movie",
    title: "Filme FullStack",
    cast : [],
    genres : [ "Short"],
    fullplot: "Um filme curto sobre test em fullstack js"
}

test('Should get movies', async done => {
    const movie = new Movie( data )
    await movie.save()
    expect(movie).toBeTruthy()
    done()
  })

afterAll(async () => {
    mongoose.connection.close()
});
