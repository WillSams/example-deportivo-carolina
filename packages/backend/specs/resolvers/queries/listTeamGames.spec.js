process.env.NODE_ENV = 'test';

import queries from '../../../src/resolvers/queries.js';
import { reseedDb } from '../../../specs/index.js';

describe('Resolvers - Queries', () => {
  beforeEach(() => reseedDb());
  afterEach(() => jest.clearAllMocks());

  const params = { teamId: 'test-team-1' };

  it('`teamGames` query should retrieve games for the given team', async () => {
    const result = await queries.teamGames(null, { ...params });

    expect(result.length).toBe(2);
  });
});
