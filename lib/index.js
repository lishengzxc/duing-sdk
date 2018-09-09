const { URLSearchParams, parse } = require('url');
const badges = require('./badges/');

function getType(rawRequestUrl) {
  const pathname = rawRequestUrl.pathname;
  const pathnameData = pathname.split('/');
  const lastItem = getlastItem(pathnameData);

  return lastItem;
}

function getConfig(rawRequestUrl) {
  const query = new URLSearchParams(rawRequestUrl.query);
  const config = {};

  query.forEach(function (value, name) {
    config[name] = value;
  });

  return config;
}

function getlastItem(list = []) {
  return list[list.length - 1];
}

function responseError(response, str) {
  response.writeHeader(500, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify({
    code: 500,
    msg: `[ERROR][duing] ${str}`,
  }));
}

function getBadge(request, response) {
  const rawRequestUrl = parse(request.url);
  const type = getType(rawRequestUrl);
  const config = getConfig(rawRequestUrl);
  const badgeRender = badges[type];

  if (!badgeRender) {
    return responseError(response, 'don\'t have this type');
  }

  badgeRender(config)
    .then((content) => {
      response.writeHeader(200, {
        'Content-Type': 'image/svg+xml'
      });
      response.end(content);
    })
    .catch(() => {
      responseError(response, 'render error');
    });
}

module.exports = getBadge;