const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Car } = require('../db/schema')

router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
      const car = user.cars.id(req.params.id)
      res.json(car)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', async (req, res) => {
    try {
    const user = await User.findById(req.params.userId)
    const newCar = new Car(req.body.car)
    user.cars.push(newCar)
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
    const updatedCar = req.body.car
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.id)
    car.make = updatedCar.make
    car.model = updatedCar.model
    car.mileage = updatedCar.mileage
    car.year = updatedCar.year
    car.tasks = updatedCar.tasks
    car.reports = updatedCar.reports
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })
  
  router.delete('/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.userId)
    user.cars.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  module.exports = router