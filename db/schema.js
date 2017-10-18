const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {type: String, default: 'New Task'},
    completed: {type: Boolean, default: false}
})

const reportSchema = mongoose.Schema({
    title: {type: String, default: 'New Service Report'},
    description: {type: String, default: 'Add Description'},
    date: {type: Date, default: Date.now},
    location: String,
    satisfaction: {type: String, default: ' '}
})

const carSchema = mongoose.Schema({
    title: {type: String, default: 'New Car'},
    mileage: Number,
    year: {type: Number, default: new Date().getFullYear()},
    tasks: [taskSchema],
    reports: [reportSchema]
})

const userSchema = mongoose.Schema({
    userName: {type: String, required: [true, 'No User Name'], unique: [true, 'Username already exists']},
    password: {type: String, required: [true, 'No password']},
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