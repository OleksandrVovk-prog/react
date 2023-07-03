import { ReactElement } from 'react';

import { testIdLoader } from '../../constants/TestId';

import styles from './sass/Loader.module.scss';
import loader from '../../assets/images/loader.svg';

/**
 * Primary UI component for displaying a loader in the project.
 */
export default function Loader(): ReactElement {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
        data-testid={testIdLoader}
      />
    </div>
  );
}
