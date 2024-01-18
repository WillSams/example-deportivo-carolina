import React from 'react';

const NewsPage = () => (
  <div data-name="News-page">
    <div className="col-lg-12 bg-dark mx-auto">
      <br />
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            <div className="text-dark" href="#">
              Post #3
            </div>
          </h3>
          <div className="mb-1 text-muted">Jan 22</div>
          <p className="card-text mb-auto">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            lobortis. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <a href="#">Continue reading</a>
        </div>
        {
          <img
            className="card-img-right flex-auto d-none d-md-block"
            data-src="holder.js/200x250?theme=thumb"
            alt="Thumbnail [200x250]"
          />
        }
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            <div className="text-dark" href="#">
              Post #2
            </div>
          </h3>
          <div className="mb-1 text-muted">Jan 17</div>
          <p className="card-text mb-auto">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            lobortis. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <a href="#">Continue reading</a>
        </div>
        {
          <img
            className="card-img-right flex-auto d-none d-md-block"
            data-src="holder.js/200x250?theme=thumb"
            alt="Thumbnail [200x250]"
          />
        }
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            <div className="text-dark" href="#">
              Post #1
            </div>
          </h3>
          <div className="mb-1 text-muted">Jan 10</div>
          <p className="card-text mb-auto">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            lobortis. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <a href="#">Continue reading</a>
        </div>
        {
          <img
            className="card-img-right flex-auto d-none d-md-block"
            data-src="holder.js/200x250?theme=thumb"
            alt="Thumbnail [200x250]"
          />
        }
      </div>

      <br />
    </div>
  </div>
);

export default NewsPage;
