import { spawn } from 'child_process';
import sleep from 'sleep';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import mutations from '../src/resolvers/mutations.js';

const teams = [
  { teamId: 'test-team-1', teamName: 'Test Team 1', arena: 'Test Team 1 Arena' },
  { teamId: 'test-team-2', teamName: 'Test Team 2', arena: 'Test Team 2 Arena' },
  { teamId: 'test-team-3', teamName: 'Test Team 3', arena: 'Test Team 3 Arena' },
];

const players = [
  {
    teamId: 'test-team-1',
    playerId: 'Player-123',
    playerName: 'Test Player1',
    position: 'G'
  },
  {
    teamId: 'test-team-1',
    playerId: 'Player-456',
    playerName: 'Test Player3',
    position: 'LW'
  },
  {
    teamId: 'test-team-2',
    playerId: 'Player-789',
    playerName: 'Test Player4',
    position: 'RB',
  },
];

const games = [
  { teamId: 'test-team-1', gameId: 'Game-1', gameDay: 'Jan-10-2022', winLoss: 'Win' },
  { teamId: 'test-team-2', gameId: 'Game-2', gameDay: 'Jan-10-2022', winLoss: 'Loss' },
  { teamId: 'test-team-3', gameId: 'Game-3', gameDay: 'Jan-17-2022', winLoss: 'Win' },
  { teamId: 'test-team-1', gameId: 'Game-4', gameDay: 'Jan-17-2022', winLoss: 'Loss' },
];

const currentModuleFileURL = import.meta.url;
const currentModuleDir = dirname(fileURLToPath(currentModuleFileURL));

const removeDbTestData = () => {
  sleep.sleep(1);
  spawn(`${currentModuleDir}/../clean_db.sh`);
  sleep.sleep(1);
};

const reseedDb = () => {
  removeDbTestData();

  teams.forEach(input => mutations.createTeam(null, { input }));
  players.forEach(input => mutations.createPlayer(null, { input }));
  games.forEach(input => mutations.createGame(null, { input }));
};

export { reseedDb, removeDbTestData };
