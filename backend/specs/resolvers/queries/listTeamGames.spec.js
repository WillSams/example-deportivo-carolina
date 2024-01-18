process.env.NODE_ENV = 'test';

import { Game } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({
  dbGet: jest.fn(),
  dbQuery: jest.fn(),
}));

describe('Resolvers - Queries', () => {
  const params = { teamId: 'test-team-3' };

  const data = [
    {
      Id: params.teamId,
      Metadata: 'Game-1',
      GameDay: 'Jan-17-2022',
      WinLoss: 'Win',
    },
    {
      Id: params.teamId,
      Metadata: 'Game-2',
      GameDay: 'Jan-24-2022',
      WinLoss: 'Loss',
    },
    {
      Id: params.teamId,
      Metadata: 'Game-3',
      GameDay: 'Jan-31-2022',
      WinLoss: 'Win',
    },
  ];
  const queryByTeamSpy = jest
    .spyOn(Game, 'queryByTeam')
    .mockResolvedValue(data);

  dbQuery.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('`team` query should retrieve games for a give team', async () => {
    const result = await queries.teamGames(null, { ...params });

    expect(queryByTeamSpy).toHaveBeenCalledWith(params);
    expect(result.length).toBe(3);
  });
});
