process.env.NODE_ENV = 'test';

import supertest from 'supertest';
import bootstrap from '../../../src/bootstrap.js';

const request = supertest(bootstrap);

describe('Route - About - /api', () => {
  it('`/api/about` should present details', async () => {
    const response = await request.get('/api/about');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('description');
  });
});
