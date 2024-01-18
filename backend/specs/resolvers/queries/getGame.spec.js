process.env.NODE_ENV = 'test';

import { Game } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({ dbQuery: jest.fn() }));

describe('Resolvers - Queries', () => {
  const params = { teamId: 'test-team-3', gameId: 'Game-3' };
  const vals = {
    Id: params.teamId,
    Metadata: params.gameId,
    GameDay: 'Jan-17-2022',
    WinLoss: 'Win',
  };

  const getSpy = jest.spyOn(Game, 'get').mockResolvedValue(vals);

  dbQuery.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => {
      resolve([vals]);
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('`game` query should retrieve game', async () => {
    const result = await queries.game(null, { ...params });

    expect(getSpy).toHaveBeenCalledWith(expect.any(Object));

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe('test-team-3');

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe('Game-3');

    expect(result.GameDay).toBe(vals.GameDay);

    expect(result).toHaveProperty('WinLoss');
    expect(result.WinLoss).toBe(vals.WinLoss);
  });
});
