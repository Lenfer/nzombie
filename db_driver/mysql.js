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

var mysql = require('mysql');

var connection = false, _log  =false

exports.create = function(log){
	_log = log
	connection = mysql.createConnection(global.Zombie.config.database)
	connection.connect(function(err){
		if(err){
			log.error(err)
			process.exit()	
		}
		log.info('Connect to DB - OK') 
	})
	return connection
}

exports.createTblIfNotExist = function(id, fields){
	connection.query("SHOW TABLES LIKE '"+id+"'", function(err, rows){
		if(rows.length === 0){
			// console.log(_CEATE_TBL_ROWS.getQuery(id, fields))
			connection.query(_CEATE_TBL_ROWS.getQuery(id, fields), function(err, rows){
				_log.error(err)
				if(err) process.exit()
			})
		}
	})
}


exports.insertResult = function(results, fields){

}



// 
// 
//   host     : 'mysql.scb.vzljot',
//   user     : 'lenfer',
//   password : 'group5313',
//   database: 'zombieDB'
// });

// connection.connect(function(err){
// 	if(err){
// 		console.log(err)	
// 	}
// 	console.log('END')
// 	process.exit()

// });



// connection.end();