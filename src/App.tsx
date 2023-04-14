import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './layout/Page/Page';
import PageProtected from './layout/Page/PageProtected';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';

import './i18n';
import './styles/global.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PageProtected redirectUri="/login" />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
