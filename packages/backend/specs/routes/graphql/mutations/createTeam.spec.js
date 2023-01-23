process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

chai.use(require('chai-http'));
chai.should();

describe('Route - Mutations - /api/graphql', () => {

  it('`createTeam` mutation should create team', done => {

    const createTeamInput = {
      teamId: 'test-team-4',
      teamName: 'Savannah GA JUCO',
      arena: 'Savannah Civic Center'
    };

    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ 'Authorization': `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `mutation CreateTeam($input: CreateTeamInput!) {
          createTeam(input: $input) {
            Id
            Metadata
            TeamName
            Arena
          }
        }`,
        variables: { input: createTeamInput }
      })
      .end((err, res) => {
        if (err) return done(err);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.createTeam;

        result.should.have.property('Id');
        expect(result.Id).to.equal(createTeamInput.teamId);

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal('Team');

        result.should.have.property('TeamName');
        expect(result.TeamName).to.equal(createTeamInput.teamName);

        result.should.have.property('Arena');
        expect(result.Arena).to.equal(createTeamInput.arena);

        done();
      });
  });
});