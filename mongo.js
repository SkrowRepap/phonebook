const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide password as an argument: node mongo.js <password>');
    process.exit(1)
}

const password = process.argv[2];

const url =
    `mongodb+srv://skrowrepap:${password}@cluster0.yuorc.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model("Person", personSchema);

if (process.argv.length == 3) {
    console.log('Phonebook list:');
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number);
        })
        mongoose.connection.close()
    })

}

else {
    const contactName = process.argv[3];
    const contactNumber = process.argv[4];

    console.log(`Adding contact ${contactName} - ${contactNumber}...`)

    const person = new Person({
        name: contactName,
        number: contactNumber
    })
    person.save().then(result => {
        console.log(`Contact: ${contactName} is saved!`);
        mongoose.connection.close()
    })

}


