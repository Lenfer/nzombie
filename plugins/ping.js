var 
	net = require('net'), 
	config = {
		name: 'Ping', 
		version: '0.1', 
		fields: ['ping_ms']
	},
	log = require('logule').init(module, '<ping '+config.version+'>'), 
	_CEATE_TBL_ROWS = 
		'CREATE TABLE IF NOT EXISTS `testtetsts` (' +
			'`id` bigint(20) NOT NULL AUTO_INCREMENT,' +
			'`datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
			'`msg` varchar(50) DEFAULT NULL,' +
			'`ping_ms` int(11) DEFAULT NULL,' +
		'PRIMARY KEY (`id`),' +
		'KEY `datetime_ind` (`datetime`)' +
		') ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;'
	
	
exports.fields = config.fields
/**
 * Ping port and return result in ms
 * @param  {Object} params Params for ping
 * @param  {number} id Worker ID
 * @return {number}    Result of ping in ms
 */
exports.run = function(params, id, callback){
	// console.log(params, id)
	var  
		host = params[0], 
		port = params[1], 
		prefix = '', 
		postfix = '\t('+host+':'+port+', workerID:'+id+')'

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
		    client.write('I\'m a zombie, I want to eat your brains!')
		})
		.on('data', function() {
			var result = new Date() - _start
			log.info('%s%sms%s', prefix, result, postfix)
			callback({ping_ms: result})
			client.destroy();
		})
		.on('drain', function() {
			var result = new Date() - _start
			log.info('%s%sms%s', prefix, result, postfix)
			callback({ping_ms: result})
			client.destroy();
		})
		.on('error', function(e) {
			log.error(e.code, 'error')
			callback({msg: e.code})
		})
	
	// return 
}

exports.fields = config.fields