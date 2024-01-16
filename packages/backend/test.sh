echo "Creating DynamoDB table $SOCCER_TABLE..."
  aws dynamodb create-table \
      --profile "$AWS_PROFILE" \
      --endpoint-url "http://localhost:$DYNAMODB_PORT" \
      --table-name "$SOCCER_TABLE" \
      --attribute-definitions \
          AttributeName=Id,AttributeType=S \
          AttributeName=Metadata,AttributeType=S \
          AttributeName=GameDay,AttributeType=S \
          AttributeName=TeamName,AttributeType=S \
          AttributeName=PlayerName,AttributeType=S \
      --key-schema \
          AttributeName=Id,KeyType=HASH \
          AttributeName=Metadata,KeyType=RANGE \
      --provisioned-throughput \
          ReadCapacityUnits=10,WriteCapacityUnits=5 \
      --global-secondary-indexes \
      "[
              {
                  \"IndexName\": \"MetadataIndex\",
                  \"KeySchema\": [
                      {
                          \"AttributeName\": \"Metadata\",
                          \"KeyType\": \"HASH\"
                      }
                  ],
                  \"Projection\": { \"ProjectionType\": \"ALL\" },
                  \"ProvisionedThroughput\": {
                      \"ReadCapacityUnits\": 1,
                      \"WriteCapacityUnits\": 1
                  }
              },
              {
                  \"IndexName\": \"MetadataGameIndex\",
                  \"KeySchema\": [
                      {
                          \"AttributeName\": \"Metadata\",
                          \"KeyType\": \"HASH\"
                      },
                      {
                          \"AttributeName\": \"GameDay\",
                          \"KeyType\": \"RANGE\"
                      }
                  ],
                  \"Projection\": { \"ProjectionType\": \"ALL\" },
                  \"ProvisionedThroughput\": {
                      \"ReadCapacityUnits\": 1,
                      \"WriteCapacityUnits\": 1
                  }
              },
              {
                  \"IndexName\": \"MetadataPlayereIndex\",
                  \"KeySchema\": [
                      {
                          \"AttributeName\": \"Metadata\",
                          \"KeyType\": \"HASH\"
                      },
                      {
                          \"AttributeName\": \"PlayerName\",
                          \"KeyType\": \"RANGE\"
                      }
                  ],
                  \"Projection\": { \"ProjectionType\": \"ALL\" },
                  \"ProvisionedThroughput\": {
                      \"ReadCapacityUnits\": 1,
                      \"WriteCapacityUnits\": 1
                  }
              }
          ]" \
    --region "${AWS_REGION}"
    echo "Completed creating DynamoDB table $SOCCER_TABLE."
