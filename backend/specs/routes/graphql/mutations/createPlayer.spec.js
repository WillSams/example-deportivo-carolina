process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

chai.use(require('chai-http'));
chai.should();

describe('Route - Mutations - /api/graphql', () => {

  it('`createPlayer` mutation should create player', done => {

    const createPlayerInput = {
      teamId: 'test-team-4',
      playerId: 'Player-abc',
      playerName: 'Jane Doe',
      position: 'S'
    };

    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `mutation CreatePlayer($input: CreatePlayerInput!) {
          createPlayer(input: $input) {
            Id
            Metadata
            PlayerName
            Position
          }
        }`,
        variables: { input: createPlayerInput }
      })
      .end((err, res) => {
        if (err) return done(err);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.createPlayer;

        result.should.have.property('Id');
        expect(result.Id).to.equal(createPlayerInput.teamId);

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal(createPlayerInput.playerId);

        result.should.have.property('PlayerName');
        expect(result.PlayerName).to.equal(createPlayerInput.playerName);

        result.should.have.property('Position');
        expect(result.Position).to.equal(createPlayerInput.position);

        done();
      });
  });
});