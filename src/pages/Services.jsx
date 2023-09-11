import styles from '../styles/Services.module.scss';
import { ReactComponent as VectorServicesSvg } from '../assets/images/vector_service.svg';
import { ReactComponent as VectorServicesSvg2 } from '../assets/images/vector_service2.svg';
import { ReactComponent as VectorServicesSvg3 } from '../assets/images/vector_service3.svg';
import ServicesList from '../components/MyServicesComponents/ServicesList';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>
        <h2 className={styles.servicesTitle}>My services</h2>
        <ServicesList />
      </div>
      <VectorServicesSvg className={styles.vectorServicesSvg} />
      <VectorServicesSvg2 className={styles.vectorServicesSvg2} />
      <VectorServicesSvg3 className={styles.vectorServicesSvg3} />
    </section>
  );
};

export default Services;
