# Example Site - Deportivo de Carolina Fútbol Club

A full-stack application using React, GraphQL, & Amazon Web Services (API Gateway + Cloudfront + DynamoDb + Lambda + S3).

![text](images/frontend-1.png)
![text](images/frontend-2.png)
![text](images/frontend-3.png)
![text](images/dynamodb-1.png)

For a KeystoneJS 4.0 example abandoned March 2019, see the `abandoned` branch.

## TODO

- Better implement token-based authentication.
- Add data importer.

### Backend

- Write more tests.
- Use Passport package to authorize the token.
- Add delete mutations
- Utilize different types other than strings

### Frontend

- Write more tests.
- Add content editor components for home, news, teams, and static.

## Pre-requisites

First of all, these instructions will only be targeting Debian-based distros (Ubuntu, Linux Mint, etc.) but they can also work under [Windows using the Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about).  The following tools need to be installed:

- Install [direnv](https://direnv.net).
- Install [Docker](https://www.docker.com).
- Install [NodeJS](https://nodejs.org/en/download/).
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
- For deployments to AWS, a [Serverless account](https://app.serverless.com/).

### Installing Node Version Manager (NVM)

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc
source ~/.bashrc
nvm install lts/fermium # Node 14x because it's 2022 and Amazon hasn't upgraded their framework yet...
```

## Development

### Getting Both Backend/Frontend Configured

This can be done by executing the following:

```bash
# ROOT - Execute the following commands in the root (./) folder:
nvm use                                 # use the version of NodeJS listed in .nvmrc
npm i -g serverless                     # installs Serverless globally to your lts/fermium install

cd backend && npm i && npm audit fix    # install the backend packages listed in package.json
cd frontend && npm i && npm audit fix   # install the frontend packages listed in package.json
npm i && npm audit fix                  # install the root packages listed in package.json

cp .envrc.example .envrc                # IMPORTANT! Edit file and set your environment variables in .envrc
direnv allow                            # refreshes variables in your PATH

serverless login                        # will open a browser, we'll need to be logged in for backend/frontend steps

# BACKEND - Execute  the following commands in the backend folder:
cp docs/serverless.yml.example serverless.yml   # IMPORTANT! Edit file and set your Serverless 'org' and your TOKEN_SECRET
serverless --org=<YOUR SERVERLESS ORG>          # IMPORTANT! Create the app/service on Serverless.com. 
#Do you want to deploy now? No                  # IMPORTANT! We can do this later.     

# FRONTEND - Execute  the following commands in the frontend folder:
cp docs/serverless.yml.example serverless.yml   # IMPORTANT! Edit file and set your Serverless 'org' and your REACT_APP_TOKEN_SECRET
serverless --org=<YOUR SERVERLESS ORG>          # IMPORTANT! Create the app/service on Serverless.com.   
#Do you want to deploy now? No                  # IMPORTANT! We can do this later.     
```

### Getting Both Backend/Frontend Started

If the steps in `Getting Both Backend/Frontend Configured` have been satisifed, back in the root of the repository execute the following:

```bash
docker-compose pull   # pull the DynamoDB Docker container
docker-compose up -d  # Execute the Docker container

npm run seed          # create and seed the Deportivo-development table
npm run dev           # concurrently starts both the frontend web site and backend api.
```

## Deploying To Amazon Web Services

Two ways to do it:

### Deploy to staging once pull request is merged

Running the following command in root path will deploy both backend and frontend to staging.  Alternatively, to only do either, just execute it in either the `backend` or `frontend` folder. However, the preferred way is to let CircleCI do this after merging your pull requests into the master branch.

_TODO_:  Need to complete tasks in `ci/add-continious-integration-and-deployment` branch.

```bash
npm run deploy
```

### Deploy manually

Deploy any branch to whatever environment (staging, production) by executing (replace `ENVIRONMENT` with desired):

```bash
serverless deploy --stage ENVIRONMENT
```
