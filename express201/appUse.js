const express = require('express');
const { it } = require('node:test');
const app = express();


// Express = 2 things
// 1. Router
// 2. Middleware that comprises a webframework

// Req ---- Middleware ---- Res
// Middleware function is any function that has access to the req, res, next Object
// 1. request comes in
// 2. We need to validate the userInfo, sometimes.We
// 3. We need to store some things in the DB
// 4. If there is data from the user we need to parse it and store it
// 5. Res

function validateUser(req, res, next) {
    res.locals.validated = true;
    console.log("VALIDATED RAN!");
    next();
}

// Register a middleware
// This will run validateUser on /admin, all methods
app.use('/admin', validateUser);
// This will run validateUser for all methods
app.use(validateUser);

app.get('/', (req, res, next)=> {
    res.send("<h1>Main Page</h1>");
    console.log(res.locals.validated);
})

app.get('/admin', (req, res, next)=> {
    res.send("<h1>Admin Page</h1>");
    console.log(res.locals.validated);
})

app.listen(3000);

