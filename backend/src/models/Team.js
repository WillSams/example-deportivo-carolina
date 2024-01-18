import { soccerTableName } from '../utils/server.js';

const get = ({ teamId }) => ({
  TableName: soccerTableName,
  Key: {
    Id: teamId,
    Metadata: 'Team',
  },
});

const put = ({ teamId, teamName, arena }) => ({
  TableName: soccerTableName,
  Item: {
    Id: teamId,
    Metadata: 'Team',
    TeamName: teamName,
    Arena: arena,
  },
});

const queryAll = () => ({
  TableName: soccerTableName,
  IndexName: 'MetadataIndex',
  ProjectionExpression: 'Id, Metadata, TeamName, Arena',
  ExpressionAttributeNames: { '#p': 'Metadata' },
  KeyConditionExpression: '#p = :v1',
  ExpressionAttributeValues: { ':v1': 'Team' },
});

export default { get, put, queryAll };
