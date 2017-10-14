const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Car, Task } = require('../db/schema')

router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
      const car = user.cars.id(req.params.carId)
      const task = car.tasks.id(req.params.id)
      res.json(task)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', async (req, res) => {
    try {
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.carId)
    const newTask = new Task(req.body)
    car.tasks.push(newTask)
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
    const updatedTask = req.body
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.carId)
    const task = car.tasks.id(req.params.id)
    task.title = updatedTask.title
    task.description = updatedTask.description
    task.progress = updatedTask.progress
    const saved = await user.save()
    res.json(saved)
    } 
    catch (err) {
      res.send(err)
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.carId)
    car.tasks.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  module.exports = router