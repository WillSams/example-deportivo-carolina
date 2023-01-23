process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

chai.use(require('chai-http'));
chai.should();

describe('Route - Mutations - /api/graphql', () => {

  it('`createGame` mutation should create game', done => {

    const createGameInput = {
      teamId: 'test-team-4',
      gameId: 'Game-123',
      gameDay: 'Oct-24-2022',
      winLoss: 'Loss'
    };

    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ 'Authorization': `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `mutation CreateGame($input: CreateGameInput!) {
          createGame(input: $input) {
            Id
            Metadata
            GameDay
            WinLoss
          }
        }`,
        variables: { input: createGameInput }
      })
      .end((err, res) => {
        if (err) return done(err);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.createGame;

        result.should.have.property('Id');
        expect(result.Id).to.equal(createGameInput.teamId);

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal(createGameInput.gameId);

        result.should.have.property('GameDay');
        expect(result.GameDay).to.equal(createGameInput.gameDay);

        result.should.have.property('WinLoss');
        expect(result.WinLoss).to.equal(createGameInput.winLoss);

        done();
      });
  });
});