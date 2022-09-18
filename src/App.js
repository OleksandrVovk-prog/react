import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './layout/Page/Page';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Lazy from './pages/Lazy/Lazy';
import Memo from './pages/Memo/Memo';
import StaticContext from './pages/StaticContext/StaticContext';
import './i18n';
import './styles/globals.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Page />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/lazy" element={<Lazy />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/context" element={<StaticContext />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
