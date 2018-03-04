var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var extend = require('extend');

var defOpts = {
	indexPage : 'index.ejs',
	ext : 'ejs'
};

module.exports = function(documentRoot, tplParams, opts ){
	var curOpts = extend({}, defOpts, opts);
	if(! documentRoot ){ 
		console.error("!!! ERROR: No Document root");
		console.error("Usage: require('connect-ejs')(documentRoot, tplParams, opts )");
		process.exit();
	}
	if(! fs.existsSync(documentRoot) ){ 
		console.error("!!! ERROR: Document root doen't exists", documentRoot)
		console.error("Usage: require('connect-ejs')(documentRoot, tplParams, opts )");
		process.exit();
	}

	return function(req, res, next){
		var webPath = req._parsedUrl.pathname;
		// log("Current Path", webPath, path.extname(webPath) );
		if( webPath.slice(-1) == '/' ){ webPath += curOpts.indexPage; }
		if( path.dirname(webPath) === '/tpl'){ return next(); }
		if( path.extname(webPath) == '' && fs.existsSync(documentRoot+webPath+'.' + curOpts.ext ) ){ webPath += '.' + curOpts; }
		if( path.extname(webPath) === '.' + curOpts  ){
			var filePath = documentRoot+webPath;
			// log("Path: ", filePath, fs.existsSync(filePath));
			if( fs.existsSync(filePath) ){
				var tplParamData = ( typeof tplParams === 'function' ) ? tplParams(req,res,next) : tplParams;
			  	ejs.renderFile(filePath, tplParamData, {}, function(err,str){
			    	if( err ){ 
			      		console.log("Error in ", filePath,err); 
			      		next();
			    	}
			    	res.end(str);
			  	} );
			  return; 
			}
		}
		return next();  
	}
};