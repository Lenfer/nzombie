// Cluster VARS
var 
	db = require('./../db_driver/mysql'), 
	log = require('logule').init(module, '<pluginator>'), 
	inspect = require('eyes').inspector({maxLength: 2048000})
exports.run = function(list){
	// Up DB Driver
	db.create(function(){
		// Run all issue
		list.forEach(function(i){
			log.info('Create & run issue \'%s\' #%s', i.name, i.id)
			var plugin = require('./../plugins/' + i.plugin);
			function __pluginator__(){
				plugin.run(i.params, i.id, function(result){
					db.insertResult(i.id, result)
					setTimeout(__pluginator__, i.interval)
				})
			}
			db.createTbl(i.id, plugin.fields, __pluginator__)
		})	
	})
}	

