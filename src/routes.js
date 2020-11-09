const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const products = require('./controller/productController');

app.use('/api/products', products)

module.exports = app;
