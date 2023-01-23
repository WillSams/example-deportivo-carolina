import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-dark" data-name="home-page">

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-lg-12 px-0">
          <h1 className="display-4 font-italic">Deportivo de Carolina Fútbol Club</h1>
          <p className="lead my-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

            Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

      <div className="col-lg-12 bg-dark mx-auto">

        <div className="row mb-2">
          <div className="col-md-6">

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start bg-light">
                <strong className="d-inline-block mb-2 text-success">STAR OF THE WEEK</strong>
                <h4 className="mb-0">
                  <a className="text-dark" href="#">Player XYZ</a>
                </h4>
                <div className="mb-1 text-muted">Week of April 18-25</div>
                <p className="card-text mb-auto">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
              {<img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x400?theme=thumb" alt="Thumbnail [200x400]" />}
            </div>
          </div>

          <div className="col-md-6">

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">LATEST SCORES</strong>
                <p className="card-text mb-auto">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
            </div>

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">LATEST COMMITMENTS</strong>
                <p className="card-text mb-auto">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
