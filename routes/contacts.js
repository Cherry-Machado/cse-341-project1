const router = require('express').Router();

const contactsControllers = require('../controllers/contacts');

router.get('/', contactsControllers.getAll);

router.get('/:id', contactsControllers.getSingle);

module.exports = router;