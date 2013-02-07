// var 
// 	net = require('net'), 
// 	colors = require('colors')

// function pingTime(msg, host, port, _start){
// 	console.log('[%s:%s] >> %s: %sms'.green, host, port, msg, (new Date() - _start)*1)
// }

// function pingTimeE(msg, host, port, _start){
// 	console.log('[%s:%s] >> %s: %sms'.red, host, port, msg, (new Date() - _start)*1)
// }


// function ping(host, port){
// 	var 
// 		client  = new net.Socket(), 
// 		_start  = new Date()
// 	client.setTimeout(3000)
// 	client
// 		.connect(port, host, function() {
// 		    // console.log('Connected to %s:%s', host, port)
// 		    client.write('I am Chuck Norris!')
// 		})
// 		.on('data', function(data) {
// 			pingTime('data', host, port, _start);
// 			client.destroy();
// 		})
// 		.on('timeout', function(){
// 			pingTimeE('timeout', host, port, _start)
// 			client.destroy()
// 		})
// 		.on('end', function() {
// 			pingTime('end', host, port, _start)
// 		})
// 		.on('connect', function() {
// 			// pingTime('connect', host, port, _start)
// 		})
// 		.on('drain', function() {
// 			pingTime('D', host, port, _start)
// 			client.destroy()
// 		})
// 		.on('error', function(e) {
// 			pingTimeE('error:' + e.code, host, port, _start)
// 		})
// }


// function start(){
// 	ping('rd.scb.vzljot', 80)
// 	ping('svn.scb.vzljot', 80)
// 	ping('redmine.scb.vzljot', 80)
// 	ping('ns.scb.vzljot', 53)
// 	ping('ldap.scb.vzljot', 389)
// 	ping('jabber.scb.vzljot', 5222)
// 	ping('mysql.scb.vzljot', 3306)
// 	ping('svn.prog.vzljot', 3690)
// 	ping('svn.prog.vzljot', 3691)
// 	ping('localhost', 3000)
// 	ping('www.google.com', 80)
// 	ping('www.github.com', 80)
// 	ping('www.stackoverflow.com', 80)
// 	console.log('############# WAIT ###############'.rainbow)
// 	setTimeout(start, 10000)
// }

// start()

