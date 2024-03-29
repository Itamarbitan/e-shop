var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const users = require('../controllers/users');

router.get('/:id', auth, users.details);
router.post('/cart', users.addToCart)

/* authentication */
router.post('/login', users.login);
router.post('/signup', users.signup);

module.exports = router;
