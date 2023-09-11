import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/icons8-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/icons8-instagram.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/icons8-telegram-app.svg';
import styles from '../../styles/General.module.scss';

const IconsContainer = () => {
  return (
    <ul className={styles.iconsList}>
      <FacebookIcon className={styles.icon} />
      <TelegramIcon className={styles.icon} />
      <InstagramIcon className={styles.icon} />
    </ul>
  );
};

export default IconsContainer;
