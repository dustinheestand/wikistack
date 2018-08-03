const router = require('express').Router();
const views = require('../views');
const { User, Page } = require('../models');
const slug = require('slugify');
router.get('/', (req, res, next) => {
  res.send(views.main());
});

router.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

router.post('/', async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    slug: slug(req.body.title),
    content: req.body.content,
    status: req.body.status
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {next(error)}
  // const author = await User.findOrCreate({
  //   where: {
  //     name: req.body.name,
  //     email: req.body.email
  //   }
  // });
  // try {
  //   const post = await Page.create({
  //     title: req.body.title,
  //     slug: slug(req.body.title),
  //     content: req.body.content,
  //     status: req.body.status
  //   });
  //   console.log(post);
  //   res.json(req.body);
  // } catch (err) {
  //   res.status(400).send();
  // }
});

router.get('/:slug', (req, res, next)=> {
  res.send(`We hit a dynamic route at ${req.params.slug}`)
});

module.exports = router;
