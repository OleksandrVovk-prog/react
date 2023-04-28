import { Link } from 'react-router-dom';

import ILinkButton from './interfaces/ILinkButton';

import styles from './sass/LinkButton.module.scss';

function LinkButton({ to, title, onClick }: ILinkButton): JSX.Element {
  return (
    <Link
      to={to}
      className={styles.linkButton}
      onClick={onClick}
    >
      { title }
    </Link>
  );
}

export default LinkButton;
