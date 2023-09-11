import styles from '../styles/MyWork.module.scss';
import { ReactComponent as VectorMyWorkSvg } from '../assets/images/vector_mywork.svg';
import { ReactComponent as VectorMyWorkSvg2 } from '../assets/images/vector_mywork2.svg';
import { ReactComponent as DeviceFrame } from '../assets/images/device_frame_mywork.svg';
import { ReactComponent as DeviceFrameShadow } from '../assets/images/device_frame_shadow.svg';

const MyWork = () => {
  return (
    <section className={styles.myWorkSection}>
      <div className={styles.myWorkWrapper}>
        <h2 className={styles.myWorkTitle}>My work</h2>
        <DeviceFrame className={styles.deviceFrame} />
        <DeviceFrameShadow className={styles.deviceFrameShadow} />
      </div>
      <VectorMyWorkSvg className={styles.vectorMyWorkSvg} />
      <VectorMyWorkSvg2 className={styles.vectorMyWorkSvg2} />
    </section>
  );
};

export default MyWork;
