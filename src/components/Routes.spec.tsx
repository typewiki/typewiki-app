import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { createReduxStore } from 'store';
import Routes, { HOME, COUNTER } from './Routes';

describe('App container', () => {
  const renderComponent = (route: string) => {
    const store = createReduxStore();
    const routes = (
      <Provider store={store as any}>
        <MemoryRouter initialEntries={[route]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );

    return render(routes);
  };

  it('should render the home page', () => {
    const { getByTestId } = renderComponent(HOME);
    expect(getByTestId('me-btn')).toHaveTextContent('home.me-btn');
  });

  it('should render the counter page', () => {
    const { getByTestId } = renderComponent(COUNTER);
    expect(getByTestId('counter')).toHaveTextContent('0');
  });
});
