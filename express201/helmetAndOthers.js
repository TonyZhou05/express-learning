const express = require('express');
const app = express();
// const helmet = require('helmet');

// Always helmet when using expressd
// app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
// do some data unwrapping for json data
app.use(express.urlencoded({extended:false}));

// 1. static
// 2. json
// 3. url-encoded

app.post('/ajax', (req, res)=>{
    console.log(req.body);
    res.status(200).json(["Test", 1, 2, 3, 4]);
})

app.listen(3000);