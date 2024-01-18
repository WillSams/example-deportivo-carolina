process.env.NODE_ENV = 'test';

import supertest from 'supertest';
import bootstrap from '../../../src/bootstrap.js';
import jwt from 'jsonwebtoken';

const request = supertest(bootstrap.app);

describe('Route - Token - /api', () => {
  it('`/api/token` should generate a valid JWT token', async () => {
    const response = await request.get('/api/token');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body).toHaveProperty('token');

    const token = response.body.token;
    const secretKey = process.env.TOKEN_SECRET;

    try {
      const decodedToken = jwt.verify(token, secretKey);
      expect(decodedToken).toHaveProperty('username', 'local-web-user');
    } catch (error) {
      throw new Error(`Token verification failed: ${error.message}`);
    }
  });
});
