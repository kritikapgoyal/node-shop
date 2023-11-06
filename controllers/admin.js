const Product = require('../models/Product');

exports.getAddProduct = (req, res) => {
    res.render('add-product.ejs', {
        pageTitle: 'Add Product',
    });
};

exports.postAddProduct = (req, res) => {
    const { name, qty } = req.body;
    const product = new Product(name, qty);
    product.addProduct();
    res.redirect('/');
};
