process.env.NODE_ENV = 'test';

import { Game } from '../../../src/models/index.js';
import mutations from '../../../src/resolvers/mutations.js';
import { createTeamRelatedEntity } from '../../../src/resolvers/helpers.js';

jest.mock('../../../src/resolvers/helpers.js', () => ({
  createTeamRelatedEntity: jest.fn(),
}));

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    gameId: 'Game-123',
    gameDay: 'Oct-24-2022',
    winLoss: 'Loss',
  };

  const vals = {
    Id: params.teamId,
    Metadata: params.gameId,
    GameDay: params.gameDay,
    WinLoss: params.winLoss,
  };

  const putSpy = jest.spyOn(Game, 'put').mockResolvedValue(vals);
  const getSpy = jest.spyOn(Game, 'get').mockResolvedValue(vals);
  createTeamRelatedEntity.mockImplementation(() => Promise.resolve(vals));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('`createGame` mutation should create game', async () => {
    const result = await mutations.createGame(null, { input: { ...params } });
    expect(putSpy).toHaveBeenCalledWith(params);
    expect(getSpy).toHaveBeenCalledWith(expect.any(Object));

    expect(result).toHaveProperty('Id');
    expect(result.Id).toEqual(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toEqual(params.gameId);

    expect(result).toHaveProperty('GameDay');
    expect(result.GameDay).toEqual(params.gameDay);

    expect(result).toHaveProperty('WinLoss');
    expect(result.WinLoss).toEqual(params.winLoss);
  });
});
