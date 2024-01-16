import { dbGet, dbQuery } from './../utils/responses.js';
import { Game, Player, Team } from './../models/index.js';

const teams = async () => {
  const data = await dbQuery({ query: Team.queryAll() });
  return data;
};

const teamPlayers = async (root, { teamId }) => {
  const data = await dbQuery({ query: Player.queryByTeam({ teamId }) });
  return data;
};

const teamGames = async (root, { teamId }) => {
  const data = await dbQuery({ query: Game.queryByTeam({ teamId }) });
  return data;
};

const game = async (root, { teamId, gameId }) => {
  const data = await dbQuery({ query: Game.get({ teamId, gameId }) });
  return data[0];
};

const player = async (root, { teamId, playerId }) => {
  const data = await dbQuery({ query: Player.get({ teamId, playerId }) });
  return data[0];
};

const team = async (root, { teamId }) => {
  const data = await dbGet({ query: Team.get({ teamId }) });
  const players = await teamPlayers(root, { teamId });
  const games = await teamGames(root, { teamId });
  return { ...data, Players: players, Games: games };
};

export default { game, player, team, teamGames, teamPlayers, teams };

