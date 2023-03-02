// define tools express and router
const express = require('express')
const Router = express.Router()

//import all controller
const { userController } = require('./../controllers')


//path nya
Router.post('/register', userController.register)
Router.patch('/activation/:id', userController.activation)
Router.get('/getStatus/:id', userController.getStatusUser)
Router.post('/login', userController.userLogin)
Router.post('/confirm-email', userController.confirmEmail)
Router.patch('/reset-password/:id', userController.resetPassword)

//
module.exports = Router