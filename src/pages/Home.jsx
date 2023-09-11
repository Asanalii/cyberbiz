import React from 'react';
import { ReactComponent as PandaImg } from '../assets/images/panda_1.svg';
import { ReactComponent as VectorSvg } from '../assets/images/vector_home.svg';
import { ReactComponent as VectorSvg2 } from '../assets/images/vector_home2.svg';
import styles from '../styles/Home.module.scss';
import Button from '../components/General/Button';

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.leftSectionBackground}></div>
      <div className={styles.rightSectionBackground}></div>
      <div className={styles.pandaImageWrapper}>
        <PandaImg className={styles.pandaImg} />
      </div>
      <VectorSvg className={styles.vectorSvg} />
      <VectorSvg2 className={styles.vectorSvg2} />
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
