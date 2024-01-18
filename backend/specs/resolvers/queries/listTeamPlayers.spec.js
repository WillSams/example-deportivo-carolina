process.env.NODE_ENV = 'test';

import { Player } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({ dbQuery: jest.fn() }));

describe('Resolvers - Queries', () => {
  const params = { teamId: 'test-team-3' };

  const data = [
    {
      teamId: 'test-team-3',
      playerId: 'Player-1',
      playerName: 'Jane Doe',
      position: 'S',
    },
    {
      teamId: 'test-team-3',
      playerId: 'Player-2',
      playerName: 'Jack Doe',
      position: 'LW',
    },
    {
      teamId: 'test-team-3',
      playerId: 'Player-3',
      playerName: 'John Doe',
      position: 'G',
    },
    {
      teamId: 'test-team-3',
      playerId: 'Player-4',
      playerName: 'Snow Doe',
      position: 'M',
    },
    {
      teamId: 'test-team-3',
      playerId: 'Player-5',
      playerName: 'Fro\' Doe',
      position: 'RB',
    },
  ];
  const queryByTeamSpy = jest
    .spyOn(Player, 'queryByTeam')
    .mockResolvedValue(data);

  dbQuery.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('`team` query should retrieve games for a give team', async () => {
    const result = await queries.teamPlayers(null, { ...params });

    expect(queryByTeamSpy).toHaveBeenCalledWith(params);
    expect(result.length).toBe(5);
  });
});
