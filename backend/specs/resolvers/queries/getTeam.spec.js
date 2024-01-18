process.env.NODE_ENV = 'test';

import { Game, Player, Team } from '../../../src/models/index.js';
import queries from '../../../src/resolvers/queries.js';
import { dbGet, dbQuery } from '../../../src/utils/responses.js';

jest.mock('../../../src/utils/responses.js', () => ({
  dbGet: jest.fn(),
  dbQuery: jest.fn(),
}));

describe('Resolvers - Queries', () => {
  const params = { teamId: 'test-team-3' };

  const data = {
    Id: params.teamId,
    Metadata: 'Team',
    TeamName: 'Test Team 3',
    Arena: 'Test Team 3 Arena',
    Games: [],
    Players: [],
  };

  const { Games, Players, ...teamData } = data;
  const teamGetSpy = jest.spyOn(Team, 'get').mockResolvedValue(teamData);
  const playersQueryByTeamSpy = jest
    .spyOn(Player, 'queryByTeam')
    .mockResolvedValue(Players);
  const gameQueryByTeamSpy = jest
    .spyOn(Game, 'queryByTeam')
    .mockResolvedValue(Games);

  dbGet.mockImplementation(({ query }) => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  });

  dbQuery.mockImplementation(({ query }) => {
    if (
      JSON.stringify(query) ===
      JSON.stringify(Game.queryByTeam({ teamId: 'test-team-3' }))
    ) {
      return new Promise((resolve, reject) => {
        resolve(Games);
      });
    }
    if (
      JSON.stringify(query) ===
      JSON.stringify(Player.queryByTeam({ teamId: 'test-team-3' }))
    ) {
      return new Promise((resolve, reject) => {
        resolve(Players);
      });
    }
    return Promise.resolve([]);
  });

  afterEach(() => jest.clearAllMocks());

  it('`team` query should retrieve team', async () => {
    const result = await queries.team(null, { ...params });

    expect(gameQueryByTeamSpy).toHaveBeenCalledWith(params);
    expect(playersQueryByTeamSpy).toHaveBeenCalledWith(params);
    expect(teamGetSpy).toHaveBeenCalledWith(params);

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe('Team');

    expect(result).toHaveProperty('TeamName');
    expect(result.TeamName).toBe(data.TeamName);

    expect(result).toHaveProperty('Arena');
    expect(result.Arena).toBe(data.Arena);

    expect(result).toHaveProperty('Games');
    expect(result.Games).toEqual(data.Games);

    expect(result).toHaveProperty('Players');
    expect(result.Players).toEqual(data.Players);
  });
});
