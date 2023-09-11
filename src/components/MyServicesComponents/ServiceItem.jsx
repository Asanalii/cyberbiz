
import styles from '../../styles/Services.module.scss';

const ServiceItem = ({ title, content }) => {
  return (
    <li className={styles.serviceItem}>
      <h3 className={styles.serviceItem__title}>{title}</h3>
      <p className={styles.serviceItem__content}>{content}</p>
    </li>
  );
};

export default ServiceItem;
