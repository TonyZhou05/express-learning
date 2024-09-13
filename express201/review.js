const bodyParser = require("body-parser")
const path = require("path")
const { nextTick } = require("process")

Networking - http and tcp/ip
- stateless
- connectionless
- flexible
- HTTP message
- startline
- req - GET /blog http/1.1
- resL http/1.1 200 ok


201
Middle is any function that as access to req, res, and next
-- network on the outside, node/express development on the inside
-- appendFile.use, anytime you see a callback/function (req, res, next) => 
-- next() is the way to move a piece of middleware forward
-- req.json() -- bodyParser
-- helmet() -- 3rd party module

Request
-- req.ip - contains requesters ip
-- req.path - contains the requested path
- req.body - parsed data

Response
- res.send (.end()) - send text/html
- res.sendFile - send a file
- res.locals - is available through the res


express.json() 
express.urlencoded()

res.json()
res.render()

HTML, JS, CSS

