/**
 * Init index 
 */
exports.init = function(app){
	app.set('section', 'Singin')
	app.get('/singin', singinPage.index)
	my.app = app
}


var my = {}
var singinPage = {
	/*
	* GET singin page.
	*/
	index: function(req, res){ 
		res.render('singin', {
			env: my.app.settings
		})
	}
}




