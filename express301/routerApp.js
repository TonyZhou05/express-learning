const express = require('express');
const app = express();
const helmet = require('helmet');


app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

const router = require('./theRouter');
const userRouter = require('./userRouter');
// add a middleware using the router called router
app.use('/', router);
app.use('/user', userRouter);

app.listen(3000);