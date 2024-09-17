const express = require('express');
let router = express.Router();

// instead of app.get(...) use router.get(...)
router.get('/', (req,res,next)=>{
    console.log("here");
    res.json({
        msg: "Router works"
    })
})

module.exports = router