const html = require('html-template-tag');
const layout = require('./layout');

module.exports = pages => {
  let pageList = '';
  pages.forEach(page => {
    pageList += `
    <li>
      <a href="/wiki/${page.slug}">${page.title}</a>
    </li>`;
  });

  return layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      $${pageList}
    </ul>
  </ul>`);
};
