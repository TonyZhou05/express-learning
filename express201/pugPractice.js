const express = require('express');
const ejs = require('ejs');
const hbs = require('hbs');
const helmet = require('helmet');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use('/', validateUser);

app.set("view engine", 'pug');
app.set('views', [path.join(__dirname, 'views')]);

function validateUser(req, res, next){
    res.locals.validated = true;
    next();
}

app.get('/', (req, res, next)=>{
    // the data in the 2nd arg is going to be appended to res.locals
    res.render("index", {
        msg: {
            countries: [
                "China", 
                "US"]
        },
        msg2: "Success again"
    });
})

app.listen(3000);