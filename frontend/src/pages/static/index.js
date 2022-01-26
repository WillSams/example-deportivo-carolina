import React from 'react';

import { useParams } from 'react-router-dom';

import { default as StaticFragment } from './fragments';
import { InvalidRoute } from '../../shared/components';

const StaticPage = () => {

  let { pageType } = useParams();
  pageType = pageType[0].toUpperCase() + pageType.substring(1);

  return (
    <div className='col-lg-12'>
      <div className='jumbotron p-3 p-md-5 text-white rounded bg-dark'>
        <div className='col-lg-12 px-0'>
          <h1 className='display-4 font-italic'>{pageType}</h1>
        </div>
      </div>

      {(() => {
        switch (pageType) {

          case 'About':
            return (<StaticFragment.AboutPage />);

          case 'Commitments':
            return (<StaticFragment.CommitmentsPage />);

          case 'News':
            return (<StaticFragment.NewsPage />);

          case 'Partners':
            return (<StaticFragment.PartnersPage />);

          case 'Privacy':
            return (<StaticFragment.PrivacyPage />);

          case 'Staff':
            return (<StaticFragment.StaffPage />);

          case 'Terms':
            return (<StaticFragment.TermsPage />);

          default:
            return (<InvalidRoute />);

        };
      })()}
    </div>
  );
};

export default StaticPage;