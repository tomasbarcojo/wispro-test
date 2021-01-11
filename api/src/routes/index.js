const { Router } = require('express');
// import all routers;
const Users = require('./user');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/users', Users);

module.exports = router;