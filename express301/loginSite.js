const express = require('express');
const ejs = require('ejs');
const helmet = require('helmet');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use('/', validateUser);

app.set("view engine", 'ejs');
app.set('views', [path.join(__dirname, 'views')]);

// Use middleware to set local message depending on the query param
app.use((req, res, next)=>{
    // Send me on to the next piece of middleware
    if (req.query.msg === 'fail') {
        res.locals.msg = `Sorry. This username and password combination does not exist`
    }else {
        res.locals.msg = ''
    }
    next();
})

function validateUser(req, res, next){
    res.locals.validated = true;
    next();
}

app.post('/process_login', (req, res, next)=>{
    // req.body is made by urlencoded , which parses the http message for sent data
    const password = req.body.password;
    const username = req.body.username;
    // check the database to check if user credentials are valid
        // save their user name in a cookie
    if (password === "x") {
        // res.cookie takes 2 args
        // 1. name of the cookie
        // 2. value to set it to
        res.cookie('username', username);
        // res.redirect takes 1 arg
        // 1. where to send the browser
        res.redirect('/welcome');
    } else {
        // The "?" is a special character in a URL

        res.redirect('/login?msg=fail');
    }
    // if they are valid, send them to the welcome page
})

app.get('/welcome', (req, res, next)=>{
    res.render("Welcome", {
        username: req.cookies.username
    });
})


// app.param() takes 2 args:
// 1. param to look for in the route
// 2. the callback to run (with the usuals)
app.param('id', (req, res, next, id)=>{
    console.log("Params called", id);
    next();
})

// in a route anytime something has a : in front it is a wildcard
// wildcard, will match anything in that slot
app.get('/story/:id', (req, res, next)=>{
    // the req.params object always exist
    // It will have a property for each fildcard in the route
    res.send(`<h1>Story ${req.params.story_id}</h1>`)
})


app.get('/logout', (req, res, next)=> {
    // res.clearCookie takes 1 arg:
    // 1. Cookie to clear
    res.clearCookie('username');
    res.redirect('/login');
})

app.get('/login', (req, res, next)=>{
    // The query string is where you put insecure data
    console.log(req.query)
    // the data in the 2nd arg is going to be appended to res.locals
    res.render("login");
})

app.listen(3000);