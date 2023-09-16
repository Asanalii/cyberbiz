import styles from '../styles/MyWork.module.scss';
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
    </section>
  );
};

export default MyWork;
