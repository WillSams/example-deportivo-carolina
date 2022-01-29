process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

const { reseedDb } = require('../../../../specs');

chai.use(require('chai-http'));
chai.should();

describe('Route - Queries - /api/graphql', () => {
  before(() => reseedDb());

  it('`teamGames` query should retrieve games for a team', done => {
    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `
        query Query($teamId: String!) {
          teamGames(teamId: $teamId) {
            Id
            Metadata
            GameDay
            WinLoss
          }
        }`,
        variables: { 'teamId': 'test-team-1' },
      })
      .end((err, res) => {
        if (err) return done(err);

        expect(res.status).to.equal(200);

        res.headers['content-type'].should.contains('application/json');

        const data = res?.body?.data;

        expect(data.teamGames.length).to.equal(2);

        done();
      });
  });
});