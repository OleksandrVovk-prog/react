import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './sass/Page.module.scss';

export default function PageView() {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  );
}
