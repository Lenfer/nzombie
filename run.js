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

	if(process.argv.length > 2){
		process.argv.forEach(function (arg, index) {
			switch(arg){
				case '-web': 
				case '--w':
					require('./web/app'); 
					break;
				case '-puller':
				case '--p':
					require('./zombie/app'); 
					break;
				case '-help':
				case '--h':
					console.log('\tWelcom to N-Zombie monitor.')
					console.log('\tRun all "node run.js"')
					console.log('\tnode run [args]')
					console.log('\t   -web    \t --w \t\t Run only web server')
					console.log('\t   -poller \t --p \t\t Run only poller server')
					console.log('\t   -help   \t --h \t\t See this help')
					break;
			} 
		
		});	
	}else{
		require('./zombie/app')
		require('./web/app')
	}
	

}
