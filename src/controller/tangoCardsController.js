const express = require('express');
const axios = require('axios');
const router = express.Router();

const url = 'https://integration-api.tangocard.com/raas/v2/orders'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

router.post('/', async (req, res) => {
    const order = req.body;
    // console.log(order)

    axios.post(url, order, {
        headers: {
            Authorization: `Basic ${key}`
        }
    })
        .then((response) => {
            console.log('RESPONSE DATA BELOW')
            console.log(response)
            res.status(201)
            res.send(response.data)
        })
        .catch(error => {
            console.log('EEERRROOOOOOOOOOORRRRR')
            console.log(error.response.data)
            res.status(400)
            res.send(error.response.data)
        })
})

module.exports = router;