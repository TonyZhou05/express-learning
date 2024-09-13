const express = require('express');
const ejs = require('ejs');
const helmet = require('helmet');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet({
    contentSecurityPolicy: false;
}));


// app.set(), takes 2 args:
// 1. key 
// 2. value
app.set("view engine", 'ejs');
app.set('views', [path.join(__dirname, 'views')]);
// 1. Express as we know if happens. This file
// 2. We define a view engine
// -   EJS
// -   Mustache
// -   Handlebars
// -   Pug
// 3. Inside one of our routes, we have a res.render
// 4. We pass that res.render 2 things:
// - the file we want to use
// - the data we want to send to that file
// 5. Express uses the node module for our specified view engine and parses the file.
// 6. The final result of this process is a compiled product of the things the browser can read: HTML, CSS, Javascript


app.get('/', (req, res, next)=>{
    res.render("index");
})

app.listen(3000);
