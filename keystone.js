const keystone = require('keystone');

keystone.init({
  'name': 'Deportivo Carolina de Fútbol',
  'brand': 'Deportivo Carolina de Fútbol',

  'static': 'public',
  'favicon': 'public/images/favicon.ico',

  'views': 'views',
  'view engine': 'pug',

  'auto update': true,

  'cookie secret': process.env.COOKIE_SECRET,
  'session': true,
  'session store': 'mongo',

  'auth': true,
  'user model': 'User',
});

// Load your project's Models
keystone.import('models');

keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));    // Load your project's Routes

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
  users: 'users',
});

keystone.start();
