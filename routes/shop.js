const express = require('express');

const shopController = require('../controllers/shop');

const router = express();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', orderConroller.getOrders);

router.get('/checkout', orderConroller.getCheckout);

module.exports = router;