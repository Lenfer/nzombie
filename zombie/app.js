// Global var
var 
	Z = global.Zombie, 
	CFG = global.Zombie.config
	log = require('logule').init(module, '<zombie>');


// Zombie want plugins brains
Z.plugins = {}
require('./issue_cluster').run(Z.issues)
