var log = require('logule').init(module, '<drv.mysql>')
/**
 * Base query to create new issue table
 * @type {[type]}
 */
var _CEATE_TBL_ROWS = {
	start: 
		'CREATE TABLE IF NOT EXISTS `', 
	start2:
		'` (' +
			'`id` bigint(20) NOT NULL AUTO_INCREMENT,' +
			'`datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
			'`msg` varchar(50) DEFAULT NULL,', 
	end: 
		'PRIMARY KEY (`id`),' +
			'KEY `datetime_ind` (`datetime`)' +
			') ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;', 
	getQuery: function(tblName, middlesF){
		if(!middlesF) return 'Not set middle part';
		var m = ''
		middlesF.forEach(function(f){
			m += '`'+f+'` int(11) DEFAULT NULL, '
		})
		return this.start + tblName + this.start2 + m + this.end
	}
}

var mysql = require('mysql'), connection

/**
 * Connect to Database
 * @param  {Function} callback Callback
 */
exports.create = function(callback){
	connection = mysql.createConnection(global.Zombie.config.database)
	connection.connect(function(err){
		if(err){
			log.error('create %s', err)
			process.exit()	
		}
		log.info('Connect to DB - OK') 
		callback()
	})
	return connection
}

/**
 * Check and creatge if no exist table with id name
 * @param  {number}   id       Table name
 * @param  {array}    fields   Array of fields name in DB
 * @param  {Function} callback Callback function execute on DB add
 */
exports.createTbl = function(id, fields, callback){
	log.info('Create table \'%s\' if not exist', id)
	connection.query("SHOW TABLES LIKE '"+id+"'", function(err, rows){
		if(rows.length === 0){
			connection.query(_CEATE_TBL_ROWS.getQuery(id, fields), function(err, rows){
				if(err) {
					log.error('createTbl %s', err)
					process.exit()
				} 
				callback()
			})
		}else{
			callback()
		}
	})
}

exports.insertResult = function(id, res){ 
	var f = '', v = '' 
	for(key in res){
		f += '`'+key+'`, '
		v += '\''+res[key]+'\', '
	}
	var q = 'INSERT INTO `'+ id + '` ('+f.substr(0, f.length-2)+') VALUES ('+v.substr(0, v.length-2)+');'
	// console.log(q)
	connection.query(q, function(err){
		if(err) log.error('insertResult %s', err)
	})
}


exports.getAll = function(id, callback){
	connection.query('SELECT * FROM ' + id + ' LIMIT 1000;', callback)
}


exports.getDay = function(id, callback){
	connection.query('SELECT * FROM ' + id + ' LIMIT 288;', callback)
}