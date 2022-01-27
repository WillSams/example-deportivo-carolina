import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { actionTypes, connectPage } from '../../shared/base';

import { default as TeamsTabs } from './tabs';

const TeamsPage = ({ }) => {
  const team = useSelector(state => state?.site?.teams?.team);

  return (
    <div data-name="teams-page" className="col-lg-12">

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4 font-italic">{team?.TeamName}</h1>
        <Tab.Container defaultActiveKey="arena">
          <Row className="nav nav-tabs mb-4">
            <Nav className="bg-dark">
              <Col sm={6}>
                <Nav.Item>
                  <Nav.Link eventKey="arena">Arena</Nav.Link>
                </Nav.Item>
              </Col>
              <Col sm={6}>
                <Nav.Item>
                  <Nav.Link eventKey="players">Roster</Nav.Link>
                </Nav.Item>
              </Col>
            </Nav>
          </Row>
          <Row lg={12}>
            <Tab.Content>
              <Tab.Pane eventKey="arena">
                {<TeamsTabs.DefaultTab arenaName={team?.Arena} />}
              </Tab.Pane>
              <Tab.Pane eventKey="players">
                {<TeamsTabs.PlayersTab players={team?.Players} />}
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>

    </div >
  );
};

export default connectPage(TeamsPage, {
  pageName: actionTypes.TEAMS_PAGE,
  state: state => state?.site?.teams?.team,
  load: {
    team: props => {
      return {
        type: actionTypes.GET_TEAM,
        teamId: props.teamId,
      };
    }
  },
});

