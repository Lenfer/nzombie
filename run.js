// Libs
var art = require('ascii-art');
art.font('Zombie comes!', 'drpepper', 'red', function(rendered){
    console.log(rendered);
    _run()
});
function _run(){
	// Globals
	global.Zombie = {}
	// Zombie eat config
	global.Zombie.config = require('./config.js').config
	global.Zombie.issues = require('./issues.js').issues

	var 
		_zombie = require('./zombie/app')
		// web = require('./web/app')	
}
