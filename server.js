require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const auth = require('./controllers/auth');

const app = express();
//this line lets us accept POST data from axios
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/optiplot')

app.use(express.static(__dirname + "/client/build"));

app.use('/auth', auth);
app.use('/users', users);

app.get('*', (req, res) => {
	res.sendFile(__dirname + "/client/build/index.html");
});
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
	console.log(`🔥 🍅 server running on ${port} 🍅 🔥`)
})

module.exports = server;