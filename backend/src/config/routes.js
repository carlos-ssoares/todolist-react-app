const express = require('express')

module.exports = function (server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../Api/Todo/todoService')
    todoService.register(router, '/todos')
}
