export const getGame = `
query game($teamId: String!, $gameId: String!) {
  game(teamId: $teamId, gameId: $gameId) {
    Id
    Metadata
    GameDay
    WinLoss
  }
}`;

export const getPlayer = `
query player($teamId: String!, $playerId: String!) {
  player(teamId: $teamId, playerId: $playerId) {
    Id
    Metadata
    PlayerName
    Position
  }
}`;

export const getTeam = `
query team($teamId: String!) {
  team(teamId: $teamId) {
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
query teamGames($teamId: String!) {
  listTeamGames(teamId: $teamId) {
    Id
    Metadata
    GameDay
    WinLoss
  }
}`;

export const listTeamPlayers = `
query teamPlayers($teamId: String!) {
  listTeamPlayers(teamId: $teamId) {
    Id
    Metadata
    PlayerName
    Position
  }
}`;

export const listTeams = `
query teams {
  listTeams {
    Id
    Metadata
    TeamName
    Arena
  }
}`;
