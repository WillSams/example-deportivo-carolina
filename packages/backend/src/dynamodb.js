import AWS from 'aws-sdk';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const config = {
    keyId: process.env.AWS_ACCESS_KEY_ID,
    accessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    endpoint: `http://localhost:${process.env.DYNAMODB_PORT}`
  };
  AWS.config.update(config);
  // AWS.config.logger = console;
}

const ddbClient = new AWS.DynamoDB.DocumentClient();

export default ddbClient;
