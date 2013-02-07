// Cluster VARS
var 
	cluster = require('cluster'), 
	log = require('logule').init(module, '<i.cluster>'), 
	inspect = require('eyes').inspector({maxLength: 2048000})
/**
 * Main Cluster Application
 */
if(cluster.isMaster){
	// Setup cluster env
	cluster.setupMaster({
		exec : "zombie/issue_cluster.js"
	})
	
	cluster.on('death', function(worker) {
		log.warn('Worker ' + worker.pid + ' died.');
	});
	// Require exports
	exports.run = function(list){
		// inspect(list)
		list.forEach(function(item){
			log.info('Run issue "%s"', item.name);
			// Run issue in WORKER
			cluster.fork().send(item)
		})
	}	
}else if(cluster.isWorker){
	process.on('message', function(issue) {
		// Init and run periodical exec issue
		var plugin = false
		try{
			console.log(
				'22:25:33 - WORK- <%s#%sx%s> - Load source.', 
				issue.plugin, 
				cluster.worker.id,
				process.pid				
			)
			plugin = require('./../plugins/' + issue.plugin)
		}catch(e){
			console.error('Error on load ./../plugins/%s: %s', issue.plugin, e)
		}
		
		console.log(
			'22:25:33 - WORK#%s- <%s> - answer %s', 
			cluster.worker.id,
			issue.plugin,  
			plugin.run(issue.inVars, cluster.worker.id)
		)


		//test on existence issue in DB
		//run issue tick
	})
}