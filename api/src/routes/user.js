const server = require('express').Router()
// const authenticate = require('../utils/auth')
const { getUsers, createUser, modifyUser, deleteUser, loginUser, getOneUser, userLogout } = require('../controllers/user')
const { generateUsers } = require('../controllers/createUsers')

server.get('/', getUsers)

server.post('/createUser', createUser)

server.post('/login', loginUser)

server.get('/:id', getOneUser)

server.put('/editUser/:id', modifyUser)

server.delete('/deleteUser/:id', deleteUser)

server.post('/seed', generateUsers)

module.exports = server