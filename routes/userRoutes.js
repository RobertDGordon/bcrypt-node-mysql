const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res)
})

router.get("/:id", (req, res) => {
  Controllers.userController.getUsersById(req, res)
})

router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res)
})

router.post("/login", (req, res) => {
  Controllers.userController.getUsersByEmail(req, res)
})

router.put('/:id', (req, res) => {
  Controllers.userController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
  Controllers.userController.deleteUser(req, res)
})

module.exports = router;