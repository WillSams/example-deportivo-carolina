process.env.NODE_ENV = 'test';

import queries from '../../../src/resolvers/queries.js';
import { reseedDb } from '../../../specs/index.js';

describe('Resolvers - Queries', () => {
  beforeEach(() => reseedDb());
  afterEach(() => jest.clearAllMocks());

  const params = { teamId: 'test-team-3' };

  it('`team` query should retrieve team', async () => {
    const result = await queries.team(null, { ...params });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe('Team');

    expect(result).toHaveProperty('TeamName');
    expect(result.TeamName).toBe('Test Team 3');

    expect(result).toHaveProperty('Arena');
    expect(result.Arena).toBe('Test Team 3 Arena');
  });
});
