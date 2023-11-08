const Product = require('../models/Product');

exports.getAddProduct = (req, res) => {
    res.render('add-product.ejs', {
        pageTitle: 'Add Product',
    });
};

exports.postAddProduct = (req, res) => {
    const { name, qty } = req.body;
    const product = new Product(name, qty);
    product
        .addProduct()
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
};

exports.postDeleteProduct = (req, res) => {
    const { prodId } = req.params;
    Product.deleteProductById(prodId)
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
};
