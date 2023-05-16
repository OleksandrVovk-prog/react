import IErrorMessage from './interfaces/IErrorMessage';

import styles from './sass/ErrorMessage.module.scss';

/**
 * Primary UI component to display error message for form fields.
 */
function ErrorMessage({ message }: IErrorMessage): JSX.Element {
  return (
    <span className={styles.errorMessage}>
      {message}
    </span>
  );
}

export default ErrorMessage;
