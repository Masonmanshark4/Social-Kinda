const router = require('express').Router();
const userRoutes = require('./api/userRoute');
const thoughtRoutes = require('./api/thoughtroute');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
