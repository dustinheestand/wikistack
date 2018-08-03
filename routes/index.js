const router = require('express').Router();
const views = require ('../views');
const { Page } = require('../models');

router.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  console.log(allPages);
  res.send(views.main(allPages));
});

module.exports = router
