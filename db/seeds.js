require('dotenv') 
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

const { Task, Report, Car, User } = require('./schema.js')


const oilChange = new Task({
    title: 'Change Oil',
    description: 'Need to change my oil',
    progress: 'To Do'
})

const newTireReport = new Report({
    title: 'Got New Tires',
    description: 'Had to get new tire. My tread was dangerously low and needed new tires',
    location: 'Conyers Tire',
    satisfaction: 'C+'
})

const kiaForte = new Car({
    make: Kia,
    model: Forte,
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
    .then(() => console.log(`Successful save ${chris}`))
    .then(() => mongoose.connection.close())