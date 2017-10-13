const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {type: String, default: 'New Task'},
    description: {type: String, default: 'Description'},
    progress: {type: String, default: 'To Do'}
})

const reportSchema = mongoose.Schema({
    title: {type: String, default: 'New Service Report'},
    description: {type: String, default: 'Description'},
    date: {type: Date, default: Date.now},
    location: String,
    satisfaction: String
})

const carSchema = mongoose.Schema({
    make: String,
    model: String,
    mileage: Number,
    year: Number,
    tasks: [taskSchema],
    reports: [reportSchema]
})

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    name: String,
    cars: [carSchema]
})


const Task = mongoose.model('Task', taskSchema)
const Report = mongoose.model('Report', reportSchema)
const Car = mongoose.model('Car', carSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Task, Report, Car, User
}