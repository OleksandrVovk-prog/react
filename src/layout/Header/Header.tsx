import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
