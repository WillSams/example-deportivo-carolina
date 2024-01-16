process.env.NODE_ENV = 'test';

import queries from '../../../src/resolvers/queries.js';
import { reseedDb } from '../../../specs/index.js';

describe('Resolvers - Queries', () => {
  beforeEach(() => reseedDb());
  afterEach(() => jest.clearAllMocks());

  it('`teams` query should retrieve all teams', async () => {
    const result = await queries.teams(null);

    expect(result.length).toBe(3);
  });
});
