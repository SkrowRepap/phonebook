
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const person = require('./models/person')

const app = express()
const PORT = process.env.PORT


app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('postData', (request) => {
  if (request.method == 'POST') return JSON.stringify(request.body)
  else return ' '
})

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :postData'
  )
)


// Getting Info
app.get('/info', (request, response) => {
  const entries = person.length + 1
  const date = new Date()
  const body = `<p> Phonebook has info for ${entries} people </p>
        <p> Request Time: ${date} </p>`
  response.send(body)
})

// GET

app.get('/api/persons', (request,response) => {
  const data = request.query.name_like
  console.log('data:',data)
  if(data) {
    person.find({ name: {$regex: data, $options: 'i'}}).then(results => response.json(results))
  } else {
    person.find({}).then(results => response.json(results))
  }

})

// GET ID
app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  person.findById(id)
    .then(results => {
      if(results)
        response.json(results)
      else
        response.status(404).end()
    })
    .catch (error => next(error))

})


//DELETE
app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  person.findByIdAndRemove(id)
    .then(results => response.status(204).end())
    .catch(error => next(error))
})


//UPDATE
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  console.log('puts')
  console.log('put params', request.params)
  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing!'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number is missing!'
    })
  }

  const contactPerson = {
    name: body.name,
    number: body.number
  }

  person.findByIdAndUpdate(request.params.id, contactPerson, { new:true } )
    .then(updatedResults => {
      response.json(updatedResults)
    })
    .catch(error => next(error))
})

//INSERT
app.post('/api/persons/', (request, response,next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing!'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number is missing!'
    })
  }

  const personObject = new person ({
    name: body.name,
    number: body.number
  })
  personObject
    .save()
    .then(results => {
      console.log('Added!')
      response.json(personObject)
    })
    .catch(error => next(error))




})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }




  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Serving running on PORT ${PORT}`)

})


