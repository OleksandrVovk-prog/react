import { useId } from 'react';

import ITextInput from '../interfaces/ITextInput';

import styles from '../sass/TextInput.module.scss';

function TextInput({ name, label, register }: ITextInput): JSX.Element {
  const id = useId();
  return (
    <label className={styles.loginLabel} htmlFor={`${id}-${name}`}>
      <span>{label}</span>
      <input id={`${id}-${name}`} {...register(name)} />
    </label>
  );
}

export default TextInput;
