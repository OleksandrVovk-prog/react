import useTheme from './hooks/useTheme';
import Grid from './pages/Grid/Grid';

import type { ReactElement } from 'react';

import './styles/global.scss';

function App(): ReactElement {
  useTheme();
  return (
    <Grid />
  );
}

export default App;
