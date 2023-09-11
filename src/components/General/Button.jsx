import React from 'react';
import styles from '../../styles/General.module.scss';

const Button = ({ variant, value, fontSize, p }) => {
  return (
    <button
      style={{ fontSize: fontSize || '24px', padding: `${p?.y || '0'} ${p?.x || '0'}` }}
      className={`${styles[`button-${variant}`]} ${styles.button}`}
    >
      {value}
    </button>
  );
};

export default Button;
