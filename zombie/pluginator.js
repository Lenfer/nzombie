// Cluster VARS
var 
	db = require('./../db_driver/mysql'), 
	log = require('logule').init(module, '<pluginator>'), 
	inspect = require('eyes').inspector({maxLength: 2048000})
exports.run = function(list){
	// Up DB Driver
	db.create(function(){
		// Run all issue
		list.forEach(function(issue){
			log.info('Create & run issue \'%s\' #%s', issue.name, issue.id)
			var plugin = require('./../plugins/' + issue.plugin);
			function __pluginator__(){
				plugin.run(issue.params, issue.id, function(result){
					db.insertResult(issue.id, result)
					setTimeout(__pluginator__, issue.interval)
				}) 
			}
			db.createTbl(issue.id, plugin.fields, __pluginator__)
		})	
	})
}	

