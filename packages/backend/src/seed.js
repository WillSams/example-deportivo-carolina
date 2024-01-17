import { v4 as uuidv4 } from 'uuid';
import mutations from './resolvers/mutations.js';
import seeder from '../src/utils/seeder.js';
import { soccerTableName } from '../src/utils/server.js';

// teamId, teamName, arena
const teams = [
  { teamId: 'boysU9', teamName: 'Boys U9', arena: 'City Complex A' },
  { teamId: 'boysU11', teamName: 'Boys U11', arena: 'City Complex B' },
  { teamId: 'boysU13', teamName: 'Boys U13', arena: 'City Complex C' },
  { teamId: 'boysU15', teamName: 'Boys U15', arena: 'City Complex D' },
  { teamId: 'girlsU9', teamName: 'Girls U9', arena: 'City Complex A' },
  { teamId: 'girlsU11', teamName: 'Girls U11', arena: 'City Complex B' },
  { teamId: 'girlsU13', teamName: 'Girls U13', arena: 'City Complex C' },
  { teamId: 'girlsU15', teamName: 'Girls U15', arena: 'City Complex D' },
];

const createFakePlayer = ({ team, position, }) => ({
  teamId: `${team.teamId}`, playerId: `Player-${uuidv4()}`,
  playerName: seeder.getFakeName(team.teamId),
  position,
  details: {
    BirthDate: seeder.getFakeBirthdate(team.teamId),
    Height: seeder.getFakeHeight(team.teamId),
    Weight: seeder.getFakeWeight(team.teamId),
    Jersey: seeder.getFakeJerseyNumber(position),
    Shoots: seeder.getShootingFoot(position),
    Hometown: seeder.getFakeHomeTown()
  }
});

const forwardsCount = 6;
const defendersCount = 5;
const midfieldersCount = 6;
const goaliesCount = 2;

const players = teams.flatMap(team => [
  ...Array(forwardsCount).fill().map(() => createFakePlayer({ team, position: 'F' })),
  ...Array(midfieldersCount).fill().map(() => createFakePlayer({ team, position: 'M' })),
  ...Array(defendersCount).fill().map(() => createFakePlayer({ team, position: 'D' })),
  ...Array(goaliesCount).fill().map(() => createFakePlayer({ team, position: 'G' }))
]);

// teamId, gameId, gameDay, winLoss
const games = [
  { teamId: 'boysU9', gameId: 'Game-boysU9-2021-01', gameDay: 'April-17-2021', winLoss: 'Win' },
  { teamId: 'boysU11', gameId: 'Game-boysU11-2021-01', gameDay: 'April-17-2021', winLoss: 'Loss' },
  { teamId: 'boysU13', gameId: 'Game-boysU13-2021-01', gameDay: 'April-17-2021', winLoss: 'Loss' },
  { teamId: 'boysU15', gameId: 'Game-boysU15-21-01', gameDay: 'April-17-2021', winLoss: 'Win' },
  { teamId: 'girlsU9', gameId: 'Game-girlsU9-2021-01', gameDay: 'April-17-2021', winLoss: 'Loss' },
  { teamId: 'girlsU11', gameId: 'Game-girlsU11-2021-01', gameDay: 'April-17-2021', winLoss: 'Win' },
  { teamId: 'girlsU13', gameId: 'Game-girlsU13-2021-01', gameDay: 'April-17-2021', winLoss: 'Win' },
  { teamId: 'girlsU15', gameId: 'Game-girlsU15-21-01', gameDay: 'April-17-2021', winLoss: 'Loss' },
];


const seedDatabase = async () => {
  try {
    console.log(`Begin seeding of the database table ${soccerTableName}....`);

    const createTeamPromises = teams.map((params) => mutations.createTeam(null, { input: { ...params } }));
    const createPlayerPromises = players.map((params) => mutations.createPlayer(null, { input: { ...params } }));
    const createGamePromises = games.map((params) => mutations.createGame(null, { input: { ...params } }));

    await Promise.all([
      ...createTeamPromises,
      ...createPlayerPromises,
      ...createGamePromises
    ]);

    console.log(`End of seeding the database table ${soccerTableName}.`);
  } catch (ex) {
    console.error(`DynamoDB seeding of the database table ${soccerTableName} failed! - ${ex.message}`);
  }
};

seedDatabase().catch(err => {
  console.error('An error occurred during database seeding:', err);
});

