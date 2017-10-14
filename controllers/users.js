const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/signin/', async (req, res) => {
    try{
      const signIn = req.body.user
      const user = await User.findOne({'userName': signIn.userName, 'password': signIn.password})
      res.json(user)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', async (req, res) => {
    try {
      const newUser = new User(req.body)
      const saved = await newUser.save()
      res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  router.get('/:id', async (req, res) => {
    try {
      const username = req.params.id
      const user = await User.findOne({'userName': username})
      res.json(user)
    } catch (err) {
      res.send(err)
    }
  })
  


module.exports = router