# node-connect-ejs
A Middleware for connect to parse ejs files

```JavaScript
var documentRoot = __dirname + '/web';
var tplParams = { fromApp : "Hello world" };

var app = require('connect')();
app.use( require('connect-ejs')( documentRoot, tplParams, { indexPage : 'index.ejs', ext : 'ejs' } ) );

var server = require('http').createServer(app);
server.listen(1399);
```
