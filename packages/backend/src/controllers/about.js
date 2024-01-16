const aboutHandler = (_request, response) => {
  const aboutInfo = {
    name: 'Example - Deportivo de Carolina Fútbol Club - Backend',
    description: 'Example API using GraphQL and AWS DynamoDB SDK',
    environment: process.env.NODE_ENV ?? 'unknown',
  };
  response.json(aboutInfo);
};

export default { aboutHandler };
