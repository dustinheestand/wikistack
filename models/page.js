const { db } = require('./index.js');
const Sequelize = require('sequelize');
const slugify = require('slugify');

//getting an error here - why??
const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

Page.beforeValidate(page => {
  page.slug = slugify(page.title);
});

module.exports = Page;
