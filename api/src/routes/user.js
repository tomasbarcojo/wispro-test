const server = require('express').Router()
// const authenticate = require('../utils/auth')
const { getUsers, createUser, modifyUser, deleteUser, loginUser, getOneUser, userLogout } = require('../controllers/user')

server.get('/', getUsers)

server.post('/createUser', createUser)

server.get('/logout', userLogout)

server.post('/login', loginUser)

server.get('/:id', getOneUser)

server.put('/editUser/:id', modifyUser)

server.delete('/deleteUser/:id', deleteUser)

module.exports = server