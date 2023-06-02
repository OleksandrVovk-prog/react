import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../src/store/store';
import { makeStore, store } from '../../src/store/store';
import auth from '../../src/mocks/auth';

function Preview(Story): JSX.Element {
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
