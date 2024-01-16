process.env.NODE_ENV = 'test';

import mutations from '../../../src/resolvers/mutations.js';

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    gameId: 'Game-123',
    gameDay: 'Oct-24-2022',
    winLoss: 'Loss'
  };

  it('`createGame` mutation should create game', async () => {
    const result = await mutations.createGame(null, { input: { ...params } });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe(params.gameId);

    expect(result).toHaveProperty('GameDay');
    expect(result.GameDay).toBe(params.gameDay);

    expect(result).toHaveProperty('WinLoss');
    expect(result.WinLoss).toBe(params.winLoss);
  });
});
