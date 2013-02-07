exports.issues = [
	/**
	 * PING ISSUE
	 */
	{
		id: 'dpRedmine80',
		name: 'Ping redmine.scb.vzljot:80', 
		plugin: 'ping', 
		inVars: ['redmine.scb.vzljot', 80], 
		outVars: ['ping_ms'], 
		interval: 10000
	}, 
		
	/**
	 * PING ISSUE
	 */
	{
		id: 'dpJabber5222',
		name: 'Ping jabber.scb.vzljot:5222', 
		plugin: 'ping', 
		inVars: ['jabber.scb.vzljot', 5222], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	/**
	 * PING ISSUE
	 */
	{
		id: 'dpMySQL3306',
		name: 'Ping mysql.scb.vzljot:3306', 
		plugin: 'ping', 
		inVars: ['mysql.scb.vzljot', 3306], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	// /**
	//  * PING ISSUE
	//  */
	{
		id: 'dpSVN_OLD3691',
		name: 'Ping svn.prog.vzljot:36912', 
		plugin: 'ping', 
		inVars: ['svn.prog.vzljot', 36912], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	// /**
	//  * PING ISSUE
	//  */
	{
		id: 'dpIP3000',
		name: 'Ping 10.1.50.159:3000', 
		plugin: 'ping', 
		inVars: ['10.1.50.159', 3000], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	/**
	 * PING ISSUE
	 */
	{
		id: 'dpGoogle80',
		name: 'Ping www.google.com:80', 
		plugin: 'ping', 
		inVars: ['www.google.com', 80], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	/**
	 * PING ISSUE
	 */
	{
		id: 'dpGithub80',
		name: 'Ping www.github.com:80', 
		plugin: 'ping', 
		inVars: ['www.github.com', 80], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	/**
	 * PING ISSUE
	 */
	{
		id: 'dpGithub443',
		name: 'Ping https://github.com/', 
		plugin: 'ping', 
		inVars: ['www.github.com', 443], 
		outVars: ['ping_ms'], 
		interval: 10000
	},

	/**
	 * PING ISSUE
	 */
	{
		id: 'dpStackoverflow80',
		name: 'Ping www.stackoverflow.comt:80', 
		plugin: 'ping', 
		inVars: ['www.stackoverflow.com', 80], 
		outVars: ['ping_ms'], 
		interval: 10000
	},
]
