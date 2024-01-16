import { soccerTableName } from '../utils/server.js';

const get = ({ teamId, playerId }) => ({
  TableName: soccerTableName,
  IndexName: 'MetadataIndex',
  ExpressionAttributeNames: { '#p': 'Metadata', '#a': 'Id' },
  KeyConditionExpression: '#p = :v1',
  FilterExpression: '#a = :v2',
  ExpressionAttributeValues: { ':v1': playerId, ':v2': teamId }
});

const queryByTeam = ({ teamId }) => ({
  TableName: soccerTableName,
  KeyConditionExpression: 'Id = :v1 and begins_with(Metadata, :v2)',
  ExpressionAttributeValues: { ':v1': teamId, ':v2': 'Player' }
});

const put = ({ teamId, playerId, playerName, position, details }) => ({
  TableName: soccerTableName,
  Item: {
    Id: teamId,
    Metadata: playerId,
    PlayerName: playerName,
    Position: position,
    ...details
  },
});

export default { get, put, queryByTeam };
