/* eslint-disable */
import properties from './../../package.json';

const aboutHandler = (_request, response) => {
  const aboutInfo = {
    name: properties.name,
    version: properties.version,
    description: properties.description,
    environment: process.env.NODE_ENV ?? 'unknown',
  };
  response.json(aboutInfo);
};

export default { aboutHandler };
