const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = path.dirname(process.mainModule.filename);