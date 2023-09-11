import styles from '../styles/About.module.scss';
import { ReactComponent as VectorAboutSvg } from '../assets/images/vector_about.svg';
import { ReactComponent as VectorAboutSvg2 } from '../assets/images/vector_about2.svg';
import { ReactComponent as PandaImg } from '../assets/images/panda_1.svg';
import AboutMenu from '../components/About/AboutMenu';
import AboutItems from '../components/About/AboutItems';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.leftSectionBackground}>
        <div className={styles.pandaImageAboutContainer}>
          <PandaImg className={styles.pandaAboutImage} />
        </div>
        <VectorAboutSvg className={styles.vectorAboutSvg} />
      </div>
      <div className={styles.rightSectionBackground}>
        <div className={styles.aboutInfoWrapper}>
          <h2 className={styles.aboutTitle}>About us</h2>
          <p className={styles.aboutInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, arcu nec finibus tristique, nunc ante
            vehicula ipsum, eu convallis felis magna eu purus. Mauris molestie convallis ultricies. Ut blandit leo at
            sem gravida lacinia. Nam ullamcorper porta condimentum. Vivamus malesuada nec turpis sit amet lobortis
          </p>
          <AboutMenu />
          <AboutItems />
        </div>
        <VectorAboutSvg2 className={styles.vectorAboutSvg2} />
      </div>
    </section>
  );
};

export default About;
