var 
	net = require('net'), 
	config = {
		name: 'Ping', 
		version: '0.1', 
		fields: ['ping_ms']
	}, 
	_CEATE_TBL_ROWS = 
		'CREATE TABLE IF NOT EXISTS `testtetsts` (' +
			'`id` bigint(20) NOT NULL AUTO_INCREMENT,' +
			'`datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
			'`msg` varchar(50) DEFAULT NULL,' +
			'`ping_ms` int(11) DEFAULT NULL,' +
		'PRIMARY KEY (`id`),' +
		'KEY `datetime_ind` (`datetime`)' +
		') ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;'
	
	config.prefix = '[' + config.name + ' v' + config.version + '] '

// Send log message to master
function log(msg, tp){
	process.send({
	 	msg: config.prefix + msg + config.postfix, 
	 	tp: tp
	})
}


/**
 * Ping port and return result in ms
 * @param  {Object} params Params for ping
 * @param  {number} id Worker ID
 * @return {number}    Result of ping in ms
 */
exports.run = function(params, id, callback){
	var  
		host = params[0], 
		port = params[1]
	config.postfix = '\t\t\t('+host+':'+port+', workerID:'+id+')'

	var 
		client  = new net.Socket(), 
		_start  = new Date()
	client.setTimeout(5000)
	// callback proxy
	function end(result){
		callback({ping_ms: result})
	}
	// Start ping socket
	client
		.connect(port, host, function() {
		    client.write('I am Chuck Norris!')
		})
		.on('data', function() {
			var result = new Date() - _start
			log(result+'ms')
			callback({ping_ms: result})
			client.destroy();
		})
		.on('drain', function() {
			var result = new Date() - _start
			log(result+'ms')
			callback({ping_ms: result})
			client.destroy();
		})
		.on('error', function(e) {
			log(e.code, 'error')
			callback({error: e.code})
		})
	
	// return 
}

exports.fields = config.fields