export const createGame = `
mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    Id
    Metadata
    GameDay
    WinLoss
  }
}`;

export const createPlayer = `
mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    Id
    Metadata
    PlayerName
    Position
  }
}`;

export const createTeam = `
mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
    Id
    Metadata
    TeamName
    Arena
  }
}`;
