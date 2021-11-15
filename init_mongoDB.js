
require('dotenv').config()
const mongoose = require('mongoose')
const Person = require('./models/person')

Person.insertMany([
    {
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122"
    }
]).then (results => {
    console.log('Data inserted!');
    mongoose.connection.close(); 
}).catch (results => {
    console.log('Failed to add Data!');
    mongoose.connection.close()
})
