/**
 * server
 */

// public modules
var express = require('express');
var path = require('path');
var http = require('http');



// create server
var app = express();

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/')));

app.listen(8888);
