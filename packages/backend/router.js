const { Router } = require('express');
const superheroRouter = require('./routers/superheroRouter');

const router = Router();

router.use('/superheroes', superheroRouter);

module.exports = router;