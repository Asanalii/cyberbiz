import { ReactComponent as PandaImg } from '../assets/images/panda_1.svg';
import styles from '../styles/Home.module.scss';
import Button from '../components/General/Button';

const Home = ({ isLeftDirection }) => {
  return (
    <section className={styles.homeSection}>
      <div className={isLeftDirection ? styles.leftSectionBackground : styles.rightSectionBackground}></div>
      <div className={isLeftDirection ? styles.rightSectionBackground : styles.leftSectionBackground}></div>
      <div className={styles.pandaImageWrapper}>
        <PandaImg className={styles.pandaImg} />
      </div>
      <div className={styles.startContainer}>
        <Button
          value={'START'}
          variant={'accent'}
          fontSize={'35px'}
          p={{
            y: '12px',
            x: '130px',
          }}
        />
      </div>
    </section>
  );
};

export default Home;
