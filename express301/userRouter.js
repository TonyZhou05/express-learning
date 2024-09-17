const express = require('express');
let userRouter = express.Router();

function validateUser(req, res, next){
    res.locals.validated = true;
    console.log("validated");
    next();
}

// validateUser, is middleware that will Only be added to this router
// In other words, the main router doesn't know about it

userRouter.use(validateUser);

// instead of app.get(...) use router.get(...)
userRouter.get('/', (req,res,next)=>{
    res.json({
        msg: "User router works"
    })
})

module.exports = userRouter