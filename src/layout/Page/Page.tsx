import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Page(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default Page;
