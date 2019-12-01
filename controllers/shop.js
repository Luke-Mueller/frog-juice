const Product = require('../models/product');

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { 
      pageTitle: 'Your Cart',
      path: '/cart'
    });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', { 
    pageTitle: 'Checkout',
    path: '/checkout'
  });
}
exports.getIndex = (req, res, next) => {
  res.render('shop/index', { 
    pageTitle: 'Frog Juice the Shop',
    path: '/'
  });
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', { 
    pageTitle: 'Your Orders',
    path: '/orders'
  });
}
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', { 
      pageTitle: 'Frog Juice the Products',
      path: '/products',
      prods: products
    });
  });
}