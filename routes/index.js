const restify = require('restify');
const path = require('path');

module.exports = (app) => {

    app.get('/.*', restify.plugins.serveStatic({
        'directory': 'public',
        'default': 'index.html'
    }));
}