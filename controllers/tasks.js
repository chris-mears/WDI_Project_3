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

  module.exports = router