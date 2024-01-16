import aboutController from './controllers/about.js';

const routes = (app) => {
  [
    // public routes
    app.options('*', (_req, res) => res.status(200).send()),

    app.get('/api/about', aboutController.aboutHandler),
  ];
};

export default routes;
