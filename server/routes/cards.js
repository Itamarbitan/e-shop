const express = require('express');
const router = express.Router();
const cards = require('../controllers/cards');

router.get('/', cards.list);
router.get('/:id', cards.details);
router.get('/user/:id', cards.userCards);
router.get('/cart/:id', cards.getCart);

router.post('/', cards.addNew);
router.patch('/:id', cards.updateDetails);
router.delete('/:id', cards.deleteCard);
router.post('/cart/:id', cards.deleteProductFromCart);

module.exports = router;
