process.env.NODE_ENV = 'test';

import mutations from '../../../src/resolvers/mutations.js';

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    playerId: 'Player-abc',
    playerName: 'Jane Doe',
    position: 'S'
  };

  it('`createPlayer` mutation should create player', async () => {
    const result = await mutations.createPlayer(null, { input: { ...params } });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe(params.playerId);

    expect(result).toHaveProperty('PlayerName');
    expect(result.PlayerName).toBe(params.playerName);

    expect(result).toHaveProperty('Position');
    expect(result.Position).toBe(params.position);
  });
});
