import { useContext } from 'react';
import { Context } from '../../context/pages/StaticContext';
import styles from './sass/StaticContext.module.scss';

export default function StaticContextView() {
  const { title } = useContext(Context);

  return (
    <div className={styles.staticContext}>
      <div className={styles.events}>
        <p>{title}</p>
      </div>
    </div>
  );
}
