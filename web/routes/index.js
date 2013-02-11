var db = require('./../../db_driver/mysql')

/*
* GET home page.
*/

db.create(function(){})
// db.getAll('dpStackoverflow80', function(e, r){console.log(r)})

exports.dpStackoverflow80 = function(req, res){
	var pings = db.getAll('dpStackoverflow80', function(e,r){
		if(e) {
			res.send('Error')	
			return;
		}
		var _res = []
		r.forEach(function(v){
			_res.push(v.ping_ms/1000)
		})
		res.render('index', { 
			dataName: 'dpStackoverflow80', 
			title: 'Express', 
			data: _res.join(',')
		});
	})
};



exports.dpRedmine80 = function(req, res){
	var pings = db.getAll('dpRedmine80', function(e,r){
		if(e) {
			res.send('Error')	
			return;
		}
		var _res = []
		r.forEach(function(v){
			_res.push(v.ping_ms/1000)
		})
		res.render('index', { 
			dataName: 'dpRedmine80', 
			title: 'Express', 
			data: _res.join(',')
		});
	})
};