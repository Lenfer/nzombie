/**
 * Init index 
 */
exports.init = function(app){
	app.set('section', 'Main')
	app.get('/', indexPage.index)
	my.app = app
}


var my = {}
var indexPage = {
	/*
	* GET home page.
	*/
	index: function(req, res){ 
		res.render('index', {
			env: my.app.settings
		})
	}
}




