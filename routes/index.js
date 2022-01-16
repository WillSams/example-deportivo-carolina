const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

const routes = { views: importRoutes('./views'), };

module.exports = app => {
  app.get('/', routes.views.index);
  app.all('/contact', routes.views.contact);
  app.get('/terms', routes.views.terms);
  app.get('/privacy', routes.views.privacy);
  app.get('/news', routes.views.news);
  app.get('/about', routes.views.about);
  app.get('/programs/boys/u15', routes.views.programs.boys.u15);
  app.get('/programs/boys/u13', routes.views.programs.boys.u13);
  app.get('/programs/boys/u11', routes.views.programs.boys.u11);
  app.get('/programs/boys/u9', routes.views.programs.boys.u9);
  app.get('/programs/girls/u15', routes.views.programs.girls.u15);
  app.get('/programs/girls/u13', routes.views.programs.girls.u13);
  app.get('/programs/girls/u11', routes.views.programs.girls.u11);
  app.get('/programs/girls/u9', routes.views.programs.girls.u9);
  app.get('/programs/recreational', routes.views.programs.recreational);
  app.get('/coaching', routes.views.coaching);
  app.get('/parents', routes.views.parents);
  app.get('/volunteers', routes.views.volunteers);
  app.get('/registration', routes.views.registration);

  app.use((req, res) => { res.status(404).render('errors/404'); });
  app.use((req, res) => { res.status(500).render('errors/500'); });
};
