const repository = require('../repositories/productRepository.js');

async function serviceGetProduct() {
    try {
        const result = await repository.getProduct();
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

async function servicePostProduct(productName, productRating) {
    try {
        const result = await repository.postProduct(productName, productRating);
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`)
    }
}

async function serviceDeleteProduct(productId) {
    try {
        const result = await repository.deleteProduct(productId);
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`)
    }
}

module.exports = {
    serviceGetProduct: serviceGetProduct,
    servicePostProduct: servicePostProduct,
    serviceDeleteProduct: serviceDeleteProduct
}