/**
 * Init index 
 */
exports.init = function(app){
	app.set('section', 'Contact')
	app.get('/contact', indexPage.index)
	my.app = app
}


var my = {}
var indexPage = {
	/*
	* GET home page.
	*/
	index: function(req, res){ 
		res.redirect('https://github.com/Lenfer')
		// res.render('contact', {
		// 	env: my.app.settings, 
		// 	post: req.query
		// })
	}
}




