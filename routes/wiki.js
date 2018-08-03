const router = require('express').Router();
const views = require('../views');
const { User, Page } = require('../models');

router.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  console.log(allPages);
  res.send(views.main(allPages));
});

router.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

router.get('/:slug', async (req, res, next) => {
  const page = await Page.findOne({
    where: { slug: req.params.slug }
  });
  res.send(views.wikiPage(page));
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  });

  try {
    await page.save();
    const slug = page.dataValues.slug;
    res.redirect(`/wiki/${slug}`);
  } catch (error) {
    next(error);
  }
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

/* router.get('/:slug', (req, res, next) => {
  res.send(`We hit a dynamic route at ${req.params.slug}`);
}); */

module.exports = router;
