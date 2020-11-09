const express = require('express');
const router = express.Router();

const service = require('../services/productService.js');

router.get('/', async (req, res) => {
    try {
        const products = await service.serviceGetProduct();
        res.status(200).send(products);
    } catch (error) {
        console.log(`Fetching products failed: ${error}`);
        return res.status(400);
    }
})

router.post('/', async (req, res) => {
    const productName = req.body.productName;
    const productRating = req.body.productRating;

    try {
        const product = await service.servicePostProduct(productName, productRating);
        res.status(201)
        res.send(product);
    } catch (error) {
        console.log(`Posting product failed: ${error}`);
        return res.status(400);
    }
})

router.delete('/:id', async (req, res) => {
    const productId = req.params.id
    try {
        const deleteProduct = await service.serviceDeleteProduct(productId)
        res.status(200).send(deleteProduct);
    } catch (error) {
        console.log(`Deleting product failed: ${error}`);
        return res.status(400);
    }
})

module.exports = router;