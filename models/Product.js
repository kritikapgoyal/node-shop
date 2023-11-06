const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../', 'data', 'products.json');

const readData = (cb) => {
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            return cb([]);
        }
        const parsedData = JSON.parse(data);
        return cb(parsedData);
    });
};

module.exports = class Product {
    constructor(name, qty) {
        this.name = name;
        this.qty = qty;
    }

    addProduct() {
        readData((prodData) => {
            prodData.push(this);
            fs.writeFile(dataPath, JSON.stringify(prodData), (err) => {
                console.error('Error writing file - ', err);
            });
        });
    }

    static fetchProducts(cb) {
        readData(cb);
    }
};
