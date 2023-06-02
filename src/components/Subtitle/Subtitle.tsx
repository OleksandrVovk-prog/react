import ISubtitle from './interfaces/ISubtitle';

import styles from './sass/Subtitle.module.scss';

/**
 * H2 subtitle component
 */
export default function Subtitle({ text }: ISubtitle): JSX.Element {
  return (
    <h2 className={styles.appSubtitle} data-testid="subtitle">
      {text}
    </h2>
  );
}
