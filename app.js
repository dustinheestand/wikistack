const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const router = require('./routes');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

//if (!module.parent) app.listen(PORT); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

module.exports = app; // this line is only used to make testing easier.
