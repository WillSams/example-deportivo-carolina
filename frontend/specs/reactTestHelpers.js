import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const mockStore = () =>
  createStore((state) => state, {
    shared: { config: { bypass_legacy_app_redirect: true } },
  });

export const mountWithRouter = (node, initialEntries = ['/']) =>
  mount(
    <Provider store={mockStore()}>
      <MemoryRouter initialEntries={initialEntries}>{node}</MemoryRouter>
    </Provider>
  );

export const mountWithRedux = (node) =>
  mount(<Provider store={mockStore()}>{node}</Provider>);
