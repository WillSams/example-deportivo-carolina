process.env.NODE_ENV = 'test';

import queries from '../../../src/resolvers/queries.js';
import { reseedDb } from '../../../specs/index.js';

describe('Resolvers - Queries', () => {
  beforeEach(() => reseedDb());
  afterEach(() => jest.clearAllMocks());

  const params = { teamId: 'test-team-3', gameId: 'Game-3' };

  it('`game` query should retrieve game', async () => {
    const result = await queries.game(null, { ...params });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe('test-team-3');

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe('Game-3');

    expect(result).toHaveProperty('GameDay');
    expect(result.GameDay).toBe('Jan-17-2022');

    expect(result).toHaveProperty('WinLoss');
    expect(result.WinLoss).toBe('Win');
  });
});
