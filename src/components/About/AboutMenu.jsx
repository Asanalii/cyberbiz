import styles from '../../styles/About.module.scss';

const AboutMenu = () => {
  return (
    <ul className={styles.aboutMenu}>
      <li className={styles.aboutMenu__item}>Skills</li>
      <li className={styles.aboutMenu__item}>Experience</li>
      <li className={styles.aboutMenu__item}>Awards</li>
    </ul>
  );
};

export default AboutMenu;
