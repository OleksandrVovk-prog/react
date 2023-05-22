import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../src/store/store';

function Preview(Story): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Story />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default Preview;
