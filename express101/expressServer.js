// NODEJS is the language
// express is NODE, a node module

const express = require('express');
const path = require('path');
// An app is the express function (createApplication inside the Express module)

const app = express();

// serve up static files! Only 1 line ... take that nodejs!
app.use(express.static('public'));


app.all('/', (req, res) => {
    // Express handles the basic headers
    // Express handles the end
    // read in Node.html
    res.sendFile(path.join(__dirname + '/node.html'))
})

app.listen(3000, ()=>console.log("The server is listening on port 3000"));