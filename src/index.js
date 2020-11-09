const app = require('./routes.js')

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on Port ' + PORT)
})

app.get('/', (req, res) => {
    res.send('Works')
})