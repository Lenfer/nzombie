exports.config = {
	database: {
		host     : 'mysql.scb.vzljot',
		user     : 'lenfer',
		password : 'group5313',
		database: 'zombieDB'
	}, 
	plugins: [
		'ping', 
		'http', 
		'speed' 
	],
	users: {
		lenfer: '1q2w3e', 
		ds: '12345'
	}
}