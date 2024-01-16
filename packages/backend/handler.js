import serverless from 'serverless-http';
import bootstrap from './src/bootstrap.js';

export const handler = async (event, context) => {
  try {
    return await serverless(bootstrap)(event, context);
  } catch (error) {
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};
