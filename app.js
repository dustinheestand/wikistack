const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const router = require('./routes');
const { db } = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(router);

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

module.exports = app; // this line is only used to make testing easier.
