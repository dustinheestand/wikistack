const router = require('express').Router();
const wiki = require('./wiki.js');
const user = require('./user.js');
// const error400 = require('./error400');
// const error404 = require('./error404');

router.use('/wiki', wiki);
router.use('/user', user);

router.use('/', (req, res) => {
  res.redirect('/wiki');
});

module.exports = router;
