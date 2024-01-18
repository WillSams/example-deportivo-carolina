const aboutHandler = (_req, res) => {
  const aboutInfo = {
    name: 'Example - Deportivo de Carolina Fútbol Club - Backend',
    description: 'Example API using GraphQL and AWS DynamoDB SDK',
    environment: process.env.NODE_ENV ?? 'unknown',
  };
  res.json(aboutInfo);
};

export { aboutHandler };
