const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('postData', (request) => {
    if (request.method == 'POST') return JSON.stringify(request.body);
    else return ' ';
});

app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :postData'
    )
);

let persons = [
        {
            "id": 1,
            "name": "Arto Hellas",
            "number": "040-123456"
        },
        {
            "id": 2,
            "name": "Ada Lovelace",
            "number": "39-44-5323523"
        },
        {
            "id": 3,
            "name": "Dan Abramov",
            "number": "12-43-234345"
        },
        {
            "id": 4,
            "name": "Mary Poppendieck",
            "number": "39-23-6423122"
        }
]

// Getting Info
app.get('/info', (request, response) => {
    const entries = persons.length
    const date = new Date()
    const body = `<p> Phonebook has info for ${entries} people </p>
        <p> Request Time: ${date} </p>`
    response.send(body)
})

// Getting Persons
app.get('/api/persons', (request,response) => {
    const data = request.query.name_like
    console.log('type0f(data)', typeof(data));
    if(data) {
        const p = persons.filter(p => p.name.toLowerCase().includes(data.toLowerCase()))
    response.json(p)
    } else
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = +request.params.id
    const findPerson = persons.find(p => p.id === id)
    if (findPerson)
    response.json(findPerson)
    else
    response.status(404).end()
})



app.delete('/api/persons/:id', (request, response) => {
    const id = +request.params.id
    persons = persons.filter(p => p.id != id)
    response.status(204).end()
})



const generateID = () => {
    const min = persons.length + 1;
    const max = persons.length * 2;
    const id = persons.length > 0 ?
        Math.random() * (max - min) + min : 0
    return Math.floor(id);
}



app.post('/api/persons/', (request, response) => {
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

    const hasDuplicates = persons.find(p => p.name === body.name)

    if (hasDuplicates) {
        return response.status(409).json({
            error: 'name must be unique!'
        })
    }

    const person = {
        id: generateID(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)

    response.json(persons)

})




app.listen(PORT, () => {
    console.log(`Serving running on PORT ${PORT}`);
   
})
