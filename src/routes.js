const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const products = require('./controller/productController');
const tangoCards = require('./controller/tangoCardsController');

app.use('/api/products', products)

app.use('/api/postorder', tangoCards)

module.exports = app;
