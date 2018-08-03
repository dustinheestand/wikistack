const router = require('express').Router();
const views = require ('../views');


router.get('/', (req, res, next) => {
  res.send(views.main(""));
})

module.exports = router
