export const getGame = `
query GetGame($teamId: String!, $gameId: String!) {
  getGame(teamId: $teamId, gameId: $gameId) {
    Id
    Metadata
    GameDay
    WinLoss
  }
}`;

export const getPlayer = `
query GetPlayer($teamId: String!, $playerId: String!) {
  getPlayer(teamId: $teamId, playerId: $playerId) {
    Id
    Metadata
    PlayerName
    Position
  }
}`;

export const getTeam = `
query GetTeam($teamId: String!) {
  getTeam(teamId: $teamId) {
    Id
    Metadata
    TeamName
    Arena
    Players {
      Metadata
      PlayerName
      Position
      BirthDate
      Height
      Weight
      Jersey
      Shoots
      Hometown
    }
    Games {
      Metadata
      GameDay
      WinLoss
    }
  }
}`;

export const listTeamGames = `
query ListTeamGames($teamId: String!) {
  listTeamGames(teamId: $teamId) {
    Id
    Metadata
    GameDay
    WinLoss
  }
}`;

export const listTeamPlayers = `
query ListTeamPlayers($teamId: String!) {
  listTeamPlayers(teamId: $teamId) {
    Id
    Metadata
    PlayerName
    Position
  }
}`;

export const listTeams = `
query ListTeams {
  listTeams {
    Id
    Metadata
    TeamName
    Arena
  }
}`;
