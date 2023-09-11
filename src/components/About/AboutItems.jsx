import styles from '../../styles/About.module.scss';

const AboutItems = () => {
  return (
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItems__singleItem}>Web-development</li>
      <li className={styles.aboutItems__singleItem}>Ux-Ui design</li>
    </ul>
  );
};

export default AboutItems;
