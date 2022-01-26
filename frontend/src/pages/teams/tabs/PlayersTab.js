import React from 'react';

import { formatPlayerAge, formatHeight } from '../../../shared/utils';

const PlayersTab = ({ players = [] }) => {
  return (
    <>
      <div data-name="players-tab">
        <div className="col-lg-12 bg-dark mx-auto">
          <h3>Roster</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

          <div className="container flex-column">
            <table className="table bg-light ">
              <thead>
                <tr>
                  <th scope="col">Jersey #</th>
                  <th scope="col">Position</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Birth Date</th>
                  <th scope="col">Height</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Shoots</th>
                  <th scope="col">Home Town</th>
                </tr>
              </thead>
              <tbody>
                {_.map(players, player => (
                  <tr key={player?.Metadata}>
                    <td>{player?.Jersey}</td>
                    <td>{player?.Position}</td>
                    <td>{player?.PlayerName}</td>
                    <td>{formatPlayerAge(player?.BirthDate)}</td>
                    <td>{player?.BirthDate}</td>
                    <td>{formatHeight(player?.Height)}</td>
                    <td>{player?.Weight}</td>
                    <td>{player?.Shoots}</td>
                    <td>{player?.Hometown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersTab;