const router = require('express').Router();

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.post('/delete-product/:prodId', adminController.postDeleteProduct);

module.exports = router;
