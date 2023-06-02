import ITitle from './interfaces/ITitle';

import styles from './sass/Title.module.scss';

/**
 * H1 title component
 */
export default function Title({ text }: ITitle): JSX.Element {
  return (
    <h1 className={styles.appTitle} data-testid="main-title">
      {text}
    </h1>
  );
}
