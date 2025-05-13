const router = require('express').Router();

router.get('/', (req, res) => {res.send('Welcome to my Contacts Project!')});

router.use('/contacts', require('./contacts'));

module.exports = router;