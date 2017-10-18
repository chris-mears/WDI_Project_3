require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise;

const { Task, Report, Car, User } = require('./schema.js')


const oilChange = new Task({
    title: 'Change Oil',
    description: 'Need to change my oil',
    completed: false
})

const newTireReport = new Report({
    title: 'Got New Tires',
    description: 'Had to get new tire. My tread was dangerously low and needed new tires',
    location: 'Conyers Tire',
    satisfaction: 'C+'
})

const kiaForte = new Car({
    title: 'Kia Forte',
    mileage: 88500,
    year: 2014,
    tasks: [oilChange, {}],
    reports: [newTireReport, {}]
})

const chris = new User({
    userName: 'chrismears',
    password: 'mears',
    name: 'Chris Mears',
    cars: [kiaForte]
})

User.remove({})
.then(() => chris.save())
.then(() => console.log(`Successful save ${chris.name}`))
.then(() => mongoose.connection.close())
.catch((error) => console.log(error))