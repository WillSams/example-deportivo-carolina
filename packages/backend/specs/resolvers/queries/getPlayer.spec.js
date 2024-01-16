process.env.NODE_ENV = 'test';

import queries from '../../../src/resolvers/queries.js';
import { reseedDb } from '../../../specs/index.js';

describe('Resolvers - Queries', () => {
  beforeEach(() => reseedDb());
  afterEach(() => jest.clearAllMocks());

  const params = { teamId: 'test-team-1', playerId: 'Player-456' };

  it('`player` query should retrieve player', async () => {
    const result = await queries.player(null, { ...params });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe(params.playerId);

    expect(result).toHaveProperty('PlayerName');
    expect(result.PlayerName).toBe('Test Player3');

    expect(result).toHaveProperty('Position');
    expect(result.Position).toBe('LW');
  });
});
