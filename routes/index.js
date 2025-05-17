const router = require('express').Router();
router.use('/', require('./swagger'));

//#swagger.tags=["Hello World"];
//router.get('/', (req, res) => {res.send('Welcome to my Contacts Project!')});

router.use('/contacts', require('./contacts'));

module.exports = router;