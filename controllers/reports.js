const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Car, Report } = require('../db/schema')

router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
      const car = user.cars.id(req.params.carId)
      const report = car.reports.id(req.params.id)
      res.json(report)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', async (req, res) => {
    try {
    const newReport = new Report()
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.carId)
    car.reports.push(newReport)
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
    const updatedReport = req.body
    const user = await User.findById(req.params.userId)
    const car = user.cars.id(req.params.carId)
    const report = car.reports.id(req.params.id)
    report.title = updatedReport.title
    report.description = updatedReport.description
    report.date = updatedReport.date
    report.location = updatedReport.location
    report.satisfaction = updatedReport.satisfaction
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
    car.reports.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  module.exports = router