process.env.NODE_ENV = 'test';

import { Team } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({ dbQuery: jest.fn() }));

describe('Resolvers - Queries', () => {
  const data = [
    { Id: 'team-1', Metadata: 'Team', TeamName: 'Team 1', Arena: 'Team 1 Field' },
    { Id: 'team-2', Metadata: 'Team', TeamName: 'Team 2', Arena: 'Team 2 Field' },
    { Id: 'team-3', Metadata: 'Team', TeamName: 'Team 3', Arena: 'Team 3 Field' },
    { Id: 'team-4', Metadata: 'Team', TeamName: 'Team 4', Arena: 'Team 4 Field' },

  ];
  const queryByTeamSpy = jest.spyOn(Team, 'queryAll').mockResolvedValue(data);

  dbQuery.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => { resolve(data); });
  });

  afterEach(() => jest.clearAllMocks());

  it('`team` query should retrieve games for a give team', async () => {
    const result = await queries.teams(null);
    expect(result.length).toBe(4);
  });
});
