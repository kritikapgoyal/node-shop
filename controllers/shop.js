const Product = require('../models/Product');

exports.getShop = (req, res) => {
    Product.fetchProducts()
        .then(([prodData]) => {
            res.render('shop.ejs', {
                pageTitle: 'Shop',
                products: prodData,
            });
        })
        .catch((err) => console.error(err));
};
