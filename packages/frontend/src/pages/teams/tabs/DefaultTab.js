import _ from 'lodash';
import React from 'react';

const DefaultTab = ({ arenaName = 'Field Name Here', }) => {
  return (
    <div data-name="arena-tab">
      <div className="col-lg-12 bg-dark mx-auto">
        <h3>{arenaName}</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

        <div className="container w-1000 d-flex flex-column">
          <img
            width={1000}
            height={750}
            src="/img/default-bkg.jpg"
            alt="Thumbnail [1000x750]" />
        </div>
      </div>
    </div>

  );
};

export default DefaultTab;