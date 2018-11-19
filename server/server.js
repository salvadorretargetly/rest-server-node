const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("./config/config.js")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function(req, res) {

    //res.send('hello world');
    res.json('Hello World')
})


app.get('/usuario', function(req, res) {
    res.json('GET usuario');
})


app.get('/usuario', function(req, res) {
    res.json('GET usuario');
})

app.post('/usuario', function(req, res) {

    let body = req.body;


    if (body.name === undefined) {

        res.status(400).json({
            ok: false,
            message: "Invalid post"
        })

    } else {
        res.json({
            body
        });
    }



})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando ", process.env.PORT);
})