process.env.NODE_ENV = 'test';

import { Player } from '../../../src/models/index.js';
import mutations from '../../../src/resolvers/mutations.js';
import { createTeamRelatedEntity } from '../../../src/resolvers/helpers.js';

jest.mock('../../../src/resolvers/helpers.js', () => ({ createTeamRelatedEntity: jest.fn() }));

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    playerId: 'Player-abc',
    playerName: 'Jane Doe',
    position: 'S'
  };

  const vals = {
    Id: params.teamId,
    Metadata: params.playerId,
    PlayerName: params.playerName,
    Position: params.position,
  };

  const putSpy = jest.spyOn(Player, 'put').mockResolvedValue(vals);
  const getSpy = jest.spyOn(Player, 'get').mockResolvedValue(vals);
  createTeamRelatedEntity.mockImplementation(() => Promise.resolve(vals));

  afterEach(() => { jest.clearAllMocks(); });

  it('`createPlayer` mutation should create player', async () => {
    const result = await mutations.createPlayer(null, { input: { ...params } });
    expect(putSpy).toHaveBeenCalledWith(params);
    expect(getSpy).toHaveBeenCalledWith(expect.any(Object));

    expect(result).toHaveProperty('Id');
    expect(result.Id).toEqual(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toEqual(params.playerId);

    expect(result).toHaveProperty('PlayerName');
    expect(result.PlayerName).toEqual(params.playerName);

    expect(result).toHaveProperty('Position');
    expect(result.Position).toEqual(params.position);
  });
});
