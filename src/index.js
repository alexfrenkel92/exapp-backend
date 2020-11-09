const app = require('./routes.js')

app.listen(8080, () => {
    console.log('Server is running')
})

app.get('/', (req, res) => {
    res.send('Works')
})