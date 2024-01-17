process.env.NODE_ENV = 'test';

import { Player } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({ dbQuery: jest.fn() }));

describe('Resolvers - Queries', () => {
  afterEach(() => jest.clearAllMocks());

  const params = { teamId: 'test-team-1', playerId: 'Player-456' };

  const vals = {
    Id: params.teamId,
    Metadata: params.playerId,
    PlayerName: 'Test Player 3',
    Position: 'LW',
  };
  const getSpy = jest.spyOn(Player, 'get').mockResolvedValue(vals);

  dbQuery.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => { resolve([vals]); });
  });

  afterEach(() => jest.clearAllMocks());
  it('`player` query should retrieve player', async () => {
    const result = await queries.player(null, { ...params });

    expect(getSpy).toHaveBeenCalledWith(expect.any(Object));

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe(params.playerId);

    expect(result).toHaveProperty('PlayerName');
    expect(result.PlayerName).toBe(vals.PlayerName);

    expect(result).toHaveProperty('Position');
    expect(result.Position).toBe(vals.Position);
  });
});
