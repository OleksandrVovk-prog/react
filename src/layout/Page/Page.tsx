import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import usePageTitle from '../../hooks/usePageTitle';
import Header from '../Header/Header';
import Title from '../../components/Title/Title';

/**
 * Main page layout
 */
function Page(): ReactElement {
  const pageTitle = usePageTitle();
  return (
    <div className="page">
      <Header />
      <Title text={pageTitle} />
      <Outlet />
    </div>
  );
}

export default Page;
