const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      for(product of products) {
        const cartProductData = cart.products.find(prod => prod.id === product.id)
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        };
      };
      res.render('shop/cart', { 
        pageTitle: 'Your Cart',
        path: '/cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', { 
    pageTitle: 'Checkout',
    path: '/checkout'
  });
}

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', { 
        pageTitle: 'Frog Juice the Shop',
        path: '/',
        prods: products
      });
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', { 
    pageTitle: 'Your Orders',
    path: '/orders'
  });
}

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
      res.render('shop/product-list', { 
        pageTitle: 'Frog Juice the Products',
        path: '/products',
        prods: products
      });
    })
    .catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.render('shop/product-detail', {
        pageTitle: product.title,
        path: '/products',
        product: product
      });
    })
    .catch(err => console.log(err));
}
