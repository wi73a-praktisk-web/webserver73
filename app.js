const restify = require('restify');
const path = require('path');

const port = process.env.port || 5000;

const app = restify.createServer({
    name: 'webserverTest',
    version: '1.0.0'
})

require(path.join(__dirname, 'routes', 'index'))(app);


app.listen(port, function (err) {
    console.log(err);
    console.log('%s is listening on %s', app.name, port);
})