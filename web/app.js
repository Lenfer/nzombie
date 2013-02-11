
/**
* Module dependencies.
*/

var 
	  express = require('express')
	, http = require('http')
	, path = require('path')
	, log = require('logule').init(module, '<webui>')

var app = express()

app.configure(function(){
	app.set('port', process.env.PORT || 3000)
	app.set('views', __dirname + '/views')
	app.set('view engine', 'ejs')
	app.use(express.favicon())
	app.use(express.logger('dev'))
	app.use(express.bodyParser())
	app.use(express.methodOverride())
	app.use(express.cookieParser('your secret here'))
	app.use(express.session())
	app.use(app.router)
	app.use(express.static(path.join(__dirname, 'public')))
})

app.configure(function(){
	app.set('title', 'N-Zombie')
	app.set('version', '0.1') 
	app.set('git', 'https://github.com/Lenfer/nzombie') 
})

app.configure('development', function(){
	app.use(express.errorHandler())
})



require('./routes/index').init(app)
require('./routes/charts').init(app)
require('./routes/contact').init(app)
require('./routes/singin').init(app)


// require('./routes/data').init(app)
// require('./routes/index').init(app)
// app.get('/data', require('./routes/').index)



http.createServer(app).listen(app.get('port'), function(){
	log.info('up on port %s', app.get('port'))
})
