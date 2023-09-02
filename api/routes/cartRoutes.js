const router = require('express').Router();

const cartController= require('../Controllers/cartController')


router.post('/addToCart', cartController.addToCart)


module.exports = router
