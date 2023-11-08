const fs = require('fs');
const path = require('path');
const db = require('../db');

const dataPath = path.join(__dirname, '../', 'data', 'products.json');

module.exports = class Product {
    constructor(name, qty) {
        this.name = name;
        this.qty = qty;
    }

    addProduct() {
        return db.execute('INSERT INTO products (name, qty) VALUES(?, ?)', [
            this.name,
            this.qty,
        ]);
    }

    static fetchProducts() {
        return db.execute('SELECT * FROM products');
    }

    static deleteProductById(id) {
        return db.execute('DELETE FROM products WHERE id = ?', [id]);
    }
};
