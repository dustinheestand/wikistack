const router = require('express').Router();
const views = require('../views');
const { User } = require('../models');

router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  res.send(views.userList(users));
});

router.get('/:id', async (req, res, next) => {
  const user = await User.findOne({
    where: { id: req.params.id }
  });
  res.send(user);
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email
    });
    res.send(user);
  } catch (err) {
    res.status(400).send();
  }
});

module.exports = router;
