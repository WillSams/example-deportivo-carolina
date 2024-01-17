import bootstrap from './src/bootstrap.js';

export const handler = bootstrap.app.listen(process.env.API_PORT, () => {
  const host = handler.address().address;
  const port = handler.address().port;

  console.log(
    'Deportivo Carolina Backend - listening at http://%s:%s',
    host,
    port
  );
});
