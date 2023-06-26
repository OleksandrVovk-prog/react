import React from 'react';
import styles from './sass/TextField.module.scss';
import ITextField from './interfaces/ITextField';

function TextField({ text, styleType }: ITextField): JSX.Element {
  return (
    <span className={`${styles.textField} ${styleType ? styles[styleType] : ''}`}>{text}</span>
  );
}

export default TextField;
