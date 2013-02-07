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
	/**
	 * Run all issues in workers
	 * @param  {Array} list Issues list
	 */
	exports.run = function(list){
		// inspect(list)
		list.forEach(function(item){
			// create issue
			var worker = cluster.fork()
			// Send issue data
			worker.send(item)
			// Feedback from workers
			worker.on('message', function(l){
				var tp = l.tp
				if(	tp!='info' &&
					tp!='warn' &&
					tp!='error'&&
					tp!='debug'&&
					tp!='trace'&&
					tp!='line' &&
					tp!='zalgo'
				) tp = 'info'
				log[tp](l.msg)
			})

		})
	}	
}else if(cluster.isWorker){
	process.on('message', function(issue) {
		// Init and run periodical exec issue
		try{
			plugin = require('./../plugins/' + issue.plugin)
		}catch(e){
			process.send({msg:'Error on load ./../plugins/'+issue.plugin+': '+e, tp:'error'})
		}

		(function stR(){
			plugin.run(issue.inVars, cluster.worker.id, function(outVars){
				// process.send({msg:outVars})
			})
			setTimeout(stR, issue.interval);
		})()
		
		// process.send('Plugin "'+issue.plugin+'" runned')
		//test on existence issue in DB
		//run issue tick
	})
}