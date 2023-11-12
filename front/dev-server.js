const express = require('express');
const app = express();
const path = require('path');

const morgan = require('morgan');
app.use(morgan('combined'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/metalTail.html', (req, res) => res.sendFile(path.join(__dirname + '/metalTail.html')));
app.get('/sofit.html', (req, res) => res.sendFile(path.join(__dirname + '/sofit.html')));
app.get('/gutter.html', (req, res) => res.sendFile(path.join(__dirname + '/gutter.html')));
app.get('/insulation.html', (req, res) => res.sendFile(path.join(__dirname + '/insulation.html')));
app.get('/profnastil.html', (req, res) => res.sendFile(path.join(__dirname + '/profnastil.html')));
app.get('/additionalElements.html', (req, res) => res.sendFile(path.join(__dirname + '/additionalElements.html')));
app.get('/foldedRoof.html', (req, res) => res.sendFile(path.join(__dirname + '/foldedRoof.html')));
app.get('/fence.html', (req, res) => res.sendFile(path.join(__dirname + '/fence.html')));
app.get('/siding.html', (req, res) => res.sendFile(path.join(__dirname + '/siding.html')));
app.get('/watering.html', (req, res) => res.sendFile(path.join(__dirname + '/watering.html')));

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname + '/favicon.ico')));
app.get('/red.css', (req, res) => res.sendFile(path.join(__dirname + '/red.css')));
app.get('/red.html', (req, res) => res.sendFile(path.join(__dirname + '/red.html')));
app.get('/grey.css', (req, res) => res.sendFile(path.join(__dirname + '/grey.css')));
app.get('/grey.html', (req, res) => res.sendFile(path.join(__dirname + '/grey.html')));
app.get('/blue.css', (req, res) => res.sendFile(path.join(__dirname + '/blue.css')));
app.get('/blue.html', (req, res) => res.sendFile(path.join(__dirname + '/blue.html')));

app.get('/landingMode.js', (req, res) => res.sendFile(path.join(__dirname + '/landingMode.js')));
app.get('/prices.js', (req, res) => res.sendFile(path.join(__dirname + '/prices.js')));

app.use('/bin', express.static('bin'));

app.use('/data', express.static('data'));
app.use('/svg', express.static('svg'));
app.use('/images', express.static('images'));


app.set('port', process.env.NODE_PORT);

app.listen(app.get('port'), function() {
    console.log('Node App Started on port ' + process.env.NODE_PORT);
});
