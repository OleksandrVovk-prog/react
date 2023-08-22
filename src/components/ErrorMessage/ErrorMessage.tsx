import { ReactElement } from 'react';

import { testIdErrorMessage } from '../../constants/TestId';
import IErrorMessage from './interfaces/IErrorMessage';

import styles from './sass/ErrorMessage.module.scss';
/**
 * Primary UI component to display error message for form fields.
 */
function ErrorMessage({ message }: IErrorMessage): ReactElement {
  return (
    <span className={styles.errorMessage} data-testid={testIdErrorMessage}>
      {message}
    </span>
  );
}

export default ErrorMessage;
