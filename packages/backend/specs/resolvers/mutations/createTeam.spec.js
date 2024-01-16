process.env.NODE_ENV = 'test';

import mutations from '../../../src/resolvers/mutations.js';

describe('Resolvers - Mutation', () => {
  const params = {
    teamId: 'test-team-4',
    teamName: 'Savannah GA JUCO',
    arena: 'Savannah Civic Center'
  };

  it('`createTeam` mutation should create team', async () => {
    const result = await mutations.createTeam(null, { input: { ...params } });

    expect(result).toHaveProperty('Id');
    expect(result.Id).toBe(params.teamId);

    expect(result).toHaveProperty('Metadata');
    expect(result.Metadata).toBe('Team');

    expect(result).toHaveProperty('TeamName');
    expect(result.TeamName).toBe(params.teamName);

    expect(result).toHaveProperty('Arena');
    expect(result.Arena).toBe(params.arena);
  });
});
