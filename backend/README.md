# Example - Deportivo de Carolina Fútbol Club - Backend

Serverless Example API using a Apollo Server, and AWS (API Gateway + DynamoDb + Lambda).

![text](../images/api-1.png)
![text](../images/api-2.png)

_TODO_:

- Write more tests, especially early to identify change points.
- Add delete mutations
- Utilize different types other than strings

## Test Invocations

### Offline

![text](../images/api-2.png)

```bash
# Getting API details
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
http://localhost:4040/api/about

# The result should be the screen shot above.

# Creating a team
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"mutation CreateTeam($input: CreateTeamInput!) { createTeam(input: $input) { Id Metadata TeamName Arena  } }",
    "variables": {"input":{"teamId":"test-team-1","teamName":"Test Team","arena":"Test Team Arena"}}
  }' \
http://localhost:4040/api/graphql

# The result should be:
# {"data":{"createTeam":{"Id":"test-team-1","Metadata":"Team","TeamName":"Test Team","Arena":"Test Team Arena"}}}

# Retrieving a team
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"query { team(teamId: \"test-team-1\") { Id Metadata TeamName Arena  } }"
  }' \
http://localhost:4040/api/graphql

# The result should be:
# {"data":{"team":{"Id":"test-team-1","Metadata":"Team","TeamName":"Test Team","Arena":"Test Team Arena"}}}
```

### Deployed

```bash
# Getting API details
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/about

# The result should be the screen shot above.

# Creating a team
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"mutation CreateTeam($input: CreateTeamInput!) { createTeam(input: $input) { Id Metadata TeamName Arena  } }",
    "variables": {"input":{"teamId":"test-team-1","teamName":"Test Team","arena":"Test Team Arena"}}
  }' \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/graphql

# The result should be:
# {"data":{"createTeam":{"Id":"test-team-1","Metadata":"Team","TeamName":"Test Team","Arena":"Test Team Arena"}}}

# Retrieving a team
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"query { team(teamId: \"test-team-1\") { Id Metadata TeamName Arena  } }"
  }' \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/graphql

# The result should be:
# {"data":{"team":{"Id":"test-team-1","Metadata":"Team","TeamName":"Test Team","Arena":"Test Team Arena"}}}
```
