const moment = require('moment');

const sortProduct = products => {
  return products.filter(productIsAfter2000).sort(sortByProductDate).reduce(formatProduct, {});
};

const productIsAfter2000 = (product) => moment(product.dateAdded).isAfter('2000-01-01', 'year');


const formatProduct = (acc, product) => {
  if (!acc[product.name]) {
    acc[product.name] = [];
  }
  acc[product.name].push({
    name: product.name,
    year: moment(product.dateAdded).year(),
    monthOfYear: moment(product.dateAdded).month() + 1,
    quantity: product.quantity
  });
  return acc;
};

const sortByProductDate = (product1, product2) => product1.dateAdded - product2.dateAdded;

module.exports = {
  title: 'Exercise 1',
  run: sortProduct
};
