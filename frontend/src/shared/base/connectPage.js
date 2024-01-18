import React from 'react';
import { connect } from 'react-redux';

import { useLoadPage } from '../hooks';

const loadPage = (WrappedComponent, config) => {
  const WithLoadPage = (props) => {
    useLoadPage({ props, config });

    return <WrappedComponent {...props} />;
  };

  WithLoadPage.displayName = `WithLoadPage${
    WrappedComponent?.displayName ?? WrappedComponent?.name ?? 'Component'
  }`;

  return WithLoadPage;
};

export const connectPage = (WrappedComponent, config) => {
  const mapStateToProps = (state, ownProps) => {
    const stateFromConfig = config.state;

    return {
      ...stateFromConfig(state, ownProps),
    };
  };
  const mapDispatchToProps = (dispatch) => {
    const dispatchFromConfig = config.dispatch ? config.dispatch(dispatch) : {};

    dispatchFromConfig.getDispatch = () => dispatch;

    return dispatchFromConfig;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(loadPage(WrappedComponent, config));
};
