import { dbGet, dbPut, dbQuery } from './../utils/responses.js';
import { Game, Player, Team } from './../models/index.js';

const createTeamRelatedEntity = async (root, { item, query }) => {
  try {
    await dbPut({ item });
    const data = await dbQuery({ query });
    return data[0];
  } catch (error) {
    console.error('Error in creating team related entity:', error);
    throw error;
  }
};

const createTeam = async (root, { input }) => {
  try {
    await dbPut({ item: Team.put({ ...input }) });
    return await dbGet({ query: Team.get({ teamId: input.teamId }) });
  } catch (error) {
    console.error('Error in creating team:', error);
    throw error;
  }
};

const createGame = async (root, { input }) => {
  const item = Game.put({ ...input });
  const query = Game.get({ teamId: input.teamId, gameId: input.gameId });
  return createTeamRelatedEntity({ item, query });
};

const createPlayer = async (root, { input }) => {
  const item = Player.put({ ...input });
  const query = Player.get({ teamId: input.teamId, playerId: input.playerId });
  return createTeamRelatedEntity({ item, query });
};

export default { createTeam, createGame, createPlayer };
