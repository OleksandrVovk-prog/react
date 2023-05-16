import styles from './sass/Loader.module.scss';
import loader from '../../assets/images/loader.svg';

/**
 * Primary UI component for displaying a loader in the project.
 */
export default function Loader(): JSX.Element {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
      />
    </div>
  );
}
