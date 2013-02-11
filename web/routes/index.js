var 
	db = require('./../../db_driver/mysql'), 
	issues  = require('./../../issues').issues, 
	dformat = require('./../../node_modules/dateformat') , 
	log = require('logule').init(module, '<index>')

/*
* GET home page.
*/

db.create(function(){})

exports.graph = function(req, res){
	var isu = []
	res.render('index', { 
			title: 'Graphs', 
			issues: issues
		});
}

exports.graphData = function(req, res){
	if(
		   !req.query.id 
		|| !req.query.type
	){
		res.send(500, 'Query error')
		return;
	}
	
	try{
		db.getAll(req.query.id, function(e,r){
			if(e) {
				res.send(500, JSON.stringify(e))
				return;
			}
			var _res = []
			r.forEach(function(v){
				// _res.push([v.datetime.getTime(), v.ping_ms])
				// console.log(dformat(v.datetime, 'dddd, mmm d, HH:MM:ss'))
				_res.push({
					name: dformat(v.datetime, 'dddd, mmm d, HH:MM:ss') + ' ' + (v.msg||''), 
					color: v.msg ? '#FF0000' : 0,
					y: v.ping_ms/1000 || -0.001 , 
					x: v.datetime.getTime() - v.datetime.getTimezoneOffset()*60000
				})
			
			})
			log.info('Point in %s -> %s', req.query.id, _res.length)
			res.send(JSON.stringify(_res))
		})
	}catch(e){
		res.send(JSON.stringify(e))
	}
		
}