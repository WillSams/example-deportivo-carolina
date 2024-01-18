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

export default { app };
