// Global var
var 
	Z = global.Zombie, 
	log = require('logule').init(module, '<zombie>')

require('colors')


//Check ids in issues list
log.info('Checking ids in issues list')
for (var i = 0; i < global.Zombie.issues.length; i++) {
	for (var j = 0; j < global.Zombie.issues.length; j++) {
		if(i!=j && global.Zombie.issues[i].id==global.Zombie.issues[j].id){
			log.error('ID\'s ident in objects with number %s and %s', i, j)
			console.log('::::::::::::::::::::: ISSUE #%s :::::::::::::::::::::'.red, i)
			console.log(global.Zombie.issues[i])
			console.log('::::::::::::::::::::: ISSUE #%s :::::::::::::::::::::'.red, j)
			console.log(global.Zombie.issues[j])
			console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::'.red)
			process.exit()
		}
	}	
};



// Zombie want plugins brains
Z.plugins = {}
log.info('Run isuues i.cluster') 
require('./pluginator').run(Z.issues)
