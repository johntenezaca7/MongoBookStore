const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.use(express.static(__dirname + '/client'))

app.use(bodyParser.json());


mongoose.connect(keys.mongoURI);

const db = mongoose.connection;

require('./routes/bookInfo')(app);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Running on port: ' + port)
})