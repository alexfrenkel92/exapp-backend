const db = require('../database')

function getProduct () {
    return new Promise ((resolve, reject) => {
        const query = 'SELECT * FROM demoProducts';
        db.conn.query(query, (error, rows) => {
            if (error) {
                return reject(error)
            }
            return resolve(rows)
        })
    })
}

function postProduct (productName, productRating) {
    return new Promise ((resolve, reject) => {
        const query = 'INSERT INTO demoProducts (product_name, product_rating) VALUES (?,?)';
        db.conn.query(query, [productName, productRating], (error, rows) => {
            if (error) {
                return reject(error)
            }
            return resolve(rows)
        })
    })
}

function deleteProduct (productId) {
    return new Promise ((resolve, reject) => {
        const query = 'DELETE FROM demoProducts WHERE product_id = (?)';
        db.conn.query(query, [productId], (error, rows) => {
            if (error) {
                return reject(error)
            }
            return resolve(rows)
        })
    })
}

module.exports = {
    getProduct: getProduct,
    postProduct: postProduct,
    deleteProduct: deleteProduct
}
