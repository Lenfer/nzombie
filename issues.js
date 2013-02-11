var bInt = 5*1000


exports.issues = [
	{
		id: 'dpRedmine80',
		name: 'Ping redmine.scb.vzljot:80', 
		plugin: 'ping', 
		params: ['redmine.scb.vzljot', 80],
		interval: bInt
	}, 

	{
		id: 'dpStackoverflow80',
		name: 'Ping www.stackoverflow.com:80', 
		plugin: 'ping', 
		params: ['www.stackoverflow.com', 80], 
		interval: bInt
	},
		 
	{
		id: 'dpJabber5222',
		name: 'Ping jabber.scb.vzljot:5222', 
		plugin: 'ping', 
		params: ['jabber.scb.vzljot', 5222], 
		interval: bInt
	},

	{
		id: 'dpMySQL3306',
		name: 'Ping mysql.scb.vzljot:3306', 
		plugin: 'ping', 
		params: ['mysql.scb.vzljot', 3306], 
		interval: bInt
	},

	{
		id: 'dpSvnOld3691',
		name: 'Ping svn.prog.vzljot:3690', 
		plugin: 'ping', 
		params: ['svn.prog.vzljot', 3690], 
		interval: bInt
	},

	{
		id: 'dpGithub80',
		name: 'Ping www.github.com:80', 
		plugin: 'ping', 
		params: ['www.github.com', 80], 
		interval: bInt
	}
	
]
