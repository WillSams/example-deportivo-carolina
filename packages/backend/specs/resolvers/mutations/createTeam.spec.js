process.env.NODE_ENV = 'test';

import { Team } from '../../../src/models/index.js';
import mutations from '../../../src/resolvers/mutations.js';
import { dbPut, dbGet } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({ dbGet: jest.fn(), dbPut: jest.fn() }));

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    teamName: 'Savannah GA JUCO',
    arena: 'Savannah Civic Center'
  };

  const vals = {
    Id: params.teamId,
    Metadata: 'Team',
    TeamName: params.teamName,
    Arena: params.arena,
  };

  const putSpy = jest.spyOn(Team, 'put').mockResolvedValue(vals);
  const getSpy = jest.spyOn(Team, 'get').mockResolvedValue(vals);

  dbGet.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => { resolve(vals); });
  });

  dbPut.mockImplementation(({ item }) => {
    return new Promise((resolve, reject) => { resolve(vals); });
  });

  afterEach(() => { jest.clearAllMocks(); });

  it('`createTeam` mutation should create team', async () => {
    const result = await mutations.createTeam(null, { input: { ...params } });

    expect(putSpy).toHaveBeenCalledWith(expect.any(Object));
    expect(getSpy).toHaveBeenCalledWith(expect.any(Object));

    expect(result).toHaveProperty('Id');
    expect(result.Id).toEqual(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toEqual('Team');

    expect(result).toHaveProperty('TeamName');
    expect(result.TeamName).toEqual(params.teamName);

    expect(result).toHaveProperty('Arena');
    expect(result.Arena).toEqual(params.arena);
  });
});
