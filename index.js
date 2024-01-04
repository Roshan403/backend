require('dotenv').config();
const express = require('express')
const app = express()
// const port = 3000

const dataBase = {

    id: "6587b928fdb7e709a39697a4",
    FirstName:
        "Roshan",
    LastName:
        "Sharma",
    Gender:
        "Male",
    PhoneNumber:
        9845536010,
    EmailAddress:
        "roshuacharya333@gmail.com",
    Password:
        "roshan123",
    AboutYourself:
        "xyz",
    Country:
        "Nepal",
    PermanentAddress:
        "Salyan",
    City:
        "Salyan",
    Province:
        "Karnali",
    Municipality:
        "Kumakh",
};
app.get('/', (req, res) => {
    console.log("Req has beem made from browser to server");
    // res.send('Hello World!')
    res.send("<h1>Hi myself Roshan Sharma</h1>")
})
app.get('/facebook', (req, res) => {
    console.log("Req has beem made from browser to server");
    res.send('<h1>Facebook.com</h1>')
})
app.get('/github', (req, res) => {
    console.log("Req has beem made from browser to server");
    res.json(dataBase);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})