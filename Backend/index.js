const express = require('express')
const dbConnect = require('./db')
const User = require('./Model/User.js')
const app = express()
dbConnect()


const port = 5000
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/api/auth', require('./Routes/Auth.js'))
app.use('/api/product', require('./Routes/ProductRoute.js'))


app.listen(port, () => {
    console.log(`API is listening to port: ${port}`)
})