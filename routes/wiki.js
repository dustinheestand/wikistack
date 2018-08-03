const router = require('express').Router();
const views = require('../views');
const { User, Page } = require('../models');

router.get('/', (req, res, next) => {
  res.send(views.main());
});

router.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

router.post('/', async (req, res, next) => {
  const author = await User.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  });
  try {
    const post = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    });
    console.log(post);
    res.send(post);
  } catch (err) {
    res.status(400).send();
  }
});

module.exports = router;
