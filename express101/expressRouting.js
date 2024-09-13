const express = require('express');
const app = express();
const path = require('path');

// app has a few methods:
// 1. get GET
// 2. post POST
// 3. put UPDATE
// 4. delete DELETE
// 5. all - accept any methods

// Take 2 args:
// 1. path
// 2. callback to run if an HTTP request that matches THIS verb is made to the path in #1

// app.all('/', (req, res) => {
//     console.log(req);
//     res.send('<h1>This is the home page!!!!!!</h1>.')
// })

app.get('/', (req, res) => {
    res.send('<h1>This is the GET home page!!!!!!</h1>.')
})

app.post('/', (req, res) => {
    res.send('<h1>This is the POST home page!!!!!!</h1>.')
})

app.put('/', (req, res) => {
    res.send('<h1>This is the PUT home page!!!!!!</h1>.')
})

app.delete('/', (req, res) => {
    res.send('<h1>This is the DELETE home page!!!!!!</h1>.')
})




app.listen(3000, () => {
    console.log("The server is listening on port 3000");
});