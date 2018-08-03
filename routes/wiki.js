const router = require('express').Router();
const views = require('../views');

router.get('/', (req, res, next) => {
  res.send(views.main());
});

router.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

router.post('/', (req, res, next) => {
  res.send('landed at POST for wiki/add');
});

module.exports = router;
