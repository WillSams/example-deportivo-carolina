# Example AWS Lambda - Deportivo de Carolina Fútbol Club - Importer

Example AWS Lambda for an SQS Worker to process json files from S3 and import them into a DynamoDb database.

Amazon S3 event notifications will be delivered to an Amazon SQS queue once a file is uploaded to S3 `club-data-incoming` bucket.  The SQS queue will trigger the Lambda to import the data into DynamoDb.  Once this is done, the Lambda will move the file to the `club-data-processed` bucket.  The real-world context is that the client will have FTP credentials to upload json files to S3, this event will create an SQS message, and the Lambda will be triggered by an SQS message.  The Lambda will then import the data into DynamoDb, and move the file to the processed bucket.

## Test Invocations

### Offline

```bash
# Getting API details
curl -X GET \
-H "Content-Type: application/json" \
http://localhost:8080/produce
-d '{ "teamId":"test-team-1","teamName":"Test Team","arena":"Test Team Arena"}}'
```

In response, you should see output similar to:

```bash
{"message": "Message accepted!"}
```
