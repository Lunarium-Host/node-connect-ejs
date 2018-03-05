# node-connect-ejs

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

A Middleware for connect to parse ejs files

```js
var documentRoot = __dirname + '/web';
var tplParams = { fromApp : "Hello world" };

var app = require('connect')();
app.use( require('connect-ejs')( documentRoot, tplParams, { indexPage : 'index.ejs', ext : 'ejs' } ) );

var server = require('http').createServer(app);
server.listen(1399);
```

## Getting Started

### Install node-connect-ejs

```sh
$ npm install connect-ejs
```
### Add middleware

Add to connect definition code:
```js
var documentRoot = __dirname + '/web';
var tplParams = { fromApp : "Hello World" };
app.use( require('connect-ejs')( documentRoot, tplParams ) );
```
Create folder in your project name `web` and create file `index.ejs` in it.

Insert into `web/index.ejs`:
```html
<html>
	<body>
		<%= fromApp %>
	</body>
</html>
```
Run your server and test it.
Out will be:
```html
<html>
	<body>
		Hello World
	</body>
</html>
```

# Variables

## ejsmiddlware( documentRoot, tplParams, opts );

### documentRoot
Is folder which all your ejs files exists

### tplParams
All variables that passing to your ejs file. It can be function ( params are same as in middleware `req,res,next` ) 

### opts 
options of middleware:


 - `indexPage` - index page for every folder. Default is `index.ejs`
 - `ext` - extension of ejs files. Default is `ejs`

# Errors
Errors using `console.error` and firing when problems in `documentRoot`. If error happens, server stops. Using `process.exit();`:
	
- `!!! ERROR: No Document root` - when you not sets documentRoot
- `!!! ERROR: Document root doesn't exists` - folder documentRoot doesn't exists



[npm-image]: https://img.shields.io/npm/v/connect-ejs.svg
[npm-url]: https://npmjs.org/package/connect-ejs
[downloads-image]: https://img.shields.io/npm/dm/connect-ejs.svg
[downloads-url]: https://npmjs.org/package/connect-ejs
