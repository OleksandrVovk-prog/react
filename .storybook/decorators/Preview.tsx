import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, makeStore, store } from '../../src/store/store';
import auth from '../../src/mocks/auth';

function Preview(Story): ReactElement {
  const state = store.getState();
  const mockStore = makeStore({ ...state, auth });
  return (
    <BrowserRouter>
      <Provider store={mockStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Story />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default Preview;
