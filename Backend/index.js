const express = require('express')
const dbConnect = require('./db')
const app =  express()
dbConnect()


const port=5000
app.use(express.json())
app.get('/',(req, res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`API is listening to port: ${port}`) 
})