require('dotenv').config();
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    console.log("Req has beem made from browser to server");
    // res.send('Hello World!')
    res.send("<h1>Hi myself Roshan Sharma</h1>")
})
app.get('/facebook', (req, res) => {
    console.log("Req has beem made from browser to server");
    res.send('<h1>Facebook.com</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})