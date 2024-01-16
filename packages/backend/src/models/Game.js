import { soccerTableName } from '../utils/server.js';

const getQueryParams = ({ teamId, gameId }) => ({
  TableName: soccerTableName,
  IndexName: 'MetadataIndex',
  ExpressionAttributeNames: { '#p': 'Metadata', '#a': 'Id' },
  KeyConditionExpression: '#p = :v1',
  FilterExpression: '#a = :v2',
  ExpressionAttributeValues: { ':v1': gameId, ':v2': teamId },
});

const queryByTeam = ({ teamId }) => ({
  TableName: soccerTableName,
  KeyConditionExpression: 'Id = :v1 and begins_with(Metadata, :v2)',
  ExpressionAttributeValues: { ':v1': teamId, ':v2': 'Game' },
});

const putItem = ({ teamId, gameId, gameDay, winLoss }) => ({
  TableName: soccerTableName,
  Item: {
    Id: teamId,
    Metadata: gameId,
    GameDay: gameDay,
    WinLoss: winLoss,
  },
});

export default { getQueryParams, queryByTeam, putItem };
