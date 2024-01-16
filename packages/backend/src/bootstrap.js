import cors from 'cors';
import express from 'express';
import routes from './routes.js';
import initGqlServer from './initGqlServer.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);
initGqlServer(app);

const bootstrap = app.listen(process.env.API_PORT, () => {
  const host = bootstrap.address().address;
  const port = bootstrap.address().port;

  console.log('Deportivo Carolina Backend - listening at http://%s:%s', host, port);
});

export default bootstrap;
