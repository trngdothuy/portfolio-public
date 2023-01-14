const express = require('express');
const app = express();
require("dotenv").config({path: './.env'});
    // to hide env

// enables us send data in the request body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4040;
//===============================================================================================
//=============================    CORS SETTINGS    =============================================
//===============================================================================================
const cors = require('cors'); // to send request from different url
// to enable cors for any requests
app.use(cors())

//or enable it only for the specific url
// app.options('/send_email', cors());

// allowing requests from the front-end to our server with api calls
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  next();
});
//===============================================================================================
//===============================================================================================
//===============================================================================================

app.use('/emails', require('./routes/EmailsRoute.js'));

// for serving static files if you need to
//.use(app.static('../'))

// // serving 404 page
// var path = require('path');

// // viewed at http://localhost:8080
// app.use('/', function(req, res) {
// 	console.log(res)
// 	res.sendFile(path.join(__dirname + '/../404/'));
// });

// to deploy site


const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}!`);
});