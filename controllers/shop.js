const Product = require('../models/Product');

exports.getShop = (req, res) => {
    Product.fetchProducts((prodData) => {
        res.render('shop.ejs', {
            pageTitle: 'Shop',
            products: prodData,
        });
    });
};
